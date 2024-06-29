import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopBar extends Component {
    render() {
        return (
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="flat-infomation">
                                <li className="phone">Call us: <Link to="+61383766284" title="phone">+61 3 8376 6284</Link></li>
                                <li className="email">Email: <Link to="mailto:support24-7@gmail.com" title="email">support24-7@gmail.com</Link></li>
                            </ul>
                            <div className="flat-questions">
                                <Link to="#" title="" className="questions">Have any questions?</Link>
                                <Link to="#" title="" className="appointment">GET AN APPOINTMENT</Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
		    </div>
        );
    }
}

export default TopBar;