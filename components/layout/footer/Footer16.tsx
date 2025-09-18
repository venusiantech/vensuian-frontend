import Link from 'next/link'

export default function Footer16() {
	return (
		<>

			<footer className="footer-style-9 footer-style-15">
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<h3 className="heading-24-fitree color-white mb-20">About Us</h3>
								<p className="paragraph-base color-white mb-40">I’m okey with getting emails and having that tracked to improve my experience</p>
								<h4 className="display-ag-6xl color-white">Vatech</h4>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Menu</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">Company</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Careers</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Press media</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Our Blog</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Privacy Policy</Link>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Useful Link</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">How it’s Work</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Partners</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Testimonials</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Case Studies</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">Pricing</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
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
								<div className="box-social-profile pt-4">
									<p className="paragraph-ag-semibold text-uppercase color-white">Social Profile</p>
									<div className="list-socials">
										<Link href="#" className="share">
											<svg width={9} height={18} viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.66426 18H5.83755V9.7875H8.49097L8.8917 6.5925H5.83755V4.545C5.83755 3.6225 6.08664 2.9925 7.36462 2.9925H9V0.12375C8.71841 0.0899999 7.75451 0 6.62816 0C4.26715 0 2.66426 1.49625 2.66426 4.23V6.5925H0V9.7875H2.66426V18Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M19 1.80753C18.2842 2.14226 17.5685 2.3431 16.7226 2.47699C17.5034 1.94142 18.1541 1.20502 18.4795 0.267782C17.6986 0.736401 16.8527 1.07113 16.0068 1.27197C15.2911 0.468619 14.25 0 13.1438 0C10.9966 0 9.17466 1.80753 9.17466 4.08368C9.17466 4.41841 9.23973 4.68619 9.30479 5.02092C6.05137 4.88703 3.12329 3.21339 1.17123 0.803347C0.84589 1.27197 0.650685 1.94142 0.650685 2.67782C0.650685 4.08368 1.36644 5.35565 2.40753 6.0251C1.75685 6.0251 1.17123 5.82427 0.650685 5.48954V5.55648C0.650685 7.49791 2.01712 9.17155 3.83904 9.50628C3.5137 9.57322 3.18836 9.64017 2.79795 9.64017C2.53767 9.64017 2.2774 9.64017 2.08219 9.57322C2.60274 11.1799 4.03425 12.3849 5.7911 12.3849C4.42466 13.4561 2.73288 14.1255 0.910959 14.1255C0.585616 14.1255 0.260274 14.1255 0 14.0586C1.56164 15.3305 3.64384 16 5.85616 16C13.0788 16 17.0479 9.841 17.0479 4.48535V3.94979C17.8288 3.34728 18.4795 2.67782 19 1.80753Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.4972 15.8875C7.51584 15.8875 5.10976 13.4814 5.10976 10.5C5.10976 7.51861 7.51584 5.11249 10.4972 5.11249C13.4785 5.11249 15.8846 7.51861 15.8846 10.5C15.8846 13.4814 13.4785 15.8875 10.4972 15.8875ZM10.4972 6.99851C8.56916 6.99851 6.99575 8.57195 6.99575 10.5C6.99575 12.4281 8.56916 14.0015 10.4972 14.0015C12.4252 14.0015 13.9986 12.4281 13.9986 10.5C13.9986 8.57195 12.4252 6.99851 10.4972 6.99851ZM16.1052 17.3638C15.4092 17.3638 14.847 16.8016 14.847 16.1055C14.847 15.4094 15.4092 14.8473 16.1052 14.8473C16.8013 14.8473 17.3634 15.4068 17.3634 16.1055C17.3636 16.2708 17.3312 16.4345 17.2681 16.5873C17.2049 16.74 17.1123 16.8788 16.9954 16.9957C16.8785 17.1126 16.7397 17.2053 16.587 17.2684C16.4342 17.3316 16.2705 17.364 16.1052 17.3638ZM20.9988 10.5C20.9988 11.95 21.012 13.3868 20.9305 14.8342C20.8491 16.5153 20.4656 18.0073 19.2363 19.2367C18.0044 20.4686 16.515 20.8495 14.8339 20.9309C13.3839 21.0124 11.9471 20.9992 10.4998 20.9992C9.04985 20.9992 7.61303 21.0124 6.16571 20.9309C4.4846 20.8495 2.99262 20.466 1.76331 19.2367C0.53138 18.0047 0.150505 16.5153 0.0690761 14.8342C-0.0123524 13.3842 0.000781304 11.9474 0.000781304 10.5C0.000781304 9.05265 -0.0123524 7.61318 0.0690761 6.16582C0.150505 4.48469 0.534007 2.99268 1.76331 1.76335C2.99525 0.531391 4.4846 0.150508 6.16571 0.0690783C7.61566 -0.0123517 9.05248 0.000781169 10.4998 0.000781169C11.9498 0.000781169 13.3866 -0.0123517 14.8339 0.0690783C16.515 0.150508 18.007 0.534018 19.2363 1.76335C20.4682 2.99531 20.8491 4.48469 20.9305 6.16582C21.0146 7.61318 20.9988 9.05002 20.9988 10.5ZM18.6873 4.30607C18.4956 3.82799 18.2644 3.47075 17.894 3.103C17.5237 2.73263 17.1691 2.50147 16.691 2.30972C15.3093 1.76072 12.0286 1.88418 10.4972 1.88418C8.9658 1.88418 5.68239 1.76072 4.30073 2.30709C3.82267 2.49884 3.46543 2.73 3.09769 3.10038C2.72732 3.47075 2.49617 3.82537 2.30442 4.30344C1.75806 5.68775 1.88152 8.96859 1.88152 10.5C1.88152 12.0314 1.75806 15.3149 2.30442 16.6966C2.49617 17.1746 2.72732 17.5319 3.09769 17.8996C3.46806 18.2674 3.82267 18.5012 4.30073 18.6929C5.68239 19.2393 8.9658 19.1158 10.4972 19.1158C12.0286 19.1158 15.312 19.2393 16.6936 18.6929C17.1717 18.5012 17.5289 18.27 17.8967 17.8996C18.267 17.5293 18.4982 17.1746 18.6899 16.6966C19.2363 15.3149 19.1128 12.0314 19.1128 10.5C19.1128 8.96859 19.2363 5.68775 18.6873 4.30607Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.24615 0C2.83077 0 0 3.5 0 7.375C0 9.25 0.984615 11.125 2.58462 12.125C3.07692 12.375 2.95385 12.125 3.32308 10.625C3.32308 10.5 3.32308 10.375 3.2 10.25C0.984615 7.5 2.83077 2.125 8 2.125C15.5077 2.125 14.0308 12.625 9.35385 12.625C8.36923 12.75 7.50769 12 7.50769 11V10.5C8 9.125 8.36923 7.875 8.49231 6.5C8.49231 3.875 4.67692 4.25 4.67692 7.75C4.67692 8.375 4.8 9 5.04615 9.5C5.04615 9.5 3.81538 14.625 3.56923 15.5C3.32308 17 3.44615 18.5 3.69231 19.875C3.56923 20 3.69231 20 3.69231 20H3.81538C4.67692 18.75 5.41539 17.5 5.90769 16.125C6.03077 15.5 6.64615 13.25 6.64615 13.25C7.26154 14.125 8.36923 14.625 9.47692 14.625C13.2923 14.625 16 11.25 16 7.125C16 3 12.5538 0 8.24615 0Z" fill="currentColor" />
											</svg>
										</Link>
										<Link href="#" className="share">
											<svg width={19} height={14} viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M18.6035 2.18694C18.4953 1.76346 18.2832 1.37727 17.9885 1.06702C17.6938 0.756774 17.3267 0.533349 16.924 0.419108C15.4417 8.5041e-08 9.5 0 9.5 0C9.5 0 3.55826 -8.5041e-08 2.076 0.416879C1.67315 0.530749 1.30588 0.75405 1.01108 1.06436C0.716289 1.37466 0.504347 1.76105 0.39654 2.18471C-8.0892e-08 3.74522 0 7 0 7C0 7 -8.0892e-08 10.2548 0.39654 11.8131C0.614955 12.6736 1.2596 13.3513 2.076 13.5809C3.55826 14 9.5 14 9.5 14C9.5 14 15.4417 14 16.924 13.5809C17.7425 13.3513 18.385 12.6736 18.6035 11.8131C19 10.2548 19 7 19 7C19 7 19 3.74522 18.6035 2.18694ZM7.61272 9.98726V4.01274L12.5324 6.97771L7.61272 9.98726Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid footer-1 px-0">
					<div className="footer">
						<div className="container pt-0 py-4">
							<div className="footer-bottom">
								<div className="row paragraph-base">
									<div className="col">
										<div className="paragraph-rubik-m dark-950">Copyright © Vatech {new Date().getFullYear()} . Alright Reserved.</div>
									</div>
									<div className="col d-flex justify-content-end">
										<Link href="#" className="paragraph-rubik-m  dark-950">Terms &amp; Conditions / Privacy &amp; Policy</Link>
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
