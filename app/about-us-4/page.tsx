'use client'
import CircleText from '@/components/elements/CircleText'
import Header11 from '@/components/layout/header/Header11'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function AboutUs4() {

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout headerStyle={11} footerStyle={11}>
			{/* <Header11 scroll={scroll}  /> */}

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner box-blog-single-banner">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">About Us</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>About Us</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/*Home 8 Section 2 */}
				<section className="position-relative overflow-hidden box-about-us-8 style-green-about-3">
					<div className="container" data-aos="fade-up">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-4">
								<div className="box-image-about-8">
									<img src="/assets/imgs/pages/home8/img-about.png" alt="Venusian" />
									<div className="image-circle">
										<div className="position-relative bg-dark-950 border-linear-01 icon_220 icon-shape rounded-circle">
											<svg width={62} height={61} viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M49.1017 38.1349C47.8531 36.7421 47.1256 33.6429 46.7116 30.8653C46.1722 27.286 46.1787 23.7353 46.8616 20.4179C47.3739 17.9306 48.2491 15.1992 49.7321 13.8697M49.7321 13.8697C48.2491 15.1992 45.4371 15.7733 42.9104 16.0103C39.5367 16.3262 36.0064 15.9462 32.5105 15.024C29.7928 14.3082 26.7878 13.244 25.5425 11.8549M49.7321 13.8697L12.5021 47.2452" stroke="#0055FF" strokeWidth="3.5" />
											</svg>
											<div className="position-absolute top-50 start-50 translate-middle w-100">
												<CircleText text="Best - Consulting - Agency -" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="banner-small-title-black sub-heading-ag-sm color-white line-gradient-01">About us</div>
								<h1 className="heading-ag-3xl color-white mb-20">Tangible Outcomes: Discover Our Consulting Approach</h1>
								<p className="paragraph-rubik-r color-white desc-banner mb-60">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor alteraciones en alguna manera, ya sea porque</p>
								<div className="box-progress box-progress-gradient box-progress-gradient-2">
									<div className="item-progress mb-70">
										<div className="progress">
											<div className="progress-bar" style={{ width: '80%' }} />
										</div>
									</div>
									<div className="item-progress mb-30">
										<div className="progress">
											<div className="progress-bar" style={{ width: '90%' }} />
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link href="#" className="btn btn-linear-03">
										About more
										<img src="/assets/imgs/pages/home8/arrow-right.png" alt="Venusian" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Home 12 Section 9 */}
				<section className="position-relative box-section box-faqs-12 style-green">
					<div className="container" data-aos="fade-up">
						<div className="row position-relative">
							<div className="col-lg-6 mb-4">
								<div className="position-relative d-inline-block w-100">
									<div className="image-faq-1">
										<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home12/faq2.png" alt="Venusian" />
									</div>
									<div className="image-faq-2">
										<img className="wow img-custom-anim-right" src="/assets/imgs/pages/home12/faq.png" alt="Venusian" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Some Faq</p>
								<h3 className="heading-3xl secondery-500 mb-40">
									Construction at your service A<br className="d-none d-lg-block" />
									passion precision pride
								</h3>
								<div className="block-faqs">
									<div className="accordion" id="accordionFAQ">
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
												<button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													<p>What the Cost of Services Help desk or Support?</p>
												</button>
											</h5>
											<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
												<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
											</div>
										</div>
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
												<button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
													<p>What Do you Services For Digital Agency?</p>
												</button>
											</h5>
											<div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
												<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
											</div>
										</div>
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(3)} id="headingThree">
												<button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
													<p>What types of Scale Help Desk?</p>
												</button>
											</h5>
											<div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
												<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				{/*Home 11 Section 9 */}
				{/* <section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-12">
					<div className="container" data-aos="fade-up">
						<div className="text-center">
							<p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Some Faq</p>
							<h3 className="heading-3xl secondery-500">
								Explore Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h3>
						</div>
						<div className="box-news-lists mt-5">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="card-blog card-blog-12">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home12/news.png" alt="Venusian" /></Link>
											<span className="card-date">
												<span className="heading-ag-3xl">22</span>
												<span className="paragraph-rubik-r">FEB,2024</span>
											</span>
										</div>
										<div className="card-info">
											<div className="card-title">
												<Link href="#" className="link-title heading-ag-lg">Our Commitment ,user friendly interfaces, and a focus</Link>
												<Link href="#" className="link-readmore">Read More
													<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-blog card-blog-12">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home12/news2.png" alt="Venusian" /></Link>
											<span className="card-date">
												<span className="heading-ag-3xl">22</span>
												<span className="paragraph-rubik-r">FEB,2024</span>
											</span>
										</div>
										<div className="card-info">
											<div className="card-title">
												<Link href="#" className="link-title heading-ag-lg">Navigating Insights from Our Consulting Experts</Link>
												<Link href="#" className="link-readmore">Read More
													<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-blog card-blog-12">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home12/news3.png" alt="Venusian" /></Link>
											<span className="card-date">
												<span className="heading-ag-3xl">22</span>
												<span className="paragraph-rubik-r">FEB,2024</span>
											</span>
										</div>
										<div className="card-info">
											<div className="card-title">
												<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency</Link>
												<Link href="#" className="link-readmore">Read More
													<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}


			</Layout >
		</>
	)
}