import Link from 'next/link'


export default function Header15({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
	return (
		<>

			<header className="header-style-6 header-style-14">
				<nav className={`navbar navbar-expand-lg navbar-light navbar-transparent w-100  ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
					<div className="container px-3">
						<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo.svg" alt="" /></Link>
						<ul className="navbar-nav m-auto gap-1 align-items-lg-center menu-nav-14">
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
								<div className="mega-menu">
									<div className="row">
										<div className="col-6">
											<ul className="dropdown-menu">
												<li><Link className="dropdown-item" href="/">Home page 01</Link></li>
												<li><Link className="dropdown-item" href="/index-2">Home page 02</Link></li>
												<li><Link className="dropdown-item" href="/index-3">Home page 03</Link></li>
												<li><Link className="dropdown-item" href="/index-4">Home page 04</Link></li>
												<li><Link className="dropdown-item" href="/index-5">Home page 05</Link></li>
												<li><Link className="dropdown-item" href="/index-6">Home page 06</Link></li>
												<li><Link className="dropdown-item" href="/index-7">Home page 07</Link></li>
												<li><Link className="dropdown-item" href="/index-8">Home page 08</Link></li>
											</ul>
										</div>
										<div className="col-6">
											<ul className="dropdown-menu">
												<li><Link className="dropdown-item" href="/index-9">Home page 09</Link></li>
												<li><Link className="dropdown-item" href="/index-10">Home page 10</Link></li>
												<li><Link className="dropdown-item" href="/index-11">Home page 11</Link></li>
												<li><Link className="dropdown-item" href="/index-12">Home page 12</Link></li>
												<li><Link className="dropdown-item" href="/index-13">Home page 13</Link></li>
												<li><Link className="dropdown-item" href="/index-14">Home page 14</Link></li>
												<li><Link className="dropdown-item" href="/index-15">Home page 15</Link></li>
												<li><Link className="dropdown-item" href="/index-16">Home page 16</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
									<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
									<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
									<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
									<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/services-4">Services 04</Link></li>
									<li><Link className="dropdown-item" href="/service-detail">Services Details 01</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-2">Services Details 02</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-3">Services Details 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-4">Services Details 04</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/project">Project List</Link></li>
									<li><Link className="dropdown-item" href="/project-detail">Project Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
									<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
									<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
									<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
									<li><Link className="dropdown-item" href="/team">Team</Link></li>
									<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
									<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
									<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
								</ul>
							</li>
						</ul>
						<div className="d-flex align-items-center box-navbar-right">
							<a className="btn-search-main btn-open-search" onClick={handleSearch}>
								<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.06274 0.833984C4.52797 0.833984 0.833984 4.52671 0.833984 9.05995C0.833984 13.5932 4.52797 17.2931 9.06274 17.2931C10.9997 17.2931 12.7811 16.6145 14.189 15.4879L17.6166 18.9125C17.7895 19.0783 18.0206 19.1697 18.2602 19.1673C18.4998 19.1648 18.7289 19.0687 18.8984 18.8994C19.068 18.7302 19.1645 18.5013 19.1673 18.2618C19.17 18.0223 19.0789 17.7912 18.9133 17.6181L15.4857 14.1916C16.6137 12.782 17.2933 10.9985 17.2933 9.05995C17.2933 4.52671 13.5975 0.833984 9.06274 0.833984ZM9.06274 2.6624C12.609 2.6624 15.4625 5.51486 15.4625 9.05995C15.4625 12.605 12.609 15.4647 9.06274 15.4647C5.51644 15.4647 2.66299 12.605 2.66299 9.05995C2.66299 5.51486 5.51644 2.6624 9.06274 2.6624Z" fill="currentColor" />
								</svg>
							</a>
							<a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu d-block d-xl-none">
								<svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line x1="0.46875" y1={1} x2="17.4688" y2={1} stroke="currentColor" strokeWidth={2} />
									<line x1="0.46875" y1={8} x2="17.4688" y2={8} stroke="currentColor" strokeWidth={2} />
									<line x1="0.46875" y1={15} x2="17.4688" y2={15} stroke="currentColor" strokeWidth={2} />
								</svg>
							</a>
							<Link href="#" className="btn btn-primary-md d-none d-lg-inline-block">
								Get a quote
							</Link>
							<div className="header-need-help d-none d-lg-flex">
								<div className="icon-phone">
									<svg width={17} height={18} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z" fill="white" />
									</svg>
								</div>
								<div className="info-help">
									<h3 className="paragraph-base color-white">Need help?</h3>
									<h4 className="paragraph-20-fitree-medium color-white">(808) 555-0111</h4>
								</div>
							</div>
						</div>
					</div>
				</nav>
				{/* offCanvas-menu */}
				<div className="offCanvas__info">
					<div className="offCanvas__close-icon menu-close">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
								<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
							</svg>
						</button>
					</div>
					<div className="offCanvas__logo mb-20">
						<Link href="/"><img src="/assets/imgs/template/logo3.svg" alt="Logo" /></Link>
					</div>
					<div className="offCanvas__side-info mb-30">
						<ul className="navbar-nav navbar-nav-mobile">
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/">Home page 1</Link></li>
									<li><Link className="dropdown-item" href="/index-2">Home page 2</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 3</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 4</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 5</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 6</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 7</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 8</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 9</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 10</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 11</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 12</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 13</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 14</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 15</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 16</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
									<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
									<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
									<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
									<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/services-4">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail">Service Details 01</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-2">Service Details 02</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-3">Service Details 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-4">Service Details 04</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Project List</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Project Detail</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
									<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
									<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
									<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
									<li><Link className="dropdown-item" href="/team">Team</Link></li>
									<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
									<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
									<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="side-gallery mb-4">
						<div className="pt-1" />
						<h4 className="mt-3 mb-3">Gallery</h4>
						<div className="grid-items">
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-1.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-2.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-3.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-4.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-5.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-6.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-7.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-8.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-9.png" alt="vatech" />
							</div>
						</div>
					</div>
					<div className="box-contactus mb-30">
						<h5 className="title-contactus neutral-1000 mb-3">Contact Us</h5>
						<div className="contact-info">
							<p className="address-2 text-md-medium neutral-1000"><strong>Address: </strong>1285 Crescent Wellington Heights, Louisville, KY 40204</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Hours: </strong> 8:00 - 17:00, Mon - Sat</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Phone: </strong> 01 256 986 3</p>
						</div>
					</div>
				</div>
				<div className="offCanvas__overly" />
			</header>

		</>
	)
}
