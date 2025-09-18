'use client'
import { sliderGroup4Tab } from '@/util/swiperOptions'
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section4() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-case-studies-2">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<p className="sub-heading-ag-sm text-uppercase secondery-300 mb-3">
							<svg className="me-2" width={61} height={8} viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.646442 3.64645C0.45118 3.84171 0.45118 4.15829 0.646442 4.35355L3.82842 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.7071 4L4.53553 1.17157C4.73079 0.976311 4.73079 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82842 0.464466L0.646442 3.64645ZM61 3.5L0.999996 3.5V4.5L61 4.5V3.5Z" fill="currentColor" />
							</svg>
							Case studies
							<svg className="ms-2" width={61} height={8} viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="currentColor" />
							</svg>
						</p>
						<h2 className="heading-ag-3xl dark-950">We Have Complete 1000+<br className="d-none d-lg-block" /> Project Here</h2>
					</div>
					<div className="box-button-filter" role="tablist">
						<a onClick={() => handleTab(1)} className={`btn btn-filter-primary ${isTab === 1 ? 'active' : ''}`} data-bs-toggle="tab" type="button" role="tab" data-index={1} aria-controls="all" aria-selected="true">View All</a>
						<a onClick={() => handleTab(2)} className={`btn btn-filter-primary ${isTab === 2 ? 'active' : ''}`} data-bs-toggle="tab" type="button" role="tab" data-index={2} aria-controls="market" aria-selected="true">Market Research</a>
						<a onClick={() => handleTab(3)} className={`btn btn-filter-primary ${isTab === 3 ? 'active' : ''}`} data-bs-toggle="tab" type="button" role="tab" data-index={3} aria-controls="project" aria-selected="true">Project Management</a>
						<a onClick={() => handleTab(4)} className={`btn btn-filter-primary ${isTab === 4 ? 'active' : ''}`} data-bs-toggle="tab" type="button" role="tab" data-index={4} aria-controls="marketing" aria-selected="true">Marketing</a>
						<a onClick={() => handleTab(5)} className={`btn btn-filter-primary ${isTab === 5 ? 'active' : ''}`} data-bs-toggle="tab" type="button" role="tab" data-index={5} aria-controls="financial" aria-selected="true">Financial Consulting</a>
					</div>
				</div>
				<div className="box-list-studies mt-5" data-aos="fade-up">
					<div className="tab-content">
						<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="all" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
							<div className="box-swiper">
								<Swiper {...sliderGroup4Tab} className="swiper-container slider-group-4-tab-1">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study2.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Consulting Firm Services</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Insurance Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study4.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Financial Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="container text-center mt-5">
								<div className="box-button-slider">
									<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-circle swiper-button-prev-style-6 swiper-button-prev-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-inline swiper-button-next-style-circle swiper-button-next-style-6 swiper-button-next-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="market" role="tabpanel" aria-labelledby="market-tab" tabIndex={0}>
							<div className="box-swiper">
								<Swiper {...sliderGroup4Tab} className="swiper-container slider-group-4-tab-2">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study2.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Consulting Firm Services</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Insurance Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study4.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Financial Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="container text-center mt-5">
								<div className="box-button-slider">
									<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-circle swiper-button-prev-style-6 swiper-button-prev-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-inline swiper-button-next-style-circle swiper-button-next-style-6 swiper-button-next-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="project" role="tabpanel" aria-labelledby="project-tab" tabIndex={0}>
							<div className="box-swiper">
								<Swiper {...sliderGroup4Tab} className="swiper-container slider-group-4-tab-3">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study2.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Consulting Firm Services</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Insurance Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study4.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Financial Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="container text-center mt-5">
								<div className="box-button-slider">
									<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-circle swiper-button-prev-style-6 swiper-button-prev-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-inline swiper-button-next-style-circle swiper-button-next-style-6 swiper-button-next-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="marketing" role="tabpanel" aria-labelledby="marketing-tab" tabIndex={0}>
							<div className="box-swiper">
								<Swiper {...sliderGroup4Tab} className="swiper-container slider-group-4-tab-4">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study2.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Consulting Firm Services</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Insurance Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study4.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Financial Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="container text-center mt-5">
								<div className="box-button-slider">
									<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-circle swiper-button-prev-style-6 swiper-button-prev-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-inline swiper-button-next-style-circle swiper-button-next-style-6 swiper-button-next-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="financial" role="tabpanel" aria-labelledby="financial-tab" tabIndex={0}>
							<div className="box-swiper">
								<Swiper {...sliderGroup4Tab} className="swiper-container slider-group-4-tab-5">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study2.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Consulting Firm Services</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Insurance Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study4.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Financial Company Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-case-study-2">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home11/study.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<Link href="#">
														<h4 className="sub-heading-ag-md">Digital Marketing Agency</h4>
													</Link>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="container text-center mt-5">
								<div className="box-button-slider">
									<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-circle swiper-button-prev-style-6 swiper-button-prev-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-inline swiper-button-next-style-circle swiper-button-next-style-6 swiper-button-next-style-tab">
										<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div></section>
		</>
	)
}
