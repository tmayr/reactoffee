const React = require("react");
const {Route, DefaultRoute} = require("react-router");
const Main = require("./Main");
const App = require("./App");


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
