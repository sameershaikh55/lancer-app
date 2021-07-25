import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Clients from "../components/Clients";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
	return (
		<>
			<ScrollToTop />
			<div className="d-none d-md-block">
				<Hero />
				<Header />
			</div>
			<div className="d-block d-md-none">
				<Header />
				<Hero />
			</div>
			<Service />
			<Feature />
			<Clients />
			<Footer />
		</>
	);
};

export default Home;
