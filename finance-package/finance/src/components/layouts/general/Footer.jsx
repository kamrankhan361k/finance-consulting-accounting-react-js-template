import React, { Component } from 'react';
import BottomBar from './BottomBar';
import { UsefulLink, RecentImage, TopFooter,TextMainFooter } from './footers/index';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
            <footer id="footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <TopFooter />
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                        <div className="row widget-box">
                            <div className="col-md-4">
                                <TextMainFooter />
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                            <div className="col-md-4">
                                <UsefulLink />
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                            <div className="col-md-4">
                                <RecentImage />
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                        </div>
                        {/* <!-- /.row .widget-box --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.footer-widgets --> */}
                <BottomBar />
                {/* footer-bottom  */}
            </footer>
            <div className="button-go-top">
                <Link to="#" title="" className="go-top">
                    <i className="fa fa-chevron-up"></i>
                </Link>
		    </div>
            </div>
            // <!-- /#footer -->
        );
    }
}

export default Footer;