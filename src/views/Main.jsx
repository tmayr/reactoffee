const React = require("react");

const Main = React.createClass({
	getInitialState() {
		return {};
	},
	componentWillMount() {
		console.log("Hello server and client");
	},
	componentDidMount() {
		console.log("Hello client again");
	},
	render() {
		return (
			<div>
                <h1>Im the main tho</h1>
			</div>
		);
	}
});

export default Main;
