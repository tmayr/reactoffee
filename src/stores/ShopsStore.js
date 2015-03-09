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
    onSelectedItem(id){
        var selectedShop = _.first(shops, function(shop){ return shop.id == id });
        this.trigger({selectedShop: selectedShop})
    },
    onAcceptedGeolocation(data){
        mapCenter.latitude = data.lat;
        mapCenter.longitude = data.lng;

        this.trigger({shops: this.updateShopsByDistance()});
    },
    updateShopsByDistance(){
        return _.sortBy(shops, function(shop){
            shop.distance = haversine(mapCenter, {
                'latitude': shop.lat,
                'longitude': shop.lng
            }, {unit: 'm'});

            return shop.distance;
        });
    },
    getInitialState(){
        return {shops: this.updateShopsByDistance()}
    }
});

export default ShopsStore;
