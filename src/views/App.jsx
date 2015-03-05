const React = require("react");
const Router = require('react-router');
const Reflux = require('reflux');

const ShopsStore = require('../stores/ShopsStore');
const ShopsActions = require('../actions/ShopsActions');

const Header = require("./Header");
const GoogleMap = require('./GoogleMap');
const ShopsList = require('./ShopsList');


const App = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getInitialState() {
        return {}
    },
    componentWillMount() {
        console.log("Hello server and client");
    },
    componentDidMount() {
        console.log("Hello client again");
        ShopsActions.receiveItems()
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
