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
                    <div className="video-tags">
                        <div className="tags-and-more">
                            <div className="tags">
                                <a href="#">#easy</a>
                                <a href="#">#not_easy</a>
                                <a href="#">#hard</a>
                                <a href="#">
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="video-show-more">show more</div>
                        </div>
                        <div className="video-share">
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
                            Deciphering Marketing Lingo For Small Business Owners
                        </div>
                        <div className="video-comment">
                            mothermilk
                            <a href="#">@serpukin</a>
                            Enlightenment Is Not Just One State
                        </div>
                        <div className="video-comment">
                            serpukin
                            <a href="#">@mothermilk</a>
                            New Ideas For A Low Cost Vacation On Water
                        </div>
                    </div>
                    <div className="video-add-comment">
                        <a href="#">Add comment</a>
                        <div>0/500</div>
                    </div>
                    <div className="video-answwers">
                        <div className="video-box">
                            <iframe className="visible" width="729px" height="410px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div className="video-box">
                            <iframe className="visible" width="729px" height="410px" src="https://www.youtube.com/embed/0zyz0ktjUrI?controls=0" frameborder="0" allowfullscreen></iframe>
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

            <div className="rightcontent">
              <div className="simillar-questions">
                <h2>Simillar questions</h2>
                <div className="simillar-question">
                  <div className="thumb">
                    <img src="img/thumb.jpg" alt=""></img>
                  </div>
                  <div className="question-info">
                    <h3>Home Audio Recording For Everyone ?</h3>
                  </div>
                  <div class="views">123, 825 views</div>
                  <a href="#" className="author">
                    <img src="img/person.png" alt="" />
                    Jackson Garner
                  </a>
                </div>
                <div className="simillar-question">
                  <div className="thumb">
                    <img src="img/thumb.jpg" alt=""></img>
                  </div>
                  <div className="question-info">
                    <h3>Home Audio Recording For Everyone ?</h3>
                  </div>
                  <div class="views">123, 825 views</div>
                  <a href="#" className="author">
                    <img src="img/person.png" alt="" />
                    Jackson Garner
                  </a>
                </div>
                <div className="simillar-question">
                  <div className="thumb">
                    <img src="img/thumb.jpg" alt=""></img>
                  </div>
                  <div className="question-info">
                    <h3>Home Audio Recording For Everyone ?</h3>
                  </div>
                  <div class="views">123, 825 views</div>
                  <a href="#" className="author">
                    <img src="img/person.png" alt="" />
                    Jackson Garner
                  </a>
                </div>
                <div className="simillar-question">
                  <div className="thumb">
                    <img src="img/thumb.jpg" alt=""></img>
                  </div>
                  <div className="question-info">
                    <h3>Home Audio Recording For Everyone ?</h3>
                  </div>
                  <div class="views">123, 825 views</div>
                  <a href="#" className="author">
                    <img src="img/person.png" alt="" />
                    Jackson Garner
                  </a>
                </div>
                <div className="more-questions">More questions</div>
              </div>
            </div>

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

const Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container flex-between-center">
                    <div className="logo">
                        <div>Escimo</div>
                        <div className="flex-between">
                            <p>ask</p>
                            <p>me</p>
                            <p>more</p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About US</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div id="container" className="flex-column-center">
                <Header/>
                <Maincontent/>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementsByTagName('body')[0]);
