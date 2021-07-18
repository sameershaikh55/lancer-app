import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBody from "../components/ProductBody";
import ScrollToTop from "../components/ScrollToTop";



const Products = () => {
	return (
		<div>
			<ScrollToTop />
			<Header products />
			<ProductBody />
			<Footer />
		</div>
	);
};

export default Products;
