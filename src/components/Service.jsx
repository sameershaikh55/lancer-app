import React from "react";

// IMPORTS
import s1 from "../assets/service/s1.png";
import s2 from "../assets/service/s2.png";
import s3 from "../assets/service/s3.png";
import Fade from "react-reveal/Fade";
import castle from "../assets/service/castle.png";
import imageFrame from "../assets/imageFrame.png";

// IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Service = () => {
	const data = [
		{
			t: "Design",
			i: s1,
			d: "Our creative team work closely with our clients to understand their specific need. This  is what drives the design process of the perfect space.",
		},
		{
			t: "Development",
			i: s2,
			d: "Our designers and technicians then analyse the site in order to develop specific concepts for the customer ",
		},
		{
			t: "Installation",
			i: s3,
			d: "Lancer’s products are designed to embrace a DIY culture. If that’s not your thing, we can surely send a team out to do it for you",
		},
	];
	return (
		<>
			{/* DESKTOP START */}
			<div className="service_container d-none d-md-block">
				<div className="page_container">
					<div className="container-fluid">
						<h2 className="lightGray heading text-center mb-5">Our Services</h2>

						<div className="service_inner position-relative px-5 py-5">
							<h5 className="lightGray2">It all starts with a sketch..</h5>

							<div className="row mt-5">
								<div className="col-10">
									<div className="row">
										{data.map((p, ind) => {
											const { t, i, d } = p;
											return (
												<div key={ind} className="col-4 text-center">
													<h6 className="lightGray fw-bold">{t}</h6>
													<div className="row">
														<div className="col-lg-9 mx-auto">
															<img className="w-100 mt-4 mb-5" src={i} alt="" />
														</div>
													</div>
													<p className="lightGray small mx-auto">{d}</p>
												</div>
											);
										})}
									</div>
								</div>
							</div>

							{/* CASTLE IMAGE START */}
							<div className="caste_container position-absolute">
								<Fade right>
									<img src={castle} alt="castle" />
								</Fade>
							</div>
							{/* CASTLE IMAGE END */}
						</div>
					</div>
				</div>
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="service_containerM d-block d-md-none my-5">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 mx-auto">
								<h4 className="heading text-dark fw600 text-center mb-3">
									Our Services
								</h4>
								<Swiper
									// className="mySwiper"
									pagination={false}
									loop={true}
									speed={1200}
									autoplay={{
										delay: 2000,
									}}
								>
									<SwiperSlide>
										<div className="row">
											<div className="col-12 mx-auto">
												<h6 className="text-center fw-bold blueColor">
													Design
												</h6>
												<div className="text-center my-4">
													<img src={imageFrame} alt="imageFrame" />
												</div>

												<p className="lightGray text-center">
													Our creative team work closely with our clients to
													understand their specific need. This is what drives
													the design process of the perfect space.
												</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="row">
											<div className="col-12 mx-auto">
												<h6 className="text-center fw-bold blueColor">
													Installation
												</h6>
												<div className="text-center my-4">
													<img src={imageFrame} alt="imageFrame" />
												</div>

												<p className="lightGray text-center">
													Lancer’s products are designed to embrace a DIY
													culture. If that’s not your thing, we can surely send
													a team out to do it for you
												</p>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default Service;
