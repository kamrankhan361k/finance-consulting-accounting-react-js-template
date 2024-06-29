import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UsefulLink extends Component {
    render() {
        return (
            <div className="widget widget-services">
                <ul className="one-half first">
                    <li><Link to="/about-v1" onClick={() => {window.location.href="/about-v1"}} title="">About Us</Link></li>
                    <li><Link to="/about-v2" onClick={() => {window.location.href="/about-v2"}} title="">Team Grid</Link></li>
                    <li><Link to="/about-v3" onClick={() => {window.location.href="/about-v3"}} title="">OverView</Link></li>
                    <li><Link to="/services-v1" onClick={() => {window.location.href="/services-v1"}} title="">Services</Link></li>
                    <li><Link to="/services-v2" onClick={() => {window.location.href="/services-v2"}} title="">Risk Management</Link></li>
                    <li><Link to="/portfolio-v1" onClick={() => {window.location.href="/portfolio-v1"}} title="">Portfolio</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
                <ul className="one-half">
                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                    <li><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">Blog</Link></li>
                    <li><Link to="blog-grid" onClick={() => {window.location.href="/blog-grid"}} title="">Blog Grid</Link></li>
                    <li><Link to="/contact-v1" onClick={() => {window.location.href="/contact-v1"}} title="">Contact 01</Link></li>
                    <li><Link to="/contact-v2" onClick={() => {window.location.href="/contact-v2"}} title="">Contact 02</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
            </div>
        /* <!-- /.widget-services --> */
        );
    }
}

export default UsefulLink;