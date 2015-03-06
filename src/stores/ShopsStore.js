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
    onReceiveItems(){},
    getInitialState(){
        var shopsByDistance = _.sortBy(shops, function(shop){
            shop.distance = haversine(mapCenter, {
                'latitude': shop.lat,
                'longitude': shop.lng
            }, {unit: 'm'});

            return shop.distance;
        });

        return {shops: shopsByDistance}
    }
});

export default ShopsStore;
