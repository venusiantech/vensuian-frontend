import Link from 'next/link'

export default function Footer1() {
	return (
		<>

			<footer>
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo.svg" alt="" /></Link>
								<p className="paragraph-base color-white pt-4 pb-2">we denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms</p>
								<p className="text-inline">
									<svg className="me-2" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_3089)">
											<path d="M16.6714 13.4105C16.2391 12.9806 15.7177 12.7508 15.1652 12.7508C14.617 12.7508 14.0912 12.9764 13.6411 13.4062L12.2329 14.747C12.1171 14.6874 12.0012 14.6321 11.8898 14.5767C11.7294 14.5001 11.5779 14.4278 11.4486 14.3511C10.1296 13.551 8.93086 12.5082 7.78114 11.1589C7.22411 10.4864 6.84978 9.92032 6.57795 9.34572C6.94336 9.0265 7.28204 8.6945 7.6118 8.37528C7.73658 8.2561 7.86135 8.13267 7.98613 8.01349C8.92194 7.11967 8.92194 5.96195 7.98613 5.06812L6.76957 3.90615C6.63143 3.7742 6.48883 3.638 6.35514 3.5018C6.08776 3.23791 5.80702 2.9655 5.51736 2.71012C5.0851 2.30152 4.56818 2.08445 4.02451 2.08445C3.48085 2.08445 2.95501 2.30152 2.50939 2.71012C2.50493 2.71438 2.50493 2.71438 2.50047 2.71864L0.985345 4.17855C0.414944 4.72336 0.089637 5.38735 0.0183368 6.15774C-0.0886134 7.40058 0.294625 8.5583 0.588738 9.31593C1.31065 11.1759 2.38907 12.8997 3.99778 14.747C5.94962 16.973 8.29807 18.7309 10.9807 19.9695C12.0057 20.4334 13.3737 20.9825 14.9022 21.0761C14.9958 21.0804 15.0939 21.0846 15.183 21.0846C16.2124 21.0846 17.0769 20.7314 17.7542 20.0291C17.7587 20.0206 17.7676 20.0163 17.7721 20.0078C18.0038 19.7396 18.2712 19.497 18.5519 19.2374C18.7435 19.0629 18.9396 18.8799 19.1312 18.6883C19.5724 18.2499 19.8041 17.7392 19.8041 17.2156C19.8041 16.6879 19.5679 16.1814 19.1179 15.7557L16.6714 13.4105ZM18.2667 17.8924C18.2623 17.8967 18.2623 17.8924 18.2667 17.8924C18.0929 18.0712 17.9147 18.2329 17.7231 18.4117C17.4334 18.6756 17.1393 18.9522 16.863 19.2629C16.4129 19.7226 15.8826 19.9397 15.1874 19.9397C15.1206 19.9397 15.0493 19.9397 14.9825 19.9354C13.6589 19.8546 12.429 19.3608 11.5066 18.9395C8.98433 17.7732 6.76957 16.1175 4.92913 14.0192C3.40955 12.2698 2.39352 10.6524 1.72063 8.91583C1.3062 7.85601 1.15468 7.03028 1.22153 6.25138C1.26609 5.75339 1.46662 5.34053 1.83649 4.98725L3.35608 3.53585C3.57443 3.34006 3.80616 3.23365 4.03343 3.23365C4.31417 3.23365 4.54144 3.39539 4.68404 3.53159C4.6885 3.53585 4.69295 3.54011 4.69741 3.54436C4.96924 3.78697 5.2277 4.0381 5.49954 4.30624C5.63768 4.44245 5.78028 4.57865 5.92288 4.71911L7.13944 5.88108C7.6118 6.33225 7.6118 6.74937 7.13944 7.20054C7.01021 7.32397 6.88543 7.4474 6.7562 7.56658C6.38187 7.93262 6.02537 8.27313 5.63768 8.60512C5.62877 8.61363 5.61985 8.61789 5.6154 8.6264C5.23216 8.99245 5.30346 9.34998 5.38367 9.59259C5.38813 9.60536 5.39259 9.61812 5.39704 9.63089C5.71344 10.363 6.15906 11.0525 6.83641 11.874L6.84087 11.8782C8.0708 13.3254 9.36757 14.4533 10.798 15.3173C10.9807 15.428 11.1679 15.5174 11.3461 15.6025C11.5066 15.6791 11.6581 15.7515 11.7873 15.8281C11.8051 15.8366 11.823 15.8494 11.8408 15.8579C11.9923 15.9302 12.1349 15.9643 12.282 15.9643C12.6518 15.9643 12.8836 15.743 12.9593 15.6706L14.4834 14.2149C14.6349 14.0702 14.8755 13.8957 15.1562 13.8957C15.4325 13.8957 15.6598 14.0617 15.798 14.2064C15.8024 14.2107 15.8024 14.2107 15.8069 14.2149L18.2623 16.5602C18.7213 16.9943 18.7213 17.4412 18.2667 17.8924Z" fill="#EEEEEE" />
											<path d="M11.3952 5.71508C12.5627 5.90236 13.6233 6.43014 14.47 7.23884C15.3167 8.04754 15.8648 9.06055 16.0653 10.1757C16.1143 10.4566 16.3684 10.6524 16.658 10.6524C16.6937 10.6524 16.7249 10.6482 16.7605 10.6439C17.0903 10.5928 17.3086 10.2949 17.2551 9.97991C17.0145 8.63066 16.3461 7.40058 15.3256 6.42589C14.3051 5.45119 13.0172 4.81274 11.6046 4.5829C11.2748 4.53183 10.9674 4.74039 10.9094 5.0511C10.8515 5.36181 11.0654 5.66401 11.3952 5.71508Z" fill="#EEEEEE" />
											<path d="M21.0742 9.81391C20.6776 7.59212 19.5813 5.57037 17.8968 3.96148C16.2124 2.35259 14.0957 1.30554 11.7695 0.926729C11.4442 0.871397 11.1367 1.08421 11.0788 1.39492C11.0253 1.70989 11.2437 2.00358 11.5734 2.05891C13.65 2.39516 15.5439 3.3358 17.0502 4.77018C18.5564 6.20882 19.5368 8.01775 19.8888 10.0012C19.9378 10.2821 20.1918 10.4779 20.4815 10.4779C20.5171 10.4779 20.5483 10.4736 20.584 10.4694C20.9093 10.4226 21.1321 10.1246 21.0742 9.81391Z" fill="#EEEEEE" />
										</g>
										<defs>
											<clipPath id="clip0_4249_3089">
												<rect width={22} height={22} fill="white" />
											</clipPath>
										</defs>
									</svg>
									<span className="color-white">+123 888 9999</span>
								</p>
								<p className="text-inline">
									<svg className="me-2" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476609 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9972 8.08347 20.8374 5.28719 18.7751 3.22489C16.7128 1.16259 13.9165 0.00277369 11 0ZM11 20.9524C9.03161 20.9524 7.10742 20.3687 5.47076 19.2751C3.8341 18.1815 2.55848 16.6272 1.8052 14.8086C1.05193 12.99 0.854841 10.989 1.23886 9.05838C1.62287 7.12781 2.57074 5.35447 3.96261 3.9626C5.35447 2.57074 7.12782 1.62287 9.05839 1.23885C10.989 0.854836 12.9901 1.05193 14.8086 1.8052C16.6272 2.55847 18.1815 3.83409 19.2751 5.47075C20.3687 7.10741 20.9524 9.0316 20.9524 11C20.9496 13.6387 19.9002 16.1685 18.0343 18.0343C16.1685 19.9002 13.6387 20.9496 11 20.9524Z" fill="#EEEEEE" />
										<path d="M14.6667 11.66L11.5238 10.6124V4.71428C11.5238 4.57536 11.4686 4.44213 11.3704 4.3439C11.2722 4.24566 11.1389 4.19048 11 4.19048C10.8611 4.19048 10.7278 4.24566 10.6296 4.3439C10.5314 4.44213 10.4762 4.57536 10.4762 4.71428V11C10.4754 11.1093 10.5095 11.216 10.5736 11.3046C10.6377 11.3931 10.7283 11.4589 10.8324 11.4924L14.3105 12.6552C14.3658 12.6662 14.4228 12.6662 14.4781 12.6552C14.5883 12.6537 14.6952 12.6174 14.7836 12.5516C14.872 12.4858 14.9374 12.3937 14.9705 12.2886C15.0084 12.1648 14.9982 12.0312 14.9419 11.9147C14.8855 11.7981 14.7872 11.7072 14.6667 11.66Z" fill="#EEEEEE" />
									</svg>
									<span className="color-white">Mon – Sat: 8 am – 5 pm,<br />
										Sunday: Closed</span>
								</p>
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
								<div className="box-social-profile pt-4">
									<p className="paragraph-bold color-white">Social Profile</p>
									<div className="list-socials">
										<Link href="#" className="share fb" />
										<Link href="#" className="share tw" />
										<Link href="#" className="share instagram" />
										<Link href="#" className="share printest" />
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
