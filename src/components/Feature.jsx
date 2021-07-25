import React from "react";

// IMPORTS
import f1 from "../assets/featured/f1.png";
import f2 from "../assets/featured/f2.png";
import f3 from "../assets/featured/f3.png";
import f4 from "../assets/featured/f4.png";
import f5 from "../assets/featured/f5.png";
import f6 from "../assets/featured/f6.png";
import f7 from "../assets/featured/f7.png";
import f8 from "../assets/featured/f8.png";

// MOBILE IMPORTS
import fm1 from "../assets/featureM/f1.png";
import fm2 from "../assets/featureM/f2.png";
import fm3 from "../assets/featureM/f3.png";
import fm4 from "../assets/featureM/f4.png";
import fm5 from "../assets/featureM/f5.png";
import fm6 from "../assets/featureM/f6.png";
import ourClients from "../assets/ourClients.png";

// FOOTER ICONS
import i1 from "../assets/footer/i1.svg";
import i2 from "../assets/footer/i2.svg";
import i3 from "../assets/footer/i3.svg";
import { NavLink } from "react-router-dom";

const Feature = () => {
	const data = [f1, f4];
	const data1 = [f2, f3, f5, f6, f7, f8];

	const dataM = [fm1, fm2, fm3];
	const data1M = [fm4, fm5, fm6];

	return (
		<>
			{/* DESKTOP START */}
			<div className="feature_container d-none d-md-block my-5">
				<h2 className="lightGray heading text-center mb-5">Featured</h2>
				{/* <!-- Gallery --> */}
				<div class="gallery">
					<div className="gallery_inner1">
						<div className="left">
							{data.map((p, i) => {
								return (
									<div key={i} class="gallery-item zoom-within-container">
										<img src={p} alt="" />
									</div>
								);
							})}
						</div>
					</div>
					<div className="gallery_inner2">
						<div className="right">
							{data1.map((p, i) => {
								return (
									<div key={i} class="gallery-item zoom-within-container">
										<img src={p} alt="" />
									</div>
								);
							})}
						</div>
						{/* <!-- Gallery --> */}
					</div>
				</div>
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="feature_containerM d-block d-md-none mt-5">
				<div className="container-fluid">
					<h4 className="heading text-dark fw600 text-center mb-4">
						Featured Products
					</h4>
					<div class="galleryM">
						<div className="gallery_inner1M">
							<div className="leftM">
								{dataM.map((p, i) => {
									return (
										<div key={i} class="gallery-itemM zoom-within-container">
											<img src={p} alt="" />
										</div>
									);
								})}
							</div>
						</div>
						<div className="gallery_inner2M">
							<div className="rightM">
								{data1M.map((p, i) => {
									return (
										<div key={i} class="gallery-itemM zoom-within-container">
											<img src={p} alt="" />
										</div>
									);
								})}
							</div>
							{/* <!-- Gallery --> */}
						</div>
					</div>

					<div className="text-center mt-4">
						<NavLink to="/products">
							<button className="expbtn py-2 px-4 text-white border-0 fw600">
								Explore
							</button>
						</NavLink>
					</div>

					<div className="row">
						<div className="col-11 mx-auto">
							<div className="text-center mt-5">
								<h4 className="heading text-dark fw600 text-center mb-4">
									About Us
								</h4>

								<p className="fw500">
									Founded over 30 years ago, Lancer is located in the beautiful
									wine city of Nasik. Our early clients were restaurants, hotels
									and retail spaces
								</p>
								<p className="fw500">
									It is this market that we <br /> have targeted since
								</p>

								<div className="mt-5">
									<h4 className="heading text-dark fw600 text-center mb-4">
										Our Clients
									</h4>

									<div>
										<img className="w-100" src={ourClients} alt="" />
									</div>
								</div>

								<p className="text-white mt-5">
									Take a drive, come say hello! <br /> If not, sign up to our
									Newsletter.
								</p>

								<div className="inp_cont mt-5">
									<input
										type="text"
										name=""
										id=""
										placeholder="Email Address"
									/>
									<div className="mt-3">
										<button className="expbtn py-2 px-4 text-white border-0 ">
											Subscribe
										</button>
									</div>
								</div>

								<div className="mt-4">
									<p className="small text-white mb-1">
										lancercomposites@gmail.com
									</p>
									<p className="small text-white">+91253 2380783</p>
								</div>

								<div className="d-flex justify-content-center mt-4">
									<img src={i1} alt="" />
									<img className="ms-3" src={i3} alt="" />
									<img className="ms-3" src={i2} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mFooter py-3 mt-5 d-flex justify-content-end px-3">
					<NavLink className="lightGray text-decoration-none" to="">
						Privacy Policy
					</NavLink>
					<NavLink className="lightGray ms-4 text-decoration-none" to="">
						Sitemap
					</NavLink>
					<NavLink className="lightGray ms-4 text-decoration-none" to="">
						Copyright
					</NavLink>
				</div>
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default Feature;
