import React from "react";

// IMPORTS
import s1 from "../assets/service/s1.png";
import s2 from "../assets/service/s2.png";
import s3 from "../assets/service/s3.png";
import castle from "../assets/service/castle.png";
import Fade from "react-reveal/Fade";

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
		<div className="service_container my-5">
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
												<img className="mt-4 mb-5" src={i} alt="" />
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
	);
};

export default Service;
