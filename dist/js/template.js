"use strict";

var Header = React.createClass({ displayName: "Header",
    render: function render() {
        return React.createElement("header", { className: "flex-between" }, React.createElement("div", { className: "logo" }, React.createElement("div", null, "Escimo"), React.createElement("div", { className: "flex-between" }, React.createElement("p", null, "ask"), React.createElement("p", null, "me"), React.createElement("p", null, "more"))));
    }
});

var App = React.createClass({ displayName: "App",
    render: function render() {
        return React.createElement(Header, null);
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));