import React from "react";

// IMPORTS
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header_container my-3">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="d-flex align-items-center">
							<ul className="list-unstyled d-flex">
								<li>
									<NavLink
										activeClassName="active_nav"
										className="text-decoration-none text-white text-uppercase"
										to="/"
									>
										Home
									</NavLink>
								</li>
								<li className="ms-4">
									<NavLink
										activeClassName="active_nav"
										className="text-decoration-none text-white text-uppercase"
										to="/services"
									>
										Services
									</NavLink>
								</li>
								<li className="ms-4">
									<NavLink
										activeClassName="active_nav"
										className="text-decoration-none text-white text-uppercase"
										to="/products"
									>
										Products
									</NavLink>
								</li>
							</ul>
							<div className="right_side d-flex flex-column align-items-end">
								<div className="free_schedule rounded-3 px-2 py-2 d-flex flex-column align-items-end text-white">
									<p className="mb-0">Schedule a free consultation</p>
									<h6 className="mb-0">
										<a
											href="tel:+912532383483"
											className="text-decoration-none text-white d-flex align-items-center"
										>
											<img
												className="phone_icon me-1"
												src={phone}
												alt="phone"
											/>
											+91 253 - 2383483
										</a>
									</h6>
								</div>
								<GiHamburgerMenu fontSize="2rem" color="#fff" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
