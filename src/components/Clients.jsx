import React from "react";

// IMPORTS
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.png";
import c4 from "../assets/clients/c4.png";
import c5 from "../assets/clients/c5.png";
import c6 from "../assets/clients/c6.png";
import c7 from "../assets/clients/c7.png";
import c8 from "../assets/clients/c8.png";

const Clients = () => {
	const data = [c1, c2, c3, c4, c5, c6, c7, c8];
	return (
		<div className="client_container mb-5">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="lightGray heading text-center mb-1">Our Clients</h2>

					<div className="client_inner d-flex flex-wrap align-items-center justify-content-center">
						{data.map((prev, i) => {
							return (
								<div className="client_card mt-4" key={i}>
									<img src={prev} alt="" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
