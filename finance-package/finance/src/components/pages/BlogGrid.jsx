import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";
import { SingleBlogComponent } from '../layouts/blog';
class BlogGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Blog Gird',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Blog Gird'
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
                    title: 'Blog Gird',
                    classicon: '',
                    aria: ''
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
                <SingleBlogComponent />
                <Footer />
                </div>
            </div>
            
        );
    }
}

export default BlogGrid;