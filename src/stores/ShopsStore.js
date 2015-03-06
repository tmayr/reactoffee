const React = require('react');
const Reflux = require('reflux');
const Actions = require('../actions/Actions');

var shops = require('../fixtures/ShopsFixtures');

const ShopsStore = Reflux.createStore({
    listenables: [Actions],
    onReceiveItems(){
        console.log('onReceiveItems triggered')
    },

    getInitialState(){
        return {shops}
    }
});

export default ShopsStore;
