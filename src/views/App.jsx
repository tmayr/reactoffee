const React = require("react");
const Router = require('react-router');

const Header = require("./Header");
const GoogleMap = require('./GoogleMap');
const ShopsList = require('./ShopsList');

const App = React.createClass({
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
