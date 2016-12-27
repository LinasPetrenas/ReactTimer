var React = require('react');
var Navigation = require('app/components/Navigation.jsx');

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Navigation/>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
