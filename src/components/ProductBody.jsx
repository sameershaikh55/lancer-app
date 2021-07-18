import React from "react";

// IMPORTS
import p1 from "../assets/products/p1.png";
import p2 from "../assets/products/p2.png";
import p3 from "../assets/products/p3.png";
import p4 from "../assets/products/p4.png";

const ProductBody = () => {
	return (
		<div className="products_container my-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						{/* FIRST START */}
						<div className="col-6 position-relative">
							<img
								data-aos="fade-right"
								data-aos-anchor-placement="bottom"
								data-aos-offset="600"
								className="w-100"
								src={p1}
								alt="p1"
							/>
						</div>
						<div className="col-6 align-self-center text-center">
							<h6>LIGHTING</h6>
							<div className="w-50 mx-auto my-3">
								<p className="small">
									Our incredible breadth of on-trend products is designed for
									confident decorating with collections that carry a consistent
									look throughout a home, inside and out.
								</p>
							</div>
							<button className="px-5 py-1">Explore</button>
						</div>
						{/* FIRST END */}

						{/* SECOND START */}
						<div className="col-5 align-self-center text-center">
							<h6>OUTDOOR LIVING</h6>
							<div className="w-50 mx-auto my-3">
								<p className="small">
									Principled on design, comfort & quality. These collections set
									a new standard for outdoor living.
								</p>
							</div>
							<button className="px-5 py-1">Explore</button>
						</div>
						<div className="col-7">
							<img
								data-aos="fade-left"
								data-aos-anchor-placement="bottom"
								data-aos-offset="600"
								className="w-100"
								src={p2}
								alt="p1"
							/>
						</div>
						{/* SECOND END */}

						{/* THIRD START */}
						<div className="col-6">
							<img
								data-aos="fade-right"
								data-aos-anchor-placement="bottom"
								data-aos-offset="1000"
								className="w-100"
								src={p3}
								alt="p3"
							/>
						</div>
						<div className="col-6 align-self-center text-center">
							<h6>VANITY COUNTERS & MIRROR FRAMES</h6>
							<div className="w-50 mx-auto my-3">
								<p className="small">
									Our latest range of vanity counters and high detail mirror
									frames can elevate the look and feel of any powder room or
									washroom.
								</p>
							</div>
							<button className="px-5 py-1">Explore</button>
						</div>
						{/* THIRD END */}

						{/* THIRD START */}
						<div className="col-5 align-self-center text-center">
							<h6>CUSTOM PROJECTS</h6>
							<div className="w-50 mx-auto my-3">
								<p className="small">
									Our creative team work closely with our clients to understand
									their specific need. This is what drives the design process of
									the perfect space.
								</p>
							</div>
							<button className="px-5 py-1">Explore</button>
						</div>
						<div className="col-7">
							<img
								data-aos="fade-left"
								data-aos-anchor-placement="bottom"
								data-aos-offset="1500"
								className="w-100"
								src={p4}
								alt="p4"
							/>
						</div>
						{/* THIRD END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductBody;
