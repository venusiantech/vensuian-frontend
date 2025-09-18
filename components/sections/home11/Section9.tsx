'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup2 } from '@/util/swiperOptions'
import Link from "next/link"

export default function Section9() {
	return (
		<>

			<section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-11">
				<div className="box-latest-blog-11-inner">
					<div className="container">
						<div className="row position-relative align-items-end">
							<div className="col-lg-7 mb-4 text-center text-lg-start">
								<p className="sub-heading-ag-sm text-uppercase secondery-300 mb-3">
									Testimonial
									<svg className="ms-2" width={61} height={8} viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="currentColor" />
									</svg>
								</p>
								<h3 className="heading-3xl secondery-500">
									Our Latest Trending<br className="d-none d-lg-block" />
									Blogs &amp; News
								</h3>
							</div>
							<div className="col-lg-5 mb-4 text-center text-lg-start">
								<p className="paragraph-rubik-r dark-950">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam</p>
							</div>
						</div>
						<div className="box-testimonials-lists mt-5">
							<div className="box-swiper position-relative mt-60 pb-3">
								<Swiper {...sliderGroup2} className="swiper-container slider-group-2">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-blog card-blog-2 card-blog-10">
												<div className="card-image">
													<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news2.png" alt="Vatech" /></Link>
													<span className="card-date">Business Consulting</span>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency Blog</Link>
														<Link href="#" className="btn btn-border-950">Read More
															<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog card-blog-2 card-blog-10">
												<div className="card-image">
													<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news.png" alt="Vatech" /></Link>
													<span className="card-date">Insurance Consulting</span>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title heading-ag-lg">Breaking Down Complex Issues in Our Consulting Agency Blog</Link>
														<Link href="#" className="btn btn-border-950">Read More
															<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-blog card-blog-2 card-blog-10">
												<div className="card-image">
													<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news2.png" alt="Vatech" /></Link>
													<span className="card-date">Business Consulting</span>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency Blog</Link>
														<Link href="#" className="btn btn-border-950">Read More
															<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
							<div className="swiper-pagination swiper-pagination-style-2" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
