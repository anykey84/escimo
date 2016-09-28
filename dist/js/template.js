"use strict";

var Header = React.createClass({ displayName: "Header",
    render: function render() {
        return React.createElement("header", { className: "flex-center" }, React.createElement("div", { className: "container flex-between-center" }, React.createElement("div", { className: "logo" }, React.createElement("div", null, "Escimo"), React.createElement("div", { className: "flex-between" }, React.createElement("p", null, "ask"), React.createElement("p", null, "me"), React.createElement("p", null, "more"))), React.createElement("form", { className: "search-or-ask", name: "search-or-ask" }, React.createElement("input", { type: "text", name: "ask", placeholder: "search or ask" }), React.createElement("input", { type: "submit", className: "btn", value: "Ask a Question" })), React.createElement("div", { className: "login-button" }, React.createElement("a", { href: "#" }, "Login"))));
    }
});

var Maincontent = React.createClass({ displayName: "Maincontent",
    render: function render() {
        return React.createElement("div", { className: "container maincontent" });
    }
});

var App = React.createClass({ displayName: "App",
    render: function render() {
        return React.createElement("div", { id: "container" }, React.createElement(Header, null), React.createElement(Maincontent, null));
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementsByTagName('body')[0]);