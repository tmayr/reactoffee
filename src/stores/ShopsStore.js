const React = require('react');
const Reflux = require('reflux');
const ShopsActions = require('../actions/ShopsActions');

const ShopsStore = Reflux.createStore({
    listenables: [ShopsActions],
    onReceiveItems: function(){
        console.log('wat')
        alert('recieved items bro')
    }
});

export default ShopsStore;
