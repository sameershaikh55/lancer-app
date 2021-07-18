// IMPORTING CSS
import "./style/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";

// IMPORTING PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
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
