import Link from 'next/link'

export default function Footer11() {
	return (
		<>

			<footer className="footer-2 footer-style-8 @@class">
				<div className="top-footer">
					<div className="container">
						<div className="box-newsletter-footer">
							<div className="newsletter-left">
								<div className="mb-3">
									<Link href="#"><img src="/assets/imgs/template/logo-footer-3.svg" /></Link>
								</div>
								<span className="sub-heading-sm color-white"> Digital Business Consulting Agency </span>
							</div>
							<div className="newsletter-right">
								<h6 className="sub-heading-ag-xl-m color-white">Subscribe Our Newsletter</h6>
								<div className="form-newsletter">
									<form action="#">
										<input type="text" className="form-control" placeholder="Email Address" />
										<input type="submit" className="btn btn-newsletter" defaultValue="Subscribe Now" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 mb-4">
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
							<div className="col-lg-9 mb-4">
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
											<p className="text-inline">
												<svg className="me-3" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.10541 5.82937L6.7155 3.23026C7.03411 2.9127 7.46054 2.73438 7.91149 2.73438C8.36244 2.73438 8.78888 2.91025 9.10748 3.23026L11.9185 6.02723C12.2371 6.3448 12.4161 6.77228 12.4161 7.22175C12.4161 7.67366 12.2396 8.09626 11.9185 8.41627L9.72263 10.6074C10.2229 11.7692 10.9416 12.8247 11.8401 13.7171C12.7396 14.6185 13.791 15.3293 14.9575 15.8325L17.1534 13.6414C17.472 13.3238 17.8985 13.1455 18.3494 13.1455C18.5719 13.1447 18.7922 13.1881 18.9976 13.2732C19.2029 13.3584 19.3892 13.4835 19.5454 13.6414L22.3589 16.4383C22.6775 16.7559 22.8564 17.1834 22.8564 17.6329C22.8564 18.0848 22.68 18.5074 22.3589 18.8274L19.7513 21.4265C19.2072 21.9688 18.4573 22.279 17.6877 22.279C17.5284 22.279 17.374 22.2668 17.2172 22.2399C13.9723 21.7074 10.752 19.9852 8.15167 17.3959C5.55383 14.8017 3.82846 11.5919 3.28929 8.3552C3.13489 7.43672 3.44369 6.49136 4.10541 5.82937V5.82937ZM5.0269 8.06451C5.50481 10.9445 7.05861 13.8172 9.39912 16.1501C11.7396 18.4829 14.6193 20.0317 17.5088 20.508C17.8715 20.5691 18.244 20.4469 18.5087 20.1856L21.0698 17.6329L18.3543 14.9238L15.4183 17.8551L15.3962 17.8771L14.8669 17.6817C13.2618 17.0935 11.8042 16.1645 10.5951 14.9589C9.38609 13.7534 8.4545 12.3003 7.86493 10.7003L7.66886 10.1726L10.6294 7.22419L7.91394 4.51516L5.35286 7.06786C5.08817 7.33168 4.96563 7.70298 5.0269 8.06451Z" fill="white" />
												</svg>
												<span className="color-white-70 paragraph-rubik-r">997-889-0987</span>
											</p>
											<p className="text-inline">
												<Link href="/mailto:support@realco.com">
													<svg className="me-2" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M23.251 3.91016H2.86043C2.42664 3.91016 2.07617 4.25947 2.07617 4.69184V20.3256C2.07617 20.758 2.42664 21.1073 2.86043 21.1073H23.251C23.6848 21.1073 24.0353 20.758 24.0353 20.3256V4.69184C24.0353 4.25947 23.6848 3.91016 23.251 3.91016ZM22.2707 6.61675V19.3485H3.84075V6.61675L3.16433 6.09155L4.12749 4.85795L5.17643 5.6714H20.9375L21.9864 4.85795L22.9496 6.09155L22.2707 6.61675V6.61675ZM20.9375 5.66895L13.0557 11.7759L5.17398 5.66895L4.12504 4.85551L3.16187 6.08911L3.83829 6.61431L12.2102 13.1023C12.451 13.2887 12.7472 13.39 13.0521 13.39C13.3569 13.39 13.6531 13.2887 13.8939 13.1023L22.2707 6.61675L22.9472 6.09155L21.984 4.85795L20.9375 5.66895Z" fill="white" />
													</svg>
													<span className="color-white-70 paragraph-rubik-r">support@realco.com</span>
												</Link>
											</p>
											<p className="text-inline">
												<svg className="me-3" width={19} height={23} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.9441 6.06212C17.4827 5.00166 16.8174 4.04151 15.9859 3.23583C15.1516 2.42287 14.1681 1.77764 13.089 1.33535C11.9666 0.871225 10.7755 0.636719 9.54763 0.636719C8.31978 0.636719 7.12869 0.871225 6.00623 1.33291C4.92052 1.77994 3.94756 2.41994 3.10938 3.23339C2.27838 4.03952 1.61321 4.99956 1.1512 6.05968C0.673293 7.15893 0.430664 8.32657 0.430664 9.52842C0.430664 11.253 0.844849 12.9703 1.65851 14.6265C2.31288 15.9578 3.22702 17.2549 4.3789 18.4885C6.34689 20.5942 8.41046 21.8815 8.9962 22.226C9.16246 22.3238 9.35208 22.3753 9.54518 22.375C9.73634 22.375 9.92505 22.3261 10.0942 22.226C10.6799 21.8815 12.7435 20.5942 14.7115 18.4885C15.8633 17.2574 16.7775 15.9578 17.4318 14.6265C18.2504 12.9727 18.6646 11.2579 18.6646 9.53086C18.6646 8.32901 18.422 7.16137 17.9441 6.06212ZM9.54763 20.5014C7.93255 19.4778 2.19524 15.4253 2.19524 9.53086C2.19524 7.62794 2.95744 5.83983 4.34214 4.49142C5.73174 3.14056 7.57964 2.39552 9.54763 2.39552C11.5156 2.39552 13.3635 3.14056 14.7531 4.49386C16.1378 5.83983 16.9 7.62794 16.9 9.53086C16.9 15.4253 11.1627 19.4778 9.54763 20.5014ZM9.54763 5.42456C7.16545 5.42456 5.23423 7.34946 5.23423 9.72384C5.23423 12.0982 7.16545 14.0231 9.54763 14.0231C11.9298 14.0231 13.861 12.0982 13.861 9.72384C13.861 7.34946 11.9298 5.42456 9.54763 5.42456ZM11.4887 11.6585C11.2341 11.913 10.9315 12.1148 10.5984 12.2523C10.2653 12.3898 9.90818 12.4603 9.54763 12.4597C8.81484 12.4597 8.12616 12.1739 7.6066 11.6585C7.35128 11.4048 7.14882 11.1032 7.01086 10.7712C6.87291 10.4391 6.80217 10.0832 6.80273 9.72384C6.80273 8.99345 7.08948 8.30703 7.6066 7.78916C8.12616 7.27129 8.81484 6.98793 9.54763 6.98793C10.2804 6.98793 10.9691 7.27129 11.4887 7.78916C12.0082 8.30703 12.2925 8.99345 12.2925 9.72384C12.2925 10.4542 12.0082 11.1406 11.4887 11.6585Z" fill="white" />
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
