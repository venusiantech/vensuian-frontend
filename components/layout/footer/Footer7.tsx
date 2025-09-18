'use client'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Footer7() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<footer className="footer-2 footer-style-6">
				<div className="top-footer">
					<div className="container position-relative">
						<div className="box-footer-video">
							<a onClick={() => setOpen(true)} className="btn-play popup-video"><img src="/assets/imgs/pages/home7/play.svg" alt="Vatech" /></a>
						</div>
					</div>
				</div>
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<h4 className="heading-ag-3xl color-white">
									Let’s Connected<br />
									together!
								</h4>
								<div className="pt-4">
									<p className="text-inline">
										<Link href="/mailto:dolores.chambers@example.com">
											<svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.6875 1.5C13.3984 1.5 14 2.10156 14 2.8125C14 3.25 13.7812 3.63281 13.4531 3.87891L7.51953 8.33594C7.19141 8.58203 6.78125 8.58203 6.45312 8.33594L0.519531 3.87891C0.191406 3.63281 0 3.25 0 2.8125C0 2.10156 0.574219 1.5 1.3125 1.5H12.6875ZM5.93359 9.04688C6.5625 9.51172 7.41016 9.51172 8.03906 9.04688L14 4.5625V10.25C14 11.2344 13.207 12 12.25 12H1.75C0.765625 12 0 11.2344 0 10.25V4.5625L5.93359 9.04688Z" fill="#0075DC" />
											</svg>
											<span className="color-white-70">dolores.chambers@example.com</span>
										</Link>
									</p>
									<p className="text-inline">
										<svg className="me-2" width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.59375 14.4219C3.17188 12.6445 0 8.40625 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.40625 7.30078 12.6445 5.87891 14.4219C5.55078 14.832 4.92188 14.832 4.59375 14.4219ZM5.25 7.75C6.20703 7.75 7 6.98438 7 6C7 5.04297 6.20703 4.25 5.25 4.25C4.26562 4.25 3.5 5.04297 3.5 6C3.5 6.98438 4.26562 7.75 5.25 7.75Z" fill="#0075DC" />
										</svg>
										<span className="color-white-70">1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
									</p>
									<p className="text-inline">
										<svg className="me-2" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.6199 10.759L11.6661 8.80522C10.9684 8.10746 9.78218 8.38659 9.50307 9.29366C9.29374 9.92167 8.59598 10.2706 7.96799 10.131C6.57246 9.78209 4.68849 7.9679 4.33961 6.5026C4.13028 5.87458 4.54894 5.17682 5.17693 4.96751C6.08402 4.68841 6.36313 3.50221 5.66536 2.80444L3.71162 0.850702C3.15341 0.362266 2.31609 0.362266 1.82766 0.850702L0.501902 2.17646C-0.823851 3.57198 0.641455 7.27014 3.92095 10.5496C7.20045 13.8291 10.8986 15.3642 12.2941 13.9687L13.6199 12.6429C14.1083 12.0847 14.1083 11.2474 13.6199 10.759Z" fill="#0075DC" />
										</svg>
										<span className="color-white-70">+123 888 9999</span>
									</p>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Services</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Ui Design
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Ux Design
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Digital Marketing
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Video Editing
									</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<h3 className="text-footer pb-1">Recent News</h3>
								<div className="d-flex flex-column align-items-start">
									<ul className="recent-news-list">
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home7/news4.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="#1CBBB4" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="heading-md news-link">A comprehensive security solution</Link>
											</div>
										</li>
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home7/news5.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="#1CBBB4" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="heading-md news-link">A comprehensive security solution</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Company</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										About
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Team
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										FAQ
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Privacy Policy
									</Link>
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
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
