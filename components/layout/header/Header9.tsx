import Link from 'next/link'


export default function Header9({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
	return (
		<>

			<div>
				<section className="top-bar position-relative z-4 d-none d-md-block top-bar-style-9">
					<div className="container-fluid">
						<div className="container">
							<div className="d-flex mb-lg-0 flex-wrap align-items-center justify-content-center justify-content-lg-between gap-4 top-bar-inner">
								<div className="box-infos-contact d-flex align-items-center">
									<div className="address">
										<svg width={23} height={30} viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11.25 0C8.26752 0.00395631 5.40834 1.19049 3.29942 3.29941C1.19049 5.40834 0.00395631 8.26752 0 11.25C0 19.3265 10.4812 29.4422 10.9266 29.8687C11.0132 29.9529 11.1292 30 11.25 30C11.3708 30 11.4868 29.9529 11.5734 29.8687C12.0187 29.4422 22.5 19.3265 22.5 11.25C22.496 8.26752 21.3095 5.40834 19.2006 3.29941C17.0916 1.19049 14.2325 0.00395631 11.25 0ZM11.25 16.4062C10.2302 16.4062 9.23327 16.1038 8.38533 15.5372C7.53739 14.9707 6.8765 14.1654 6.48624 13.2232C6.09598 12.281 5.99387 11.2443 6.19282 10.2441C6.39177 9.24384 6.88286 8.32509 7.60397 7.60397C8.32509 6.88286 9.24384 6.39177 10.2441 6.19282C11.2443 5.99386 12.281 6.09598 13.2232 6.48624C14.1654 6.8765 14.9707 7.53739 15.5372 8.38533C16.1038 9.23327 16.4062 10.2302 16.4062 11.25C16.4054 12.6173 15.8619 13.9283 14.8951 14.8951C13.9283 15.8619 12.6173 16.4054 11.25 16.4062Z" fill="#012B43" />
										</svg>
										<div>
											<span className="gray-900 d-block">Location</span>
											62, Business Str Hobert, AU
										</div>
									</div>
									<div className="email">
										<svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M23.3077 19.8482C22.3276 18.8806 21.104 18.8806 20.1301 19.8482C19.3872 20.5848 18.6443 21.3215 17.9139 22.0706C17.7142 22.2766 17.5456 22.3203 17.3022 22.183C16.8215 21.9208 16.3096 21.7085 15.8476 21.4213C13.6939 20.0667 11.8897 18.325 10.2916 16.3647C9.49877 15.3909 8.79334 14.3483 8.30017 13.1747C8.20028 12.9375 8.21901 12.7814 8.41253 12.5879C9.15542 11.87 9.87957 11.1333 10.61 10.3967C11.6275 9.3729 11.6275 8.1743 10.6037 7.14425C10.0232 6.55743 9.44258 5.9831 8.86201 5.39629C8.26271 4.79699 7.66965 4.19144 7.06411 3.59839C6.084 2.64325 4.86043 2.64325 3.88657 3.60463C3.13744 4.34127 2.41953 5.09664 1.65792 5.82079C0.952489 6.48876 0.596654 7.30656 0.521741 8.2617C0.403129 9.81613 0.783935 11.2832 1.32081 12.7128C2.41953 15.6718 4.09258 18.3 6.12146 20.7097C8.86201 23.9684 12.1332 26.5466 15.96 28.4069C17.683 29.2435 19.4684 29.8865 21.4099 29.9926C22.7458 30.0675 23.907 29.7304 24.8371 28.6879C25.4739 27.9762 26.1918 27.327 26.866 26.6465C27.8648 25.6352 27.8711 24.4116 26.8785 23.4128C25.6924 22.2204 24.5 21.0343 23.3077 19.8482Z" fill="#012B43" />
											<path d="M22.1148 14.8713L24.4183 14.478C24.0562 12.3617 23.0574 10.4452 21.5404 8.92197C19.9361 7.3176 17.9072 6.30628 15.6723 5.99414L15.3477 8.31019C17.0769 8.55366 18.6501 9.33399 19.8924 10.5763C21.066 11.7499 21.8338 13.2357 22.1148 14.8713Z" fill="#012B43" />
											<path d="M25.7156 4.85683C23.0562 2.19744 19.6914 0.518146 15.977 0L15.6523 2.31605C18.8611 2.76552 21.7702 4.22008 24.0675 6.51115C26.2462 8.68986 27.6758 11.4429 28.194 14.4706L30.4975 14.0773C29.892 10.5689 28.2377 7.38513 25.7156 4.85683Z" fill="#012B43" />
										</svg>
										<div>
											<span className="gray-900 d-block">Call</span>
											info@vatech.com
										</div>
									</div>
									<div className="phone">
										<svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_4249_4555)">
												<path d="M19.9373 16.248L17.4247 18.7691C16.4059 19.7916 14.6131 19.8136 13.5722 18.7691L11.0595 16.248L2.03516 25.3017C2.37107 25.4571 2.74145 25.5497 3.1352 25.5497H27.8618C28.2555 25.5497 28.6258 25.4572 28.9616 25.3018L19.9373 16.248Z" fill="#012B43" />
												<path d="M27.8616 4.45312H3.13508C2.74133 4.45312 2.37096 4.54582 2.03516 4.70115L11.6783 14.3763C11.679 14.377 11.6797 14.3771 11.6804 14.3777C11.681 14.3784 11.6812 14.3793 11.6812 14.3793L14.8167 17.5252C15.1497 17.8582 15.8471 17.8582 16.1802 17.5252L19.315 14.3798C19.315 14.3798 19.3158 14.3784 19.3164 14.3777C19.3164 14.3777 19.3179 14.377 19.3185 14.3763L28.9614 4.70109C28.6256 4.5457 28.2554 4.45312 27.8616 4.45312Z" fill="#012B43" />
												<path d="M0.78043 5.92969C0.606641 6.28113 0.5 6.67125 0.5 7.08914V22.9095C0.5 23.3273 0.606523 23.7175 0.780371 24.0689L9.82039 14.9996L0.78043 5.92969Z" fill="#012B43" />
												<path d="M30.2196 5.92969L21.1797 14.9997L30.2196 24.0691C30.3934 23.7177 30.5 23.3276 30.5 22.9096V7.08926C30.5 6.67125 30.3934 6.28113 30.2196 5.92969Z" fill="#012B43" />
											</g>
											<defs>
												<clipPath id="clip0_4249_4555">
													<rect width={30} height={30} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
										<div>
											<span className="gray-900 d-block">Email</span>
											+98 90980798
										</div>
									</div>
								</div>
								<div className="box-socials d-none d-lg-block">
									<Link href="/https://www.facebook.com/" className=" text-reset">
										<img src="/assets/imgs/template/icons/fb.svg" alt="Vatech" />
									</Link>
									<Link href="/https://twitter.com/" className=" text-reset">
										<img src="/assets/imgs/template/icons/tw.svg" alt="Vatech" />
									</Link>
									<Link href="/https://www.instagram.com/" className=" text-reset">
										<img src="/assets/imgs/template/icons/ins.svg" alt="Vatech" />
									</Link>
									<Link href="/https://www.linkedin.com/" className=" text-reset">
										<img src="/assets/imgs/template/icons/linkedin.svg" alt="Vatech" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Navbar */}
				<header className="header-style-9">
					<nav className={`navbar navbar-expand-lg navbar-light w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
						<div className="container px-3">
							<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo.svg" alt="" /></Link>
							<ul className="navbar-nav gap-1 align-items-lg-center m-auto">
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
							<div className="d-flex align-items-center">
								<a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu d-lg-none d-inline-block">
									<svg width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line y1={12} x2={30} y2={12} stroke="white" strokeWidth={3} />
										<path d="M5 22H30" stroke="white" strokeWidth={3} />
										<path d="M10 2H30" stroke="white" strokeWidth={3} />
									</svg>
								</a>
								<Link href="#" className="btn btn-quote d-none d-lg-inline-block">
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M19.9582 8.01055C19.9051 7.9168 19.8051 7.85742 19.6957 7.85742H14.0863V7.0043C14.0863 6.96367 14.077 6.92305 14.0613 6.88867C14.0457 6.85117 14.0238 6.81992 13.9957 6.7918L12.1363 4.93242C12.1082 4.9043 12.077 4.88242 12.0395 4.8668C12.002 4.85117 11.9645 4.8418 11.9238 4.8418H6.28321C6.11446 4.8418 5.98009 4.97617 5.98009 5.14492V7.85742H0.301962C0.192587 7.85742 0.0925865 7.9168 0.0394615 8.01055C-0.0136635 8.1043 -0.0136635 8.22305 0.0425865 8.3168L0.995712 9.91055C1.05196 10.0012 1.14884 10.0574 1.25509 10.0574H1.98009L2.74884 11.498C2.80196 11.598 2.90509 11.6574 3.01759 11.6574H3.38321L4.11134 13.0887C4.16446 13.1918 4.26759 13.2543 4.38009 13.2543H5.98321V14.8512C5.98321 15.0199 6.11759 15.1543 6.28634 15.1543H13.7863C13.9551 15.1543 14.0895 15.0199 14.0895 14.8512V13.2543H15.6176C15.7301 13.2543 15.8363 13.1918 15.8863 13.0887L16.6176 11.6574H16.9801C17.0926 11.6574 17.1957 11.5949 17.2488 11.498L18.0207 10.0574H18.7457C18.852 10.0574 18.952 10.0012 19.0051 9.91055L19.9613 8.3168C20.0113 8.22305 20.0145 8.10742 19.9582 8.01055ZM12.227 5.8793L13.052 6.7043H12.227V5.8793ZM0.836337 8.46367H5.98009V9.45117H1.42696L0.836337 8.46367ZM2.66446 10.0605H5.98009V11.0543H3.19571L2.66446 10.0605ZM4.56134 12.6512L4.05821 11.6605H5.98009V12.6512H4.56134ZM13.4801 14.5543H6.58634V5.44805H11.6207V7.0043C11.6207 7.17305 11.7551 7.30742 11.9238 7.30742H13.4801V14.5543ZM15.4301 12.6512H14.0895V11.6605H15.9363L15.4301 12.6512ZM16.7957 11.0543H14.0863V10.0605H17.327L16.7957 11.0543ZM18.5676 9.4543H14.0863V8.4668H19.1613L18.5676 9.4543Z" fill="#012B43" />
										<path d="M12.3883 8.19531H7.68203C7.51328 8.19531 7.37891 8.32969 7.37891 8.49844C7.37891 8.66719 7.51328 8.80156 7.68203 8.80156H12.3883C12.557 8.80156 12.6914 8.66719 12.6914 8.49844C12.6914 8.33281 12.557 8.19531 12.3883 8.19531Z" fill="#012B43" />
										<path d="M12.3844 9.65039H7.67812C7.50937 9.65039 7.375 9.78477 7.375 9.95352C7.375 10.1223 7.50937 10.2566 7.67812 10.2566H12.3844C12.5531 10.2566 12.6875 10.1223 12.6875 9.95352C12.6875 9.78789 12.5531 9.65039 12.3844 9.65039Z" fill="#012B43" />
										<path d="M12.3844 11.1074H7.67812C7.50937 11.1074 7.375 11.2418 7.375 11.4105C7.375 11.5793 7.50937 11.7137 7.67812 11.7137H12.3844C12.5531 11.7137 12.6875 11.5793 12.6875 11.4105C12.6875 11.2418 12.5531 11.1074 12.3844 11.1074Z" fill="#012B43" />
										<path d="M11.7078 12.5625H8.35781C8.18906 12.5625 8.05469 12.6969 8.05469 12.8656C8.05469 13.0344 8.18906 13.1687 8.35781 13.1687H11.7109C11.8797 13.1687 12.0141 13.0344 12.0141 12.8656C12.0109 12.6969 11.8766 12.5625 11.7078 12.5625Z" fill="#012B43" />
										<path d="M9.99844 2.03203C10.1672 2.03203 10.3016 1.89766 10.3016 1.72891V0.603906C10.3016 0.435156 10.1672 0.300781 9.99844 0.300781C9.82969 0.300781 9.69531 0.435156 9.69531 0.603906V1.72891C9.69531 1.89766 9.82969 2.03203 9.99844 2.03203Z" fill="#012B43" />
										<path d="M5.60142 2.98814C5.65767 3.08501 5.76079 3.13813 5.86392 3.13813C5.91392 3.13813 5.96704 3.12564 6.01392 3.09751C6.15767 3.01313 6.20767 2.82876 6.12642 2.68501L5.56392 1.71001C5.47954 1.56626 5.29517 1.51626 5.15142 1.59751C5.00767 1.68189 4.95767 1.86626 5.03892 2.01001L5.60142 2.98814Z" fill="#012B43" />
										<path d="M1.7061 5.56676L2.6811 6.12926C2.72798 6.15739 2.7811 6.16989 2.8311 6.16989C2.93735 6.16989 3.03735 6.11676 3.0936 6.01989C3.17798 5.87614 3.12798 5.68864 2.9811 5.60739L2.0061 5.04489C1.85923 4.96051 1.67485 5.01051 1.5936 5.15739C1.51235 5.29801 1.56235 5.48239 1.7061 5.56676Z" fill="#012B43" />
										<path d="M2.6811 13.877L1.7061 14.4395C1.56235 14.5239 1.51235 14.7083 1.5936 14.852C1.64985 14.9489 1.75298 15.002 1.8561 15.002C1.9061 15.002 1.95923 14.9895 2.0061 14.9614L2.9811 14.3989C3.12485 14.3145 3.17485 14.1302 3.0936 13.9864C3.01235 13.8427 2.82798 13.7927 2.6811 13.877Z" fill="#012B43" />
										<path d="M6.01598 16.9043C5.8691 16.8199 5.68473 16.8699 5.60348 17.0168L5.04098 17.9918C4.9566 18.1355 5.0066 18.323 5.15348 18.4043C5.20035 18.4324 5.25348 18.4449 5.30348 18.4449C5.40973 18.4449 5.50973 18.3918 5.56598 18.2949L6.12848 17.3199C6.21285 17.173 6.16285 16.9855 6.01598 16.9043Z" fill="#012B43" />
										<path d="M9.99844 17.9688C9.82969 17.9688 9.69531 18.1031 9.69531 18.2719V19.3969C9.69531 19.5656 9.82969 19.7 9.99844 19.7C10.1672 19.7 10.3016 19.5656 10.3016 19.3969V18.2719C10.3016 18.1031 10.1672 17.9688 9.99844 17.9688Z" fill="#012B43" />
										<path d="M14.3999 17.0147C14.3155 16.8709 14.1311 16.8209 13.9874 16.9022C13.8436 16.9866 13.7936 17.1709 13.8749 17.3147L14.4374 18.2897C14.4936 18.3866 14.5967 18.4397 14.6999 18.4397C14.7499 18.4397 14.803 18.4272 14.8499 18.3991C14.9936 18.3147 15.0436 18.1303 14.9624 17.9866L14.3999 17.0147Z" fill="#012B43" />
										<path d="M18.2879 14.4355L17.3129 13.873C17.166 13.7886 16.9816 13.8386 16.9004 13.9855C16.816 14.1293 16.866 14.3168 17.0129 14.398L17.9879 14.9605C18.0347 14.9886 18.0879 15.0011 18.1379 15.0011C18.2441 15.0011 18.3441 14.948 18.4004 14.8511C18.4816 14.7043 18.4316 14.5199 18.2879 14.4355Z" fill="#012B43" />
										<path d="M17.1608 6.16704C17.2108 6.16704 17.2639 6.15454 17.3108 6.12642L18.2858 5.56392C18.4295 5.47954 18.4795 5.29517 18.3983 5.15142C18.3139 5.00767 18.1295 4.95767 17.9858 5.03892L17.0108 5.60142C16.867 5.68579 16.817 5.87017 16.8983 6.01392C16.9545 6.11392 17.0577 6.16704 17.1608 6.16704Z" fill="#012B43" />
										<path d="M13.9816 3.09645C14.0285 3.12457 14.0816 3.13707 14.1316 3.13707C14.2379 3.13707 14.3379 3.08395 14.3941 2.98707L14.9566 2.01207C15.041 1.86832 14.991 1.68082 14.8441 1.59957C14.6972 1.5152 14.5129 1.5652 14.4316 1.71207L13.8691 2.68707C13.7847 2.8277 13.8347 3.0152 13.9816 3.09645Z" fill="#012B43" />
									</svg>
									Get a quote
								</Link>
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
			</div>

		</>
	)
}
