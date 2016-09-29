"use strict";

var Header = React.createClass({ displayName: "Header",
    render: function render() {
        return React.createElement("header", { className: "flex-center" }, React.createElement("div", { className: "container flex-between-center" }, React.createElement("div", { className: "logo" }, React.createElement("div", null, "Escimo"), React.createElement("div", { className: "flex-between" }, React.createElement("p", null, "ask"), React.createElement("p", null, "me"), React.createElement("p", null, "more"))), React.createElement("form", { className: "search-or-ask", name: "search-or-ask" }, React.createElement("input", { type: "text", name: "ask", placeholder: "search or ask" }), React.createElement("input", { type: "submit", className: "btn", value: "Ask a Question" })), React.createElement("div", { className: "login-button" }, React.createElement("a", { href: "#" }, "Login"))));
    }
});

var playlist = [{
    name: 'video1',
    source: 'youtube',
    id: 'An2jkWiVna8'
}, {
    name: 'video2',
    source: 'youtube',
    id: 'd_1s-e1wn6k'
}, {
    name: 'video3',
    source: 'youtube',
    id: 'U_MXFP_kguA'
}];

var Leftcontent = React.createClass({ displayName: "Leftcontent",
    render: function render() {
        return React.createElement("div", { className: "leftcontent" }, React.createElement("div", { className: "video-playlist" }, React.createElement("div", { className: "video-box" }, React.createElement("iframe", { className: "visible", width: "729px", height: "410px", src: "https://www.youtube.com/embed/An2jkWiVna8?controls=0", frameborder: "0", allowfullscreen: true })
        /* <iframe width="729px" height="410px" src="https://www.youtube.com/embed/d_1s-e1wn6k?controls=0" frameborder="0" allowfullscreen></iframe>
        <iframe width="729px" height="410px" src="https://www.youtube.com/embed/U_MXFP_kguA?controls=0" frameborder="0" allowfullscreen></iframe>*/
        ), React.createElement("div", { className: "video-title flex-between" }, React.createElement("div", { className: "userpic" }, React.createElement("img", { src: "img/person.png" })), React.createElement("div", { className: "video-info" }, React.createElement("div", { className: "title" }, "How to make this desert ?"), React.createElement("div", { className: "name-and-views" }, React.createElement("a", { href: "#" }, "Semenovich"), React.createElement("p", null, "921, 000 views"))), React.createElement("button", { className: "btn video-answer-button" }, "Answer")), React.createElement("div", { className: "video-tags" })));
    }
});

var Rightcontent = React.createClass({ displayName: "Rightcontent",
    render: function render() {
        return React.createElement("div", { className: "rightcontent" });
    }
});

var Maincontent = React.createClass({ displayName: "Maincontent",
    render: function render() {
        return React.createElement("div", { className: "container maincontent" }, React.createElement(Leftcontent, null), React.createElement(Rightcontent, null));
    }
});

var App = React.createClass({ displayName: "App",
    render: function render() {
        return React.createElement("div", { id: "container", className: "flex-column-center" }, React.createElement(Header, null), React.createElement(Maincontent, null));
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementsByTagName('body')[0]);