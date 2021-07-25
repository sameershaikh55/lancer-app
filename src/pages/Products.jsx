import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBody from "../components/ProductBody";
import ScrollToTop from "../components/ScrollToTop";
import { useHooks } from "../Hooks/useHooks";
import Sidebar from "../components/Sidebar";

const Products = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<div>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<ScrollToTop />
			<Header products ClickEvent={OnClick} />
			<ProductBody />
			<Footer />
		</div>
	);
};

export default Products;
