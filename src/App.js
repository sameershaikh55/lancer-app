// IMPORTING CSS
import "./style/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";

// IMPORTING PAGES
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
