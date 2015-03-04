const React = require("react");
const {GoogleMapsMixin, Map, Marker} = require("react-google-maps");

const GoogleMap = React.createClass({
    mixins: [GoogleMapsMixin],
    getInitialState() {
        return {
          markers: [],
        }
    },
    render() {
        return (
            <Map
                className="map"
                ref="map"
                center={new google.maps.LatLng(-33.4367715, -70.6276278)}
                zoom={14}
            />
        )
    }
});

const GoogleMapContainer = React.createClass({
    getInitialState(){
        return {
            gmaps: false
        }
    },
    componentDidMount() {
        const map = <GoogleMap googleMapsApi={google.maps} />;
        this.setState({gmaps: map});
    },
    render () {
        return this.state.gmaps;
    }
})

export default GoogleMapContainer;
