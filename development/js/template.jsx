const Header = React.createClass({
    render: function() {
        return (
            <header className="flex-between">
                <div className="logo">
                    <div>Escimo</div>
                    <div className="flex-between"><p>ask</p><p>me</p><p>more</p></div>
                </div>
            </header>
        )
    }
})

const App = React.createClass({
    render: function() {
        return (<Header/>);
    }
});

ReactDOM.render(
    <App/>, document.getElementById('container'));
