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

const Feature = () => {
	const data = [f1, f4];
	const data1 = [f3, f2, f5, f6, f7, f8];
	return (
		<div className="feature_container my-5">
			<div className="page_container">
				<div className="container-fluid">
					<h2 className="lightGray heading text-center mb-5">Featured</h2>

					{/* <!-- Gallery --> */}
					<div class="gallery">
						<div className="gallery_inner1">
							<div className="left">
								{data.map((p, i) => {
									return (
										<div key={i} class="gallery-item">
											<img src={p} class="w-100" alt="" />
										</div>
									);
								})}
							</div>
						</div>
						<div className="gallery_inner2">
							<div className="right">
								{data1.map((p, i) => {
									return (
										<div key={i} class="gallery-item">
											<img src={p} class="w-100" alt="" />
										</div>
									);
								})}
							</div>
						</div>
					</div>
					{/* <!-- Gallery --> */}
				</div>
			</div>
		</div>
	);
};

export default Feature;
