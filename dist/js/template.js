"use strict";

var News = React.createClass({ displayName: "News",
  render: function render() {
    return React.createElement("div", { className: "news" }, "К сожалению, новостей нет.");
  }
});

var Comments = React.createClass({ displayName: "Comments",
  render: function render() {
    return React.createElement("div", { className: "comments" }, "Нет новостей - комментировать нечего");
  }
});

var App = React.createClass({ displayName: "App",
  render: function render() {
    return React.createElement("div", { className: "app" }, "Всем привет, я компонент App! Я умею отображать новости.", React.createElement(News, null), React.createElement(Comments, null));
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementsByTagName('body')[0]);