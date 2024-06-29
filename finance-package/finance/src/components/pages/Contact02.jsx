import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";

class Contact02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Blog',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Contact 02'
                }
            ],
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Home',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 2,
                    title: 'Contact',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 3,
                    title: 'Contact 02',
                    classicon: '',
                    aria: ''
                }
            ],
            contactinfo: [
                {
                    id: '1',
                    title: 'Address',
                    info:'PO Box 16122 Collins Street West,Victoria 8007 Australia'
                },
                {
                    id: '2',
                    title: 'Phone number',
                    info:'Call us: 190 140 2468'
                },
                {
                    id: '3',
                    title: 'E-mail address',
                    info:'support@themesflat.com'
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body">
                <div className="boxed">
                <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }

                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        {
                                            this.state.titleheading.map(data =>(
                                                <h1 key={data.id} className="h1-title">{data.title}</h1>
                                            ))
                                        }       
                                    </div>
                                    <ul className="breadcrumbs">
                                        {
                                            this.state.breadcrumbs.map(data =>(
                                                <li key={data.id} ><Link to="#" title="">{data.title}<i className={data.classicon} aria-hidden={data.aria}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="flat-row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-section center s1 pd-title-section">
                                        <h2>GET IN TOUCH WITH US</h2>
                                        <p className="sub-title-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nibh scelerisque lacus accumsan vestibulum.<br />Phasellus sed porttitor neque. Cras mi ante, mollis sed nisl sed.</p>
                                    </div>
                                    <div className="dividers dividers-imagebox v1"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flat-row pdmap">
                        <div className="flat-maps" data-address="Thành phố New York, Tiểu bang New York" data-height="454" data-images="images/map/map-1.png" data-name="Themesflat Map"></div>
                        <div className="gm-map">	            
                            <div className="map"></div>                        
                        </div>
	                </section>
                    <section className="flat-row pd-contact-v1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        {
                                            this.state.contactinfo.map(data =>(
                                                <div className="info info-address" key={data.id} >
                                                    <div className="title">{data.title}</div>
                                                    <p>{data.info}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div> 

                                <div className="col-md-8">
                                    <div className="flat-form-info">
                                        <form id="contactform"  method="post" action="./contact/contact-process.php" noValidate="novalidate" className="form-info">
                                            <div className="one-half v3">
                                                <p className="input-info"><input type="text" name="name" id="name"  placeholder="Name" required="required" /></p>
                                                <p className="input-info"><input type="email" name="email" id="email"  placeholder="Email" required="required" /></p>
                                                <p className="input-info"><input type="text" name="subject" id="subject"  placeholder="Subject" required="required" /></p>
                                                <p className="input-info"><button type="submit" className="submit">Send Message</button></p>
                                            </div>
                                            <div className="one-half v4">
                                                <p className="input-info"><textarea id="message-contact" name="message" placeholder="Message" required="required"></textarea></p>
                                            </div>
                                        </form>
                                    </div>
                                </div> 

                            </div>
                        </div>
			        </section>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Contact02;