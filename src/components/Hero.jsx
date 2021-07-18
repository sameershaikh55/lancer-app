import React from "react";

// IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";

import slide1 from "../assets/hero_bg.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay]);

const hero = () => {
	return (
		<div className="hero_section position-relative">
			<Swiper
				className="mySwiper"
				loop={true}
				autoplay={{
					delay: 2000,
					duration: 4000,
				}}
			>
				<SwiperSlide>
					<img src={slide1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="" />
				</SwiperSlide>
			</Swiper>

			<div className="page_container">
				<div className="container-fluid">
					<h1 className="main_head position-absolute text-white">
						<Zoom top cascade>
							Outdoors & Beyond
						</Zoom>
					</h1>

					<Jump>
						<div className="position-absolute hero_text_content text-white">
							<h4 className="mb-4">
								We believe in creating delightful enviornments
							</h4>
							<div className="bottomText">
								<p>
									Founded over 30 years ago, Lancer is located in the beautiful
									wine city of Nasik. Our early clients were restaurants, hotels
									and retail spaces
								</p>
								<p>It is this market that we have targeted since</p>
							</div>
						</div>
					</Jump>
				</div>
			</div>
		</div>
	);
};

export default hero;
