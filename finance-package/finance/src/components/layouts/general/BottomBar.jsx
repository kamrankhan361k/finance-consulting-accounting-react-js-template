import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class BottomBar extends Component {
    render() {
        return (
            <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Copyright 2021 Finance. Theme by <Link to="#" title="">Themesflat</Link></p>
                                </div>
                                <ul className="menu-footer">
                                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                                    <li><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">My Blog</Link></li>
                                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">My Home</Link></li>
                                    <li><Link to="#" title="">Sample Page</Link></li>
                                </ul>
                                {/* <!-- /.menu-footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
                /* <!-- /.footer-bottom --> */
        );
    }
}

export default BottomBar;