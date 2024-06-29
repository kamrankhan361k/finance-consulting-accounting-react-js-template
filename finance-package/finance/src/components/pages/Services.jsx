import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../layouts/general';
import { MainServices } from '../layouts/general/services';
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Pages'
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Services Grid'
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
                    title: 'Services',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 3,
                    title: 'Services Grid',
                    classicon: '',
                    aria: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body3">
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
                                        <h1 className="h1-title">Services Grid</h1>
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

                    <MainServices />
                    
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Services;