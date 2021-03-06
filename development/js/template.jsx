const Header = React.createClass({
    render: function() {
        return (
            <div className="container">
                <header className="row">
                    <div className="logo col-md-2">
                        <div>Escimo</div>
                        <div>
                            <p>ask</p>
                            <p>me</p>
                            <p>more</p>
                        </div>
                    </div>
                    <form className="search-or-ask col-md-6" name="search-or-ask">
                        <input type="text" name="ask" placeholder="search or ask"/>
                        <input type="submit" className="btn" value="Ask a Question"/>
                    </form>
                    <div className="login-button col-md-4">
                        <a href="#">Login</a>
                    </div>
                </header>
            </div>
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

            <div className="leftcontent col-md-8">
                <div className="video-playlist">
                    <div className="video-box">
                        <iframe className="visible" width="729px" height="410px" src="https://www.youtube.com/embed/An2jkWiVna8?controls=0" frameborder="0" allowfullscreen></iframe>
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
                        <div className="video-tags row">
                            <div className="tags-and-more pull-left">
                                <div className="tags">
                                    <a href="#">#easy</a>
                                    <a href="#">#not_easy</a>
                                    <a href="#">#hard</a>
                                    <a href="#">
                                        <img src="img/plus-circle.png" />
                                    </a>
                                </div>
                                <a href="#"><div className="video-show-more">show more</div></a>
                            </div>
                            <div className="video-share pull-right">
                                <a href="#">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>Share</a>
                                <a href="#">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>2,5 k</a>
                            </div>
                        </div>
                        <div className="video-comments">
                            <a href="#">view all 18 comments</a>
                            <div className="video-comment">
                                serpukin
                                <a href="#">#easy</a>
                                <p>Deciphering Marketing Lingo For Small Business Owners</p>
                            </div>
                            <div className="video-comment">
                                mothermilk
                                <a href="#">@serpukin</a>
                                <p>Enlightenment Is Not Just One State</p>
                            </div>
                            <div className="video-comment">
                                serpukin
                                <a href="#">@mothermilk</a>
                                <p>New Ideas For A Low Cost Vacation On Water</p>
                            </div>
                            <div className="video-add-comment row">
                                <a href="#" className="pull-left">Add comment</a>
                                <div className="pull-right">0/500</div>
                            </div>
                        </div>

                    </div>

                    <div className="video-answwers row">
                        <div className="video-box col-md-6">
                            <iframe className="visible" width="100%" height="400px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div className="video-box col-md-6">
                            <iframe className="visible" width="100%" height="400px" src="https://www.youtube.com/embed/0zyz0ktjUrI?controls=0" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

const Rightcontent = React.createClass({
    render: function() {
        return (

            <div className="rightcontent col-md-4">
                <div className="simillar-questions">
                    <h2>Simillar questions</h2>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <a href="#" className="more-questions">More questions</a>
                </div>
            </div>

        );
    }
});

const Maincontent = React.createClass({
    render: function() {
        return (
            <div className="container maincontent uk-grid data-uk-grid-margin">
                <Leftcontent/>
                <Rightcontent/>
            </div>
        );
    }
});

const Footer = React.createClass({
    render: function() {
        return (
            <footer className="container">
                <div className="row">
                  <div className="logo col-md-2">
                      <div>Escimo</div>
                      <div>
                          <p>ask</p>
                          <p>me</p>
                          <p>more</p>
                      </div>
                  </div>
                    <ul className="bottom-menu col-md-6">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About US</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                    <div className="copyright col-md-4 pull-right">Copyright © 2016, Escimo. All rights reserved.</div>
                </div>

            </footer>
        )
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <hr/>
                <Maincontent/>
                <hr/>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementsByTagName('body')[0]);
