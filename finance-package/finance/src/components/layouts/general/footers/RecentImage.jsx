import React, { Component } from 'react';
class RecentImage extends Component {
    render() {
        return (
            <div className="widget widget-subscribe">
                <form id="subscribe-form" action="#" method="post" acceptCharset="utf-8" data-mailchimp="true">
                    <div id="subscribe-content">
                        <label htmlFor="form-email-footer">Email address:</label>
                        <div className="input-email">
                            <input type="email" name="email-form" id="subscribe-email" placeholder="Your email address" />
                        </div>
                        <button type="button" id="subscribe-button" className="button-subscribe">SUBMIT</button>
                    </div>
                    <div id="subscribe-msg"></div>
                </form>
            </div>
            /* <!-- /.widget-subscribe --> */
        );
    }
}

export default RecentImage;