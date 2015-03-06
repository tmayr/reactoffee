const React = require('react');
const Reflux = require('reflux');

const ShopsStore = require('../stores/ShopsStore');

const ListItem = React.createClass({
    render(){
        var shop = this.props.shop;
        return <li>{shop.name} - {shop.distance}m</li>
    }
})

export default React.createClass({
    mixins: [Reflux.connect(ShopsStore)],
    render(){
        return (
            <ul className="shops-list">
                {this.state.shops.map(function(shop){
                    return <ListItem shop={shop}/>
                })}
            </ul>
        )
    }
})
