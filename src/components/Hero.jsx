import React from "react";

const hero = () => {
	return (
		<div className="hero_section position-relative">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="main_head position-absolute text-white">
						Outdoors & Beyond
					</h1>

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
				</div>
			</div>
		</div>
	);
};

export default hero;
