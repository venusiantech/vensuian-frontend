'use client'
import { useState } from 'react';

import Link from 'next/link'

export default function Offcanvas({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<div className={`offCanvas__info ${isMobileMenu ? "active" : ""}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleMobileMenu}>
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
							<a className="nav-link fw-medium" onClick={() => handleAccordion(1)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
							<ul className={`dropdown-menu ${isAccordion === 1 ? "show" : ""}`}>
								<li><Link className="dropdown-item" href="/">Home page 1</Link></li>
								<li><Link className="dropdown-item" href="/index-2">Home page 2</Link></li>
								<li><Link className="dropdown-item" href="/index-3">Home page 3</Link></li>
								<li><Link className="dropdown-item" href="/index-4">Home page 4</Link></li>
								<li><Link className="dropdown-item" href="/index-5">Home page 5</Link></li>
								<li><Link className="dropdown-item" href="/index-6">Home page 6</Link></li>
								<li><Link className="dropdown-item" href="/index-7">Home page 7</Link></li>
								<li><Link className="dropdown-item" href="/index-8">Home page 8</Link></li>
								<li><Link className="dropdown-item" href="/index-9">Home page 9</Link></li>
								<li><Link className="dropdown-item" href="/index-10">Home page 10</Link></li>
								<li><Link className="dropdown-item" href="/index-11">Home page 11</Link></li>
								<li><Link className="dropdown-item" href="/index-12">Home page 12</Link></li>
								<li><Link className="dropdown-item" href="/index-13">Home page 13</Link></li>
								<li><Link className="dropdown-item" href="/index-14">Home page 14</Link></li>
								<li><Link className="dropdown-item" href="/index-15">Home page 15</Link></li>
								<li><Link className="dropdown-item" href="/index-16">Home page 16</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown menu-item-has-children">
							<a className="nav-link fw-medium" onClick={() => handleAccordion(2)} role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
							<ul className={`dropdown-menu ${isAccordion === 2 ? "show" : ""}`}>
								<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
								<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
								<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
								<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown menu-item-has-children">
							<a className="nav-link fw-medium" onClick={() => handleAccordion(3)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
							<ul className={`dropdown-menu ${isAccordion === 3 ? "show" : ""}`}>
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
							<a className="nav-link fw-medium" onClick={() => handleAccordion(4)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
							<ul className={`dropdown-menu ${isAccordion === 4 ? "show" : ""}`}>
								<li><Link className="dropdown-item" href="/services">Project List</Link></li>
								<li><Link className="dropdown-item" href="/services-2">Project Detail</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown menu-item-has-children">
							<a className="nav-link fw-medium" onClick={() => handleAccordion(5)} role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>
							<ul className={`dropdown-menu ${isAccordion === 5 ? "show" : ""}`}>
								<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
								<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
								<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown menu-item-has-children">
							<a className="nav-link fw-medium" onClick={() => handleAccordion(6)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
							<ul className={`dropdown-menu ${isAccordion === 6 ? "show" : ""}`}>
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

			{isMobileMenu &&
				<div className="offCanvas__overly active" onClick={handleMobileMenu} />
			}


		</>
	)
}
