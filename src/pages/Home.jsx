import React from "react";
import Feature from "../components/Feature";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";

const Home = () => {
	return (
		<>
			<Hero />
			<Header />
			<Service />
			<Feature />
		</>
	);
};

export default Home;
