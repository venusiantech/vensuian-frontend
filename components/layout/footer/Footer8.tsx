import Link from 'next/link'

export default function Footer8() {
	return (
		<>

			<footer className="footer-2 footer-style-7">
				<div className="top-footer">
					<div className="container">
						<div className="top-footer-logo">
							<div className="left-footer">
								<h3 className="sub-heading-ag-xl color-white">Hire One Of The Best Consult Advisior</h3>
							</div>
							<div className="middle-footer">
								<Link href="/"><img src="/assets/imgs/template/logo-footer-2.svg" alt="Vatech" /></Link>
							</div>
							<div className="right-footer">
								<h3 className="sub-heading-ag-xl color-white">Emergency Call</h3>
								<h3 className="sub-heading-ag-xl color-white-60">990 988 9090</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<h3 className="text-footer pb-1">About Us</h3>
								<p className="paragraph-base color-white pt-4 pb-2">we denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms</p>
								<div className="box-social-profile pt-2">
									<div className="list-socials">
										<Link href="#" className="share fb">
											<svg width={9} height={18} viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.66426 18H5.83755V9.7875H8.49097L8.8917 6.5925H5.83755V4.545C5.83755 3.6225 6.08664 2.9925 7.36462 2.9925H9V0.12375C8.71841 0.0899999 7.75451 0 6.62816 0C4.26715 0 2.66426 1.49625 2.66426 4.23V6.5925H0V9.7875H2.66426V18Z" fill="white" />
											</svg>
										</Link>
										<Link href="#" className="share tw">
											<svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.73508 6.35148L14.1991 0H12.9043L8.1599 5.5149L4.37056 0H0L5.73023 8.3395L0 15H1.29487L6.30508 9.17608L10.3069 15H14.6775L8.73477 6.35148H8.73508ZM6.96158 8.41297L6.38099 7.58255L1.76143 0.974755H3.75027L7.47831 6.30746L8.05891 7.13788L12.9049 14.0696H10.9161L6.96158 8.41329V8.41297Z" fill="white" />
											</svg>
										</Link>
										<Link href="#" className="share instagram">
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.4972 15.8875C7.51584 15.8875 5.10976 13.4814 5.10976 10.5C5.10976 7.51861 7.51584 5.11249 10.4972 5.11249C13.4785 5.11249 15.8846 7.51861 15.8846 10.5C15.8846 13.4814 13.4785 15.8875 10.4972 15.8875ZM10.4972 6.99851C8.56916 6.99851 6.99575 8.57195 6.99575 10.5C6.99575 12.4281 8.56916 14.0015 10.4972 14.0015C12.4252 14.0015 13.9986 12.4281 13.9986 10.5C13.9986 8.57195 12.4252 6.99851 10.4972 6.99851ZM16.1052 17.3638C15.4092 17.3638 14.847 16.8016 14.847 16.1055C14.847 15.4094 15.4092 14.8473 16.1052 14.8473C16.8013 14.8473 17.3634 15.4068 17.3634 16.1055C17.3636 16.2708 17.3312 16.4345 17.2681 16.5873C17.2049 16.74 17.1123 16.8788 16.9954 16.9957C16.8785 17.1126 16.7397 17.2053 16.587 17.2684C16.4342 17.3316 16.2705 17.364 16.1052 17.3638ZM20.9988 10.5C20.9988 11.95 21.012 13.3868 20.9305 14.8342C20.8491 16.5153 20.4656 18.0073 19.2363 19.2367C18.0044 20.4686 16.515 20.8495 14.8339 20.9309C13.3839 21.0124 11.9471 20.9992 10.4998 20.9992C9.04985 20.9992 7.61303 21.0124 6.16571 20.9309C4.4846 20.8495 2.99262 20.466 1.76331 19.2367C0.53138 18.0047 0.150505 16.5153 0.0690761 14.8342C-0.0123524 13.3842 0.000781304 11.9474 0.000781304 10.5C0.000781304 9.05265 -0.0123524 7.61318 0.0690761 6.16582C0.150505 4.48469 0.534007 2.99268 1.76331 1.76335C2.99525 0.531391 4.4846 0.150508 6.16571 0.0690783C7.61566 -0.0123517 9.05248 0.000781169 10.4998 0.000781169C11.9498 0.000781169 13.3866 -0.0123517 14.8339 0.0690783C16.515 0.150508 18.007 0.534018 19.2363 1.76335C20.4682 2.99531 20.8491 4.48469 20.9305 6.16582C21.0146 7.61318 20.9988 9.05002 20.9988 10.5ZM18.6873 4.30607C18.4956 3.82799 18.2644 3.47075 17.894 3.103C17.5237 2.73263 17.1691 2.50147 16.691 2.30972C15.3093 1.76072 12.0286 1.88418 10.4972 1.88418C8.9658 1.88418 5.68239 1.76072 4.30073 2.30709C3.82267 2.49884 3.46543 2.73 3.09769 3.10038C2.72732 3.47075 2.49617 3.82537 2.30442 4.30344C1.75806 5.68775 1.88152 8.96859 1.88152 10.5C1.88152 12.0314 1.75806 15.3149 2.30442 16.6966C2.49617 17.1746 2.72732 17.5319 3.09769 17.8996C3.46806 18.2674 3.82267 18.5012 4.30073 18.6929C5.68239 19.2393 8.9658 19.1158 10.4972 19.1158C12.0286 19.1158 15.312 19.2393 16.6936 18.6929C17.1717 18.5012 17.5289 18.27 17.8967 17.8996C18.267 17.5293 18.4982 17.1746 18.6899 16.6966C19.2363 15.3149 19.1128 12.0314 19.1128 10.5C19.1128 8.96859 19.2363 5.68775 18.6873 4.30607Z" fill="white" />
											</svg>
										</Link>
										<Link href="#" className="share printest">
											<svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.24615 0C2.83077 0 0 3.5 0 7.375C0 9.25 0.984615 11.125 2.58462 12.125C3.07692 12.375 2.95385 12.125 3.32308 10.625C3.32308 10.5 3.32308 10.375 3.2 10.25C0.984615 7.5 2.83077 2.125 8 2.125C15.5077 2.125 14.0308 12.625 9.35385 12.625C8.36923 12.75 7.50769 12 7.50769 11V10.5C8 9.125 8.36923 7.875 8.49231 6.5C8.49231 3.875 4.67692 4.25 4.67692 7.75C4.67692 8.375 4.8 9 5.04615 9.5C5.04615 9.5 3.81538 14.625 3.56923 15.5C3.32308 17 3.44615 18.5 3.69231 19.875C3.56923 20 3.69231 20 3.69231 20H3.81538C4.67692 18.75 5.41539 17.5 5.90769 16.125C6.03077 15.5 6.64615 13.25 6.64615 13.25C7.26154 14.125 8.36923 14.625 9.47692 14.625C13.2923 14.625 16 11.25 16 7.125C16 3 12.5538 0 8.24615 0Z" fill="white" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-9">
								<div className="row">
									<div className="col-lg-3 col-md-6">
										<h3 className="text-footer pb-1">Resources</h3>
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
											<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">Company</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Careers</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Press media</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Our Blog</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Privacy Policy</Link>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<h3 className="text-footer pb-1">Company</h3>
										<div className="d-flex flex-column align-items-start">
											<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">How it’s Work</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Partners</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Testimonials</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Case Studies</Link>
											<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Pricing</Link>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<h3 className="text-footer pb-1">Contact Us</h3>
										<div className="pt-4">
											<p className="text-inline" />
											<svg className="me-2" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M13.6199 10.759L11.6661 8.80522C10.9684 8.10746 9.78218 8.38659 9.50307 9.29366C9.29374 9.92167 8.59598 10.2706 7.96799 10.131C6.57246 9.78209 4.68849 7.9679 4.33961 6.5026C4.13028 5.87458 4.54894 5.17682 5.17693 4.96751C6.08402 4.68841 6.36313 3.50221 5.66536 2.80444L3.71162 0.850702C3.15341 0.362266 2.31609 0.362266 1.82766 0.850702L0.501902 2.17646C-0.823851 3.57198 0.641455 7.27014 3.92095 10.5496C7.20045 13.8291 10.8986 15.3642 12.2941 13.9687L13.6199 12.6429C14.1083 12.0847 14.1083 11.2474 13.6199 10.759Z" fill="#FFFFFF" />
											</svg>
											<span className="color-white-70 paragraph-rubik-r">997-889-0987</span>
											<p />
											<p className="text-inline">
												<Link href="/mailto:support@realco.com">
													<svg className="me-2" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12.6875 1.5C13.3984 1.5 14 2.10156 14 2.8125C14 3.25 13.7812 3.63281 13.4531 3.87891L7.51953 8.33594C7.19141 8.58203 6.78125 8.58203 6.45312 8.33594L0.519531 3.87891C0.191406 3.63281 0 3.25 0 2.8125C0 2.10156 0.574219 1.5 1.3125 1.5H12.6875ZM5.93359 9.04688C6.5625 9.51172 7.41016 9.51172 8.03906 9.04688L14 4.5625V10.25C14 11.2344 13.207 12 12.25 12H1.75C0.765625 12 0 11.2344 0 10.25V4.5625L5.93359 9.04688Z" fill="#FFFFFF" />
													</svg>
													<span className="color-white-70 paragraph-rubik-r">support@realco.com</span>
												</Link>
											</p>
											<p className="text-inline">
												<svg className="me-2" width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.59375 14.4219C3.17188 12.6445 0 8.40625 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.40625 7.30078 12.6445 5.87891 14.4219C5.55078 14.832 4.92188 14.832 4.59375 14.4219ZM5.25 7.75C6.20703 7.75 7 6.98438 7 6C7 5.04297 6.20703 4.25 5.25 4.25C4.26562 4.25 3.5 5.04297 3.5 6C3.5 6.98438 4.26562 7.75 5.25 7.75Z" fill="#FFFFFF" />
												</svg>
												<span className="color-white-70 paragraph-rubik-r">Alison Street,10090,Canada</span>
											</p>
										</div>
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
									<div className="col-sm-6 col-12 text-center text-md-start">
										<div className="small color-white">Copyright © Vatech {new Date().getFullYear()} . Alright Reserved.</div>
									</div>
									<div className="col-sm-6 col-12 d-flex justify-content-center justify-content-md-end">
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
