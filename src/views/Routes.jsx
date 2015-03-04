const React = require("react");
const Router = require("react-router");
const Main = require("./Main");
const App = require("./App");

const {Route, DefaultRoute} = Router;

/**
 * The React Routes for both the server and the client.
 *
 * @type {ReactElement}
 * @module Routes
 */
const Routes = (
	<Route path="/" handler={App}>
		<DefaultRoute handler={Main} />
	</Route>
);

export default Routes;
