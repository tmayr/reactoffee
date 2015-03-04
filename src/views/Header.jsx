const React = require('react');

export default React.createClass({
    render() {
        return (
            <header>
                <section className="header-logo"></section>
                <nav className="header-nav">
                    <a href="">Latest Additions</a>
                    <a href="">My Location</a>
                </nav>
            </header>
        )
    }
});
