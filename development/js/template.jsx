const News = React.createClass({
  render: function() {
    return (
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
});

const Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
});

const App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementsByTagName('body')[0]
);
