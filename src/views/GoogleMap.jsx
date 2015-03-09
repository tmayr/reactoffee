const React = require("react");
const Reflux = require("reflux");
const {GoogleMapsMixin, Map, Marker} = require("react-google-maps");

const ShopsStore = require('../stores/ShopsStore');

function generateMarker(shop, index){
    return (
        <Marker key={'shop-marker-' + shop.id}
                position={{
                    lat: parseFloat(shop.lat),
                    lng: parseFloat(shop.lng),
                }}
            />
    )
}

const GoogleMap = React.createClass({
    mixins: [GoogleMapsMixin, Reflux.connect(ShopsStore)],
    componentDidMount(){
        this.refs.map.panBy(-3000, 0);
    },
    render() {
        return (
            <div>
                <Map
                    className="map"
                    ref="map"
                    center={new google.maps.LatLng(-33.4367715, -70.6276278)}
                    zoom={14}
                />
                {this.state.shops.map(generateMarker, this)}
            </div>
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
