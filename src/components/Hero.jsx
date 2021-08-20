import React, { useEffect, useState } from "react";

// IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { slide1 } from "../assets/slider";
import { slide2 } from "../assets/slider";
import { slide3 } from "../assets/slider";
import slide4 from "../assets/slider4.png";
import slide5 from "../assets/slider5.png";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
// SwiperCore.slideNext([]);

const Hero = () => {
	const [titleS, setTitleS] = useState(true);

	useEffect(() => {
		setTimeout(function () {
			setTitleS(false);
		}, 3500);
	}, []);

	return (
		<>
			{/* DESKTOP START */}
			<div className="page_container">
				<div className="container-fluid px-0 px-lg-3">
					<div className="hero_section d-none d-md-block position-relative">
						<Swiper
							className="mySwiper"
							pagination={true}
							loop={true}
							speed={1500}
							autoplay={{
								delay: 3000,
							}}
						>
							<SwiperSlide>
								<img src={slide1} alt="" />
								<div className="page_container">
									<div className="container-fluid">
										{titleS && (
											<h1 className="main_head position-absolute text-white">
												Outdoors & Beyond
											</h1>
										)}

										<div className="position-absolute hero_text_content text-white">
											<h4 className="mb-4">
												We believe in creating delightful enviornments
											</h4>
											<div className="bottomText">
												<p>
													Founded over 30 years ago, Lancer is located in the
													beautiful wine city of Nasik. Our early clients were
													restaurants, hotels and retail spaces
												</p>
												<p>It is this market that we have targeted since</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide2} alt="" />
								<div className="page_container">
									<div className="container-fluid">
										{/* <h1 className="main_head position-absolute text-white">
											Outdoors & Beyond
										</h1> */}

										<div className="position-absolute hero_text_content text-white">
											<h4 className="mb-4">
												We believe in creating delightful enviornments
											</h4>
											<div className="bottomText">
												<p>
													Founded over 30 years ago, Lancer is located in the
													beautiful wine city of Nasik. Our early clients were
													restaurants, hotels and retail spaces
												</p>
												<p>It is this market that we have targeted since</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide3} alt="" />
								<div className="page_container">
									<div className="container-fluid">
										{/* <h1 className="main_head position-absolute text-white">
											Outdoors & Beyond
										</h1> */}

										<div className="position-absolute hero_text_content text-white">
											<h4 className="mb-4">
												We believe in creating delightful enviornments
											</h4>
											<div className="bottomText">
												<p>
													Founded over 30 years ago, Lancer is located in the
													beautiful wine city of Nasik. Our early clients were
													restaurants, hotels and retail spaces
												</p>
												<p>It is this market that we have targeted since</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					{/* DESKTOP END */}

					{/* MOBILE START */}
					<div className="d-block d-md-none">
						<Swiper
							className="mySwiperM"
							navigation={true}
							pagination={true}
							loop={true}
							speed={1500}
							autoplay={{
								delay: 3000,
							}}
						>
							<SwiperSlide>
								<img src={slide1} alt="" />
								{titleS && (
									<h1 className="main_head position-absolute text-white text-center w-100 mx-auto">
										Outdoors & Beyond
									</h1>
								)}
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide3} alt="" />
								{/* <h1 className="main_head position-absolute text-white text-center w-100 mx-auto">
									Outdoors & Beyond
								</h1> */}
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide2} alt="" />
								{/* <h1 className="main_head position-absolute text-white text-center w-100 mx-auto">
									Outdoors & Beyond
								</h1> */}
							</SwiperSlide>

							<SwiperSlide>
								<img src={slide4} alt="" />
								{/* <h1 className="main_head position-absolute text-white text-center w-100 mx-auto">
									Outdoors & Beyond
								</h1> */}
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide5} alt="" />
								{/* <h1 className="main_head position-absolute text-white text-center w-100 mx-auto">
									Outdoors & Beyond
								</h1> */}
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				{/* MOBILE END */}
			</div>
		</>
	);
};

export default Hero;
