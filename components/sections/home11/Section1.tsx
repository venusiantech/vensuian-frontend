'use client'
import CountUp from 'react-countup'

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-banner-11">
				<div className="box-banner-11-inner">
					<div className="container">
						<div className="banner">
							<p className="sub-heading-ag-sm text-uppercase primary-500 mb-1" data-aos="fade-up">
								CONSULTING
								<svg className="ms-2" width={61} height={8} viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="#0055FF" />
								</svg>
							</p>
							<h1 className="display-ag-2xl gray-1100 mb-3" data-aos="fade-up"><span>Consulting with Clarity</span> Leading with <strong className="primary-1200">Confidence</strong></h1>
							<p className="paragraph-rubik-r gray-800 desc-banner" data-aos="fade-up">Education is the key to studeny Unlock your potential through learning. Expand your horizons with the most</p>
							<div className="form-search" data-aos="fade-up">
								<form className="form" action="#">
									<input type="text" className="form-control" placeholder="Search Here" />
									<button type="submit" className="btn btn-search">
										<svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.5312 18.8438C21.1172 19.4688 21.1172 20.4453 20.5312 21.0703C19.9062 21.6562 18.9297 21.6562 18.3047 21.0703L13.6562 16.3828C12.0547 17.4375 10.1016 17.9844 7.99219 17.7109C4.39844 17.2031 1.50781 14.2734 1.03906 10.7188C0.375 5.40625 4.86719 0.914062 10.1797 1.57812C13.7344 2.04688 16.6641 4.9375 17.1719 8.53125C17.4453 10.6406 16.8984 12.5938 15.8438 14.1562L20.5312 18.8438ZM4.08594 9.625C4.08594 12.3984 6.3125 14.625 9.08594 14.625C11.8203 14.625 14.0859 12.3984 14.0859 9.625C14.0859 6.89062 11.8203 4.625 9.08594 4.625C6.3125 4.625 4.08594 6.89062 4.08594 9.625Z" fill="currentColor" />
										</svg>
									</button>
								</form>
							</div>
							<div data-aos="fade-down">
								<div className="box-employees">
									<div className="employees-icon">
										<img src="/assets/imgs/pages/home11/employee.png" alt="Vatech" />
									</div>
									<div className="employees-info">
										<h5 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={20} /><span className="d-inline-block align-middle">k+</span></h5>
										<p className="paragraph-rubik-r mb-0">Full Time Employees</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
