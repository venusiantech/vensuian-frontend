import Link from 'next/link'

export default function Footer3() {
	return (
		<>

			<footer className="footer-2 footer-style-home-3">
				<div className="top-footer">
					<div className="container">
						<div className="box-contact-phone">
							<div className="contact-phone">
								<div className="icon-contact">
									<svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.269 6.95462H18.0493V9.73646C18.0493 10.5015 18.6748 11.1274 19.4394 11.1274C20.204 11.1274 20.8295 10.5015 20.8295 9.73646V6.95462H23.6098C24.3744 6.95462 25 6.3287 25 5.56369C25 4.79869 24.3744 4.17277 23.6098 4.17277H20.8295V1.39092C20.8295 0.625915 20.204 0 19.4394 0C18.6748 0 18.0493 0.625915 18.0493 1.39092V4.17277H15.269C14.5044 4.17277 13.8788 4.79869 13.8788 5.56369C13.8788 6.3287 14.5044 6.95462 15.269 6.95462ZM22.5116 17.0666L18.9807 16.6633C18.5655 16.6145 18.1446 16.6605 17.7498 16.7978C17.3549 16.9351 16.9963 17.1602 16.7008 17.4561L14.1429 20.0154C10.1966 18.0072 6.98891 14.7978 4.98184 10.8492L7.55362 8.27599C8.15138 7.6779 8.44332 6.82943 8.34601 5.99488L7.94286 2.48975C7.86779 1.81097 7.54579 1.18354 7.0382 0.726965C6.53061 0.270395 5.87291 0.0165948 5.19037 0.0139092H2.78541C1.21454 0.0139092 -0.0922038 1.32138 0.00510669 2.89312C0.741886 14.7716 10.2366 24.2577 22.0946 24.9949C23.6655 25.0923 24.9722 23.7848 24.9722 22.213V19.8067C24.9861 18.4158 23.9157 17.2196 22.5116 17.0666Z" fill="currentColor" />
									</svg>
								</div>
								<span className="sub-heading-sm dark-950">
									Call for help:<br />
									(+055) 6489 6448
								</span>
							</div>
							<div className="contact-email">
								<div className="icon-contact">
									<svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M24.5673 8.50093L13.0288 0.166744C12.8708 0.0578401 12.6873 0 12.5 0C12.3127 0 12.1292 0.0578401 11.9712 0.166744L0.432731 8.50093C0.298671 8.59516 0.188731 8.72452 0.113094 8.87704C0.0374577 9.02955 -0.00142782 9.20028 4.00685e-05 9.37341V22.9165C4.00685e-05 23.469 0.202649 23.999 0.563294 24.3897C0.92394 24.7805 1.41308 25 1.92311 25H23.0769C23.5869 25 24.0761 24.7805 24.4367 24.3897C24.7973 23.999 25 23.469 25 22.9165V9.37341C25.0014 9.20028 24.9625 9.02955 24.8869 8.87704C24.8113 8.72452 24.7013 8.59516 24.5673 8.50093ZM12.5 2.28936L22.3437 9.39945L14.2909 15.624H10.7091L2.65628 9.39945L12.5 2.28936ZM1.92311 22.9165V11.3918L9.84376 17.5123C10.0047 17.6384 10.198 17.7067 10.3966 17.7076H14.6034C14.802 17.7067 14.9953 17.6384 15.1562 17.5123L23.0769 11.3918V22.9165H1.92311Z" fill="currentColor" />
									</svg>
								</div>
								<span className="sub-heading-sm dark-950">
									Mail To Us<br />
									Envato@gmail.com
								</span>
							</div>
							<div className="contact-location">
								<div className="icon-contact">
									<svg width={25} height={29} viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M19.7368 10.4984C20.1096 10.4984 20.4219 10.3728 20.6737 10.1217C20.9263 9.86977 21.0526 9.55788 21.0526 9.18606V6.56147H23.6842C24.057 6.56147 24.3693 6.43549 24.6211 6.18353C24.8737 5.93245 25 5.621 25 5.24918C25 4.87736 24.8737 4.56547 24.6211 4.31351C24.3693 4.06243 24.057 3.93688 23.6842 3.93688H21.0526V1.31229C21.0526 0.940478 20.9263 0.628589 20.6737 0.376629C20.4219 0.125543 20.1096 0 19.7368 0C19.364 0 19.0518 0.125543 18.8 0.376629C18.5474 0.628589 18.4211 0.940478 18.4211 1.31229V3.93688H15.7895C15.4167 3.93688 15.1044 4.06243 14.8526 4.31351C14.6 4.56547 14.4737 4.87736 14.4737 5.24918C14.4737 5.621 14.6 5.93245 14.8526 6.18353C15.1044 6.43549 15.4167 6.56147 15.7895 6.56147H18.4211V9.18606C18.4211 9.55788 18.5474 9.86977 18.8 10.1217C19.0518 10.3728 19.364 10.4984 19.7368 10.4984ZM10.5263 15.7475C11.25 15.7475 11.8697 15.4903 12.3855 14.9759C12.9004 14.4624 13.1579 13.8447 13.1579 13.1229C13.1579 12.4012 12.9004 11.7831 12.3855 11.2687C11.8697 10.7551 11.25 10.4984 10.5263 10.4984C9.80263 10.4984 9.18333 10.7551 8.66842 11.2687C8.15263 11.7831 7.89474 12.4012 7.89474 13.1229C7.89474 13.8447 8.15263 14.4624 8.66842 14.9759C9.18333 15.4903 9.80263 15.7475 10.5263 15.7475ZM10.5263 28.3784C10.3509 28.3784 10.1754 28.3456 10 28.28C9.82456 28.2143 9.67105 28.1269 9.53947 28.0175C6.33772 25.1961 3.94737 22.5772 2.36842 20.1608C0.789474 17.7435 0 15.4851 0 13.3854C0 10.1047 1.05833 7.49102 3.175 5.54445C5.29079 3.59788 7.74123 2.62459 10.5263 2.62459C10.7456 2.62459 10.9649 2.62984 11.1842 2.64034C11.4035 2.65171 11.6228 2.66833 11.8421 2.6902V5.3476C11.6228 5.30386 11.4088 5.2763 11.2 5.26493C10.9921 5.25443 10.7675 5.24918 10.5263 5.24918C8.3114 5.24918 6.44167 6.009 4.91711 7.52864C3.39342 9.04915 2.63158 11.0014 2.63158 13.3854C2.63158 14.9383 3.27851 16.7151 4.57237 18.716C5.86623 20.7176 7.85088 22.9433 10.5263 25.3929C13.2018 22.9433 15.1864 20.7176 16.4803 18.716C17.7741 16.7151 18.4211 14.9383 18.4211 13.3854V13.1229H21.0526V13.3854C21.0526 15.4851 20.2632 17.7435 18.6842 20.1608C17.1053 22.5772 14.7149 25.1961 11.5132 28.0175C11.3816 28.1269 11.2281 28.2143 11.0526 28.28C10.8772 28.3456 10.7018 28.3784 10.5263 28.3784Z" fill="currentColor" />
									</svg>
								</div>
								<span className="sub-heading-sm dark-950">
									Address<br />
									380 Albert St, New York, USA
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo.svg" alt="" /></Link>
								<p className="paragraph-base color-white pt-4 pb-2">we denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms</p>
								<div className="box-social-profile pt-2">
									<div className="list-socials">
										<Link href="#" className="share fb" />
										<Link href="#" className="share tw" />
										<Link href="#" className="share instagram" />
										<Link href="#" className="share printest" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 className="text-footer pb-1">Menu</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">Company</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Careers</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Press media</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Our Blog</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Privacy Policy</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 className="text-footer pb-1">Useful Link</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">How it’s Work</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Partners</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Testimonials</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Case Studies</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Pricing</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 className="text-footer pb-1">Subscribe Newsletter</h3>
								<div className="pt-4">
									<p className="paragraph-base color-white">I’m okey with getting emails and having that tracked to improve my experience</p>
								</div>
								<div className="pt-3">
									<div className="form-newsletter">
										<form action="#">
											<input type="text" className="form-control" placeholder="Email Address" />
											<input type="submit" className="btn btn-newsletter" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid footer-1 px-0">
					<div className="footer">
						<div className="container py-4">
							<div className="footer-bottom">
								<div className="row paragraph-base">
									<div className="col">
										<div className="small color-white">Copyright © Vatech {new Date().getFullYear()} . Alright Reserved.</div>
									</div>
									<div className="col d-flex justify-content-end">
										<p className="color-white">Designed By <Link className="text-white" href="https://alithemes.com" target="_blank">Alithemes</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
