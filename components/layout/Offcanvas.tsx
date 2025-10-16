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

			<div className={`offCanvas__info ${isMobileMenu ? "active" : ""}`} style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
				<div className="offCanvas__close-icon menu-close" onClick={handleMobileMenu}>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
							<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
						</svg>
					</button>
				</div>
				<div className=" mb-20 text-center" style={{borderBottom: 'none'}}>
					<Link href="/" style={{textDecoration: 'none', borderBottom: 'none'}}><img src="/assets/imgs/template/venusian_whole.png" alt="Venusian Logo" height={50} /></Link>
				</div>
				<div className="offCanvas__side-info mb-auto">
					<ul className="navbar-nav navbar-nav-mobile text-center">
						<li className="nav-item">
							<Link className="nav-link fw-medium" href="/" onClick={handleMobileMenu} style={{fontSize: '24px', padding: '15px 0'}}>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-medium" href="/about-us-4" onClick={handleMobileMenu} style={{fontSize: '24px', padding: '15px 0'}}>About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-medium" href="/services-4" onClick={handleMobileMenu} style={{fontSize: '24px', padding: '15px 0'}}>Services</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-medium" href="/contact" onClick={handleMobileMenu} style={{fontSize: '24px', padding: '15px 0'}}>Contact</Link>
						</li>
					</ul>
				</div>
				<div className="box-contactus mt-auto" style={{fontSize: '12px', padding: '15px 0'}}>
					<h6 className="title-contactus neutral-1000 mb-2" style={{fontSize: '14px', fontWeight: '600'}}>Contact Us</h6>
					<div className="contact-info">
						<p className="text-sm neutral-1000 mb-1" style={{fontSize: '11px', lineHeight: '1.4'}}><strong>Address: </strong>Sharjah, UAE</p>
						<p className="text-sm neutral-1000 mb-1" style={{fontSize: '11px', lineHeight: '1.4'}}><strong>Hours: </strong> 8:00 - 17:00, Mon - Sat</p>
						<p className="text-sm neutral-1000 mb-1" style={{fontSize: '11px', lineHeight: '1.4'}}><strong>Phone: </strong> 01 256 986 3</p>
						<p className="text-sm neutral-1000 mb-0" style={{fontSize: '11px', lineHeight: '1.4'}}><strong>Email: </strong>info@venusian.tech</p>
					</div>
				</div>
			</div>

			{isMobileMenu &&
				<div className="offCanvas__overly active" onClick={handleMobileMenu} />
			}


		</>
	)
}
