const React = require("react");
const Router = require('react-router');

const Header = require("./Header");
const GoogleMap = require('./GoogleMap');
const ShopsList = require('./ShopsList');

const App = React.createClass({
    getInitialState() {
        return {}
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
                <Header />
                <ShopsList />
                <GoogleMap />
                <Router.RouteHandler/>
            </div>
        );
    }
});

export default App;
