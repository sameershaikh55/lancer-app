import React from "react";

// IMPORTS
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import phoneD from "../assets/phoneDark.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = ({ products }) => {
	return (
		<div
			style={{ position: products && "static" }}
			className="header_container my-3"
		>
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo">
							<NavLink to="/">
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
						<div className="d-flex align-items-center">
							<ul className="list-unstyled d-flex">
								<li>
									<NavLink
										exact
										activeClassName="active_nav"
										className={`text-decoration-none text-uppercase ${
											(products && "text-dark") || "text-white"
										}`}
										to="/"
									>
										Home
									</NavLink>
								</li>
								<li className="ms-4">
									<NavLink
										exact
										activeClassName="active_nav"
										className={`text-decoration-none text-uppercase ${
											(products && "text-dark") || "text-white"
										}`}
										to="/services"
									>
										Services
									</NavLink>
								</li>
								<li className="ms-4">
									<NavLink
										exact
										activeClassName="active_nav"
										className={`text-decoration-none text-uppercase ${
											(products && "text-dark") || "text-white"
										}`}
										to="/products"
									>
										Products
									</NavLink>
								</li>
							</ul>
							<div className="right_side d-flex flex-column align-items-end">
								<div
									style={{
										backgroundColor:
											(products && "#ecf3f3") || "rgba(6, 43, 70, 0.5)",
									}}
									className="free_schedule rounded-3 px-2 py-2 d-flex flex-column align-items-end text-white"
								>
									<p
										style={{ color: (products && "#6c6c6c") || "#fff" }}
										className="mb-0"
									>
										Schedule a free consultation
									</p>
									<h6 className="mb-0">
										<a
											style={{ color: (products && "#6c6c6c") || "#fff" }}
											href="tel:+912532383483"
											className="text-decoration-none d-flex align-items-center"
										>
											{(products && (
												<img
													className="phone_icon me-1"
													src={phoneD}
													alt="phone"
												/>
											)) || (
												<img
													className="phone_icon me-1"
													src={phone}
													alt="phone"
												/>
											)}
											+91 253 - 2383483
										</a>
									</h6>
								</div>
								<GiHamburgerMenu
									className="pointer"
									fontSize="2rem"
									color={`${(products && "#6c6c6c") || "#fff"}`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
