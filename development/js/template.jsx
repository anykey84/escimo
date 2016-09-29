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
});

let playlist = [
    {
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
    }
]

const Leftcontent = React.createClass({
    render: function() {
        return (

            <div className="leftcontent">
                <div className="video-playlist">
                    <div className="video-box">
                        <iframe className="visible" width="729px" height="410px" src="https://www.youtube.com/embed/An2jkWiVna8?controls=0" frameborder="0" allowfullscreen></iframe>
                        {/* <iframe width="729px" height="410px" src="https://www.youtube.com/embed/d_1s-e1wn6k?controls=0" frameborder="0" allowfullscreen></iframe>
                        <iframe width="729px" height="410px" src="https://www.youtube.com/embed/U_MXFP_kguA?controls=0" frameborder="0" allowfullscreen></iframe>*/}
                    </div>
                    <div className="video-title flex-between">
                        <div className="userpic">
                            <img src="img/person.png"/>
                        </div>
                        <div className="video-info">
                            <div className="title">How to make this desert ?</div>
                            <div className="name-and-views">
                              <a href="#">Semenovich</a>
                              <p>921, 000 views</p>
                            </div>
                        </div>
                        <button className="btn video-answer-button">Answer</button>
                    </div>
                    <div className="video-tags"></div>
                </div>
            </div>

        );
    }
});

const Rightcontent = React.createClass({
    render: function() {
        return (

            <div className="rightcontent"></div>

        );
    }
});

const Maincontent = React.createClass({
    render: function() {
        return (
            <div className="container maincontent">
                <Leftcontent/>
                <Rightcontent/>
            </div>
        );
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div id="container" className="flex-column-center">
                <Header/>
                <Maincontent/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementsByTagName('body')[0]);
