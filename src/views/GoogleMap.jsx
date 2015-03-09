const React = require("react");
const Reflux = require("reflux");

const ShopsStore = require('../stores/ShopsStore');

function toMarker(){
    this.state.shops.map(function(shop){
        if(!shop.marker){
            shop.marker = new google.maps.Marker({
                map:this.state.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(shop.lat, shop.lng)
            });
        }
    }.bind(this))
}

const GoogleMap = React.createClass({
    mixins: [Reflux.connect(ShopsStore)],
    getInitialState(){
        return {
            map: false,
            me: false
        }
    },
    componentWillUpdate(){
        if(this.state.selectedShop.marker)
            this.state.selectedShop.marker.setAnimation(null);
    },
    componentDidUpdate(){
        toMarker.apply(this);

        if(this.state.selectedShop.marker)
            this.state.selectedShop.marker.setAnimation(google.maps.Animation.BOUNCE);
    },
    componentDidMount(){
        var lat = -33.43;
        var lng = -70.62;

        var centerPoint = new google.maps.LatLng(lat, lng);

        var mapOptions = {
            center: centerPoint,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        };

        this.setState({map: new google.maps.Map(document.getElementById('map'), mapOptions)});
    },
    render() {
        return (
            <div className="map-container">
                <div id="map"></div>
            </div>
        )
    }
});

export default GoogleMap;
