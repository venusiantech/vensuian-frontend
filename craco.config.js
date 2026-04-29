// craco.config.js
const path = require("path");

require("dotenv").config();

// Match NODE_ENV / BABEL_ENV to the craco command.
// Craco runs `scripts/build.js` / `scripts/start.js` in a child process — argv is like
// `node .../dist/scripts/build.js` (no literal "build"), so don't rely on argv.includes("build").
// `npm_lifecycle_event` is set by npm/yarn; also detect the script path for direct `node .../build.js`.
const lifecycle = process.env.npm_lifecycle_event;
const isBuildScript =
  lifecycle === "build" ||
  process.argv.some((arg) => /[/\\]scripts[/\\]build\.js$/.test(arg));
const isStartScript =
  lifecycle === "start" ||
  process.argv.some((arg) => /[/\\]scripts[/\\]start\.js$/.test(arg));

// `babel-preset-react-app` uses `BABEL_ENV || NODE_ENV`. Leaked dev BABEL_ENV during build
// causes react-refresh errors or ships refresh into production. Leaked production NODE_ENV
// during start breaks the dev server.
if (isStartScript) {
  process.env.NODE_ENV = "development";
  process.env.BABEL_ENV = "development";
} else if (isBuildScript) {
  process.env.NODE_ENV = "production";
  process.env.BABEL_ENV = "production";
}

// Dev-only tooling (Emergent visual edits) must NEVER run for `craco build`.
const isDevServer = isStartScript;

// Environment variable overrides
const config = {
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

// Conditionally load health check modules only if enabled
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

let webpackConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {

      // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
        ],
      };

      // Add health check plugin to webpack if enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }
      return webpackConfig;
    },
  },
};

webpackConfig.devServer = (devServerConfig) => {
  // Add health check endpoints if enabled
  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      // Call original setup if exists
      if (originalSetupMiddlewares) {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }

      // Setup health endpoints
      setupHealthEndpoints(devServer, healthPluginInstance);

      return middlewares;
    };
  }

  return devServerConfig;
};

// Wrap with visual edits (automatically adds babel plugin, dev server, and overlay in dev mode)
if (isDevServer) {
  try {
    const { withVisualEdits } = require("@emergentbase/visual-edits/craco");
    webpackConfig = withVisualEdits(webpackConfig);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && err.message.includes('@emergentbase/visual-edits/craco')) {
      console.warn(
        "[visual-edits] @emergentbase/visual-edits not installed — visual editing disabled."
      );
    } else {
      throw err;
    }
  }
}

module.exports = webpackConfig;