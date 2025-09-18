import Link from 'next/link'

export default function Footer13() {
	return (
		<>

			<footer className="footer-style-10 footer-style-green footer-blue">
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="top-footer">
							<div className="top-footer-left">
								<h4 className="heading-ag-3xl color-white">Have an idea lets <br />work together ?</h4>
							</div>
							<div className="top-footer-right">
								<div className="form-newsletter">
									<form action="#">
										<input type="text" className="form-control" placeholder="Email Address" />
										<input type="submit" className="btn btn-newsletter" />
									</form>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4">
								<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo-footer-5.svg" alt="" /></Link>
								<p className="paragraph-base color-white pt-4 pb-2">we denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms</p>
								<div className="box-social-profile pt-2">
									<div className="list-socials">
										<Link href="#" className="share">
											<svg width={9} height={15} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M7.62891 8.14062H5.57812V14.2656H2.84375V8.14062H0.601562V5.625H2.84375V3.68359C2.84375 1.49609 4.15625 0.265625 6.15234 0.265625C7.10938 0.265625 8.12109 0.457031 8.12109 0.457031V2.61719H7C5.90625 2.61719 5.57812 3.27344 5.57812 3.98438V5.625H8.01172L7.62891 8.14062Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.0596 6.86085L15.8879 0.0859375H14.5068L9.44607 5.96849L5.40411 0.0859375H0.742188L6.85442 8.98141L0.742188 16.0859H2.12338L7.4676 9.87376L11.7362 16.0859H16.3981L10.0593 6.86085H10.0596ZM8.16787 9.05978L7.54857 8.17399L2.62104 1.12568H4.74248L8.71905 6.81389L9.33834 7.69968L14.5074 15.0935H12.386L8.16787 9.06012V9.05978Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.375 0.140625C11.8398 0.140625 12.25 0.550781 12.25 1.04297V11.5156C12.25 12.0078 11.8398 12.3906 11.375 12.3906H0.847656C0.382812 12.3906 0 12.0078 0 11.5156V1.04297C0 0.550781 0.382812 0.140625 0.847656 0.140625H11.375ZM3.69141 10.6406V4.81641H1.88672V10.6406H3.69141ZM2.78906 3.99609C3.36328 3.99609 3.82812 3.53125 3.82812 2.95703C3.82812 2.38281 3.36328 1.89062 2.78906 1.89062C2.1875 1.89062 1.72266 2.38281 1.72266 2.95703C1.72266 3.53125 2.1875 3.99609 2.78906 3.99609ZM10.5 10.6406V7.44141C10.5 5.88281 10.1445 4.65234 8.3125 4.65234C7.4375 4.65234 6.83594 5.14453 6.58984 5.60938H6.5625V4.81641H4.83984V10.6406H6.64453V7.76953C6.64453 7.00391 6.78125 6.26562 7.73828 6.26562C8.66797 6.26562 8.66797 7.14062 8.66797 7.79688V10.6406H10.5Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.57812 0.457031C8.14844 0.457031 10.5 2.23438 10.5 4.94141C10.5 7.48438 9.1875 10.3281 6.28906 10.3281C5.57812 10.3281 4.73047 9.97266 4.375 9.34375C3.77344 11.8047 3.80078 12.1875 2.43359 14.0742C2.29688 14.1289 2.32422 14.1289 2.24219 14.0195C2.1875 13.5 2.13281 13.0078 2.13281 12.4883C2.13281 10.8203 2.89844 8.38672 3.28125 6.77344C3.0625 6.33594 3.00781 5.84375 3.00781 5.37891C3.00781 3.19141 5.57812 2.86328 5.57812 4.66797C5.57812 5.73438 4.83984 6.74609 4.83984 7.78516C4.83984 8.46875 5.44141 8.96094 6.125 8.96094C8.01172 8.96094 8.58594 6.25391 8.58594 4.80469C8.58594 2.86328 7.21875 1.79688 5.33203 1.79688C3.17188 1.79688 1.50391 3.35547 1.50391 5.54297C1.50391 6.60938 2.16016 7.15625 2.16016 7.40234C2.16016 7.62109 1.99609 8.35938 1.72266 8.35938C1.06641 8.35938 0 7.26562 0 5.35156C0 2.31641 2.76172 0.457031 5.57812 0.457031Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 mb-4">
								<h3 className="text-footer pb-1 mb-4">Services</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-1" href="#"> About Us </Link>
									<Link className="hover-effect paragraph-base grey-100 pt-3" href="#"> Our Team </Link>
									<Link className="hover-effect paragraph-base grey-100 pt-3" href="#"> Recent News </Link>
									<Link className="hover-effect paragraph-base grey-100 pt-3" href="#"> Projects </Link>
									<Link className="hover-effect paragraph-base grey-100 pt-3" href="#"> Our All Services </Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<h3 className="text-footer pb-1 mb-4">Contact</h3>
								<div className="pt-0">
									<p className="text-inline">
										<Link href="/mailto:dolores.chambers@example.com">
											<svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.6875 1.5C13.3984 1.5 14 2.10156 14 2.8125C14 3.25 13.7812 3.63281 13.4531 3.87891L7.51953 8.33594C7.19141 8.58203 6.78125 8.58203 6.45312 8.33594L0.519531 3.87891C0.191406 3.63281 0 3.25 0 2.8125C0 2.10156 0.574219 1.5 1.3125 1.5H12.6875ZM5.93359 9.04688C6.5625 9.51172 7.41016 9.51172 8.03906 9.04688L14 4.5625V10.25C14 11.2344 13.207 12 12.25 12H1.75C0.765625 12 0 11.2344 0 10.25V4.5625L5.93359 9.04688Z" fill="currentColor" />
											</svg>
											<span className="color-white-70">dolores.chambers@example.com</span>
										</Link>
									</p>
									<p className="text-inline">
										<svg className="me-2" width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.59375 14.4219C3.17188 12.6445 0 8.40625 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.40625 7.30078 12.6445 5.87891 14.4219C5.55078 14.832 4.92188 14.832 4.59375 14.4219ZM5.25 7.75C6.20703 7.75 7 6.98438 7 6C7 5.04297 6.20703 4.25 5.25 4.25C4.26562 4.25 3.5 5.04297 3.5 6C3.5 6.98438 4.26562 7.75 5.25 7.75Z" fill="currentColor" />
										</svg>
										<span className="color-white-70">1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
									</p>
									<p className="text-inline">
										<svg className="me-2" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.6199 10.759L11.6661 8.80522C10.9684 8.10746 9.78218 8.38659 9.50307 9.29366C9.29374 9.92167 8.59598 10.2706 7.96799 10.131C6.57246 9.78209 4.68849 7.9679 4.33961 6.5026C4.13028 5.87458 4.54894 5.17682 5.17693 4.96751C6.08402 4.68841 6.36313 3.50221 5.66536 2.80444L3.71162 0.850702C3.15341 0.362266 2.31609 0.362266 1.82766 0.850702L0.501902 2.17646C-0.823851 3.57198 0.641455 7.27014 3.92095 10.5496C7.20045 13.8291 10.8986 15.3642 12.2941 13.9687L13.6199 12.6429C14.1083 12.0847 14.1083 11.2474 13.6199 10.759Z" fill="currentColor" />
										</svg>
										<span className="color-white-70">+123 888 9999</span>
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<h3 className="text-footer pb-1 mb-4">Recent News</h3>
								<div className="d-flex flex-column align-items-start">
									<ul className="recent-news-list">
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home13/news2.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="currentColor" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="paragraph-rubik-r news-link">Market research helps businesses understand</Link>
											</div>
										</li>
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home13/news3.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="currentColor" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="paragraph-rubik-r news-link">Common types of business structure</Link>
											</div>
										</li>
									</ul>
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
									<div className="col-sm-6 col-12 text-center text-md-start">
										<div className="paragraph-rubik-r color-white-70">Copyright © Vatech {new Date().getFullYear()} . Alright Reserved.</div>
									</div>
									<div className="col-sm-6 col-12 d-flex justify-content-center justify-content-md-end">
										<ul className="menu-footer">
											<li><Link href="#">Trams &amp; Condition</Link></li>
											<li><Link href="#">Privacy Policy</Link></li>
											<li><Link href="#">Contact Us</Link></li>
										</ul>
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
