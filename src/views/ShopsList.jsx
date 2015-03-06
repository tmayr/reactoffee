const React = require('react');

export default React.createClass({
    render(){
        console.log(this.props)
        return (
            <ul className="shops-list">
                {this.props.shops.map(function(shop){
                        return (
                            <li>{shop.name}</li>
                        )
                    })
                }
            </ul>
        )
    }
})
