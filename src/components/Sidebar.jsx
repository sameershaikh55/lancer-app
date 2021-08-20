import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				left: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="logo">
				<NavLink to="/">
					<img src={logo} alt="logo" />
				</NavLink>
			</div>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul>
				<li>
					<NavLink
						exact
						to="/"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/services"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/products"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Products
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
