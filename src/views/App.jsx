const React = require("react");
const Router = require('react-router');
const Reflux = require('reflux');

const ShopsStore = require('../stores/ShopsStore');
const Actions = require('../actions/Actions');

const Header = require("./Header");
const GoogleMap = require('./GoogleMap');
const ShopsList = require('./ShopsList');

const App = React.createClass({
    mixins: [Reflux.connect(ShopsStore)],
    render() {
        console.log(this.state)
        return (
            <div>
                <Header />
                <ShopsList shops={this.state.shops} />
                <GoogleMap />
                <Router.RouteHandler/>
            </div>
        );
    }
});

export default App;
