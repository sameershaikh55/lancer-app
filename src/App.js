import { useEffect } from "react";

// IMPORTING CSS
import "./style/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import "aos/dist/aos.css";

// IMPORTING PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";

// IMPORTING ANIMATIONS
import AOS from "aos";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
			</Switch>
		</>
	);
}

export default App;
