const React = require("react");
const Router = require('react-router');

const Actions = require('../actions/actions');

const Header = require("./Header");
const GoogleMap = require('./GoogleMap');
const ShopsList = require('./ShopsList');

const App = React.createClass({
    getInitialState(){
        return {
            geolocation_enabled: false
        }
    },
    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                this.handleAcceptedGeolocation,
                this.handleDeniedGeolocation
            );
        }
    },
    handleAcceptedGeolocation(position){
        this.setState({
            geolocation_enabled: true,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });

        Actions.acceptedGeolocation(this.state);
    },
    handleDeniedGeolocation(){},
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
