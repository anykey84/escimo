const Header = React.createClass({
    render: function() {
        return (
            <header className="flex-center">
                <div className="container flex-between-center">
                    <div className="logo">
                        <div>Escimo</div>
                        <div className="flex-between">
                            <p>ask</p>
                            <p>me</p>
                            <p>more</p>
                        </div>
                    </div>
                    <form className="search-or-ask" name="search-or-ask">
                        <input type="text" name="ask" placeholder="search or ask"/>
                        <input type="submit" className="btn" value="Ask a Question"/>
                    </form>
                    <div className="login-button">
                        <a href="#">Login</a>
                    </div>
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
