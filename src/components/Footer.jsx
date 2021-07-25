import React from "react";
import { NavLink } from "react-router-dom";
import { SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {
	return (
		<div className="footer_container d-none d-md-block pt-4">
			<div className="page_container pb-4">
				<div className="container-fluid">
					<div className="upper_portion d-flex justify-content-between w-100">
						<div className="w-100">
							<ul className="list-unstyled">
								<li>
									<NavLink className="text-decoration-none" to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink className="text-decoration-none" to="/service">
										Services
									</NavLink>
								</li>
								<li>
									<NavLink className="text-decoration-none" to="/products">
										Products
									</NavLink>
								</li>
								<li>
									<NavLink className="text-decoration-none" to="/clients">
										Our Clients
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="d-flex flex-column align-items-end justify-content-between w-100">
							<div className="d-flex flex-column align-items-end justify-content-between w-100">
								<h5 className="mb-3">Sign up for our Newsletter</h5>
								<div className="inp_container">
									<input type="email" placeholder="Your email address" />
									<button className="border-0 text-white px-4">
										Subscribe
									</button>
								</div>
							</div>
							<div className="footer_icons d-flex align-items-center">
								<SiFacebook className="icon" fontSize="2.15rem" />
								<div className="sec_icon ms-2">
									<SiInstagram className="icon" fontSize="1.4rem" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bottom_footer py-3">
				<div className="page_container">
					<div className="container-fluid">
						<ul className="list-unstyled mb-0 w-100 d-flex justify-content-end">
							<li className="me-5 mb-0">Privacy policy</li>
							<li className="me-5 mb-0">Site map</li>
							<li className="mb-0">Copyright</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
