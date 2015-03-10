const React = require('react');
const Reflux = require('reflux');

const ShopsStore = require('../stores/ShopsStore');
const Actions = require('../actions/Actions');

const ListItem = React.createClass({
    render(){
        var shop = this.props.shop;
        return (
            <li onClick={Actions.selectedShop.bind(this, shop.id)}>
                <div className="shop-list-picture" style={{backgroundImage: 'url('+shop.image_url+')'}}>
                    <a href={shop.image_url} target="_blank">
                        o
                    </a>
                </div>
                <div className="shop-list-meta">
                    <span className="shop-list-name">{shop.name}</span>
                    <span className="shop-list-address">{shop.address}</span>
                    <span className="shop-list-distance"><i className="fa fa-walk"></i>{shop.distance}m</span>
                </div>
            </li>
        );
    }
})

export default React.createClass({
    mixins: [Reflux.connect(ShopsStore)],
    render(){
        return (
            <ul className="shops-list">
                {this.state.shops.map(function(shop){
                    return <ListItem key={'shop-id-'+shop.id} shop={shop}/>
                })}
            </ul>
        )
    }
})
