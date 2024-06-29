import React, { Component } from 'react';

class FormApply extends Component {
    render() {
        return (
            <div className="flat-callback-form">
                <form id="contactform" method="post" action="./contact/contact-process2.php" noValidate="novalidate" >
                    <div className="flat-field">
                        <div className="field-one-half">
                            <label>How can we help? *</label>
                            <select name="discuss">
                            <option defaultValue="I would like to discuss:">I would like to discuss:</option>
                            <option defaultValue="I would like to discuss:">I would like to discuss:</option>
                            <option defaultValue="I would like to discuss:">I would like to discuss:</option>
                            </select>
                        </div>
                        {/* <!-- /.field-one-half --> */}
                        <div className="field-one-half field-email">
                            <input type="text" id="email" defaultValue="" name="email" placeholder="You Email" required="required" />
                        </div>
                        {/* <!-- /.field-one-half --> */}
                        <div className="clearfix"></div>
                    </div>
                    <div className="flat-field">
                        <div className="field-one-half field-phone">
                            <input type="text" id="phone" defaultValue="" name="phone" placeholder="You phone number" required="required" />
                        </div>
                        <div className="field-one-half field-submit">
                            <button type="submit" name="submit" className="button-submit-field">Submit Now</button>
                        </div>
                    </div>
                    {/* <!-- /.flat-field --> */}
                </form>
                {/* <!-- /.form --> */}
            </div>
            /* <!-- /.callback-form --> */
        );
    }
}

export default FormApply;