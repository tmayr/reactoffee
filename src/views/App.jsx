const React = require("react");
const Router = require('react-router');

const Actions = require('../actions/Actions');

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
        Actions.acceptedGeolocation({
            geolocation_enabled: true,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    },
    handleDeniedGeolocation(){},
    render() {
        return (
            <div>
                <Header />
                <ShopsList {...this.state} />
                <GoogleMap />
                <Router.RouteHandler/>
            </div>
        );
    }
});

export default App;
