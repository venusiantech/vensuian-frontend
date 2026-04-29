import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { AuthProvider } from "@/lib/auth";
import PublicLayout from "@/components/layout/PublicLayout";
import AdminLayout from "@/components/admin/AdminLayout";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Ecosystem from "@/pages/Ecosystem";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminBlogs from "@/pages/admin/Blogs";
import BlogEditor from "@/pages/admin/BlogEditor";
import AdminProducts from "@/pages/admin/Products";
import AdminLeads from "@/pages/admin/Leads";
import AdminNewsletter from "@/pages/admin/Newsletter";
import AdminSettings from "@/pages/admin/Settings";
import AdminScheduled from "@/pages/admin/Scheduled";
import AdminRss from "@/pages/admin/Rss";
import AdminHealth from "@/pages/admin/Health";
import AdminAnalytics from "@/pages/admin/Analytics";
import AdminEmailSettings from "@/pages/admin/EmailSettings";
import AdminProfile from "@/pages/admin/Profile";
import AdminSeo from "@/pages/admin/Seo";
import AdminStorage from "@/pages/admin/Storage";
import { CampaignsList, CampaignEditor } from "@/pages/admin/Campaigns";

const Pub = ({ children }) => <PublicLayout>{children}</PublicLayout>;
const Adm = ({ children }) => <AdminLayout>{children}</AdminLayout>;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Pub><Home /></Pub>} />
            <Route path="/services" element={<Pub><Services /></Pub>} />
            <Route path="/products" element={<Pub><Products /></Pub>} />
            <Route path="/ecosystem" element={<Pub><Ecosystem /></Pub>} />
            <Route path="/case-studies" element={<Pub><CaseStudies /></Pub>} />
            <Route path="/about" element={<Pub><About /></Pub>} />
            <Route path="/blog" element={<Pub><Blog /></Pub>} />
            <Route path="/blog/:slug" element={<Pub><BlogArticle /></Pub>} />
            <Route path="/contact" element={<Pub><Contact /></Pub>} />
            <Route path="/privacy" element={<Pub><Privacy /></Pub>} />
            <Route path="/terms" element={<Pub><Terms /></Pub>} />

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Adm><AdminDashboard /></Adm>} />
            <Route path="/admin/blogs" element={<Adm><AdminBlogs /></Adm>} />
            <Route path="/admin/blogs/new" element={<Adm><BlogEditor /></Adm>} />
            <Route path="/admin/blogs/:id" element={<Adm><BlogEditor /></Adm>} />
            <Route path="/admin/products" element={<Adm><AdminProducts /></Adm>} />
            <Route path="/admin/leads" element={<Adm><AdminLeads /></Adm>} />
            <Route path="/admin/newsletter" element={<Adm><AdminNewsletter /></Adm>} />
            <Route path="/admin/newsletter/campaigns" element={<Adm><CampaignsList /></Adm>} />
            <Route path="/admin/newsletter/campaigns/new" element={<Adm><CampaignEditor /></Adm>} />
            <Route path="/admin/newsletter/campaigns/:id" element={<Adm><CampaignEditor /></Adm>} />
            <Route path="/admin/settings" element={<Adm><AdminSettings /></Adm>} />
            <Route path="/admin/scheduled" element={<Adm><AdminScheduled /></Adm>} />
            <Route path="/admin/rss" element={<Adm><AdminRss /></Adm>} />
            <Route path="/admin/storage" element={<Adm><AdminStorage /></Adm>} />
            <Route path="/admin/health" element={<Adm><AdminHealth /></Adm>} />
            <Route path="/admin/analytics" element={<Adm><AdminAnalytics /></Adm>} />
            <Route path="/admin/email" element={<Adm><AdminEmailSettings /></Adm>} />
            <Route path="/admin/seo" element={<Adm><AdminSeo /></Adm>} />
            <Route path="/admin/profile" element={<Adm><AdminProfile /></Adm>} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" theme="dark" richColors />
      </AuthProvider>
    </div>
  );
}

export default App;
