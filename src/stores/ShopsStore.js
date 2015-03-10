const React = require('react');
const Reflux = require('reflux');
const Actions = require('../actions/Actions');
const haversine = require('haversine');
const _ = require('underscore');

var shops = require('../fixtures/ShopsFixtures');

var mapCenter = {
    'latitude': -33.4367715,
    'longitude': -70.6276278
}

const ShopsStore = Reflux.createStore({
    listenables: [Actions],
    onSelectedShop(id){
        var selectedShop = _.find(shops, function(shop){ return shop.id == id });
        this.trigger({selectedShop});
    },
    onAcceptedGeolocation(data){
        mapCenter.latitude = data.lat;
        mapCenter.longitude = data.lng;

        this.trigger({
            me: {
                lat: data.lat,
                lng: data.lng
            },
            shops: this.updateShopsByDistance()
        });
    },
    updateShopsByDistance(){
        return _.sortBy(shops, function(shop){
            shop.distance = Math.ceil(haversine(mapCenter, {
                'latitude': shop.lat,
                'longitude': shop.lng
            }) * 1000);

            return shop.distance;
        }.bind(this));
    },
    getInitialState(){
        return {shops: this.updateShopsByDistance(), selectedShop: {}}
    }
});

export default ShopsStore;
