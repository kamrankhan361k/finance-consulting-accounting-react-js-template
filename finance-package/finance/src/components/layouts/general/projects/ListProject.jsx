import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class ListProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProject: [
                {
                    id: 1,
                    srcimg: 'images/stage/image-01.png',
                    title: 'event finder',
                    category: 'Invoicing',
                },
                {
                    id: 2,
                    srcimg: 'images/stage/image-02.png',
                    title: 'business solutions',
                    category: 'Services / ',
                    subcategory: 'Trading',
                },
                {
                    id: 3,
                    srcimg: 'images/stage/image-03.png',
                    title: 'money market',
                    category: 'Services / ',
                    subcategory: 'Trading',
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="iconbox-slider">
                        <ul className="slides" data-item="3" data-nav="false" data-dots="false" data-auto="true">
                            {
                                this.state.dataProject.map(data => (
                                    <li className="item" key={data.id}>
                                        <div className="featured-post">
                                            <img src={data.srcimg} alt="" />
                                                <Link to={data.srcimg}><i className="fa fa-arrows-alt"></i></Link>
                                        </div>
                                        <div className="title-post">
                                            <Link to="/blog" onClick={() => {window.location.href="/blog"}}>{data.title}</Link>
                                        </div>
                                        <div className="category-post">
                                            <Link to="/portfolio-v3" onClick={() => {window.location.href="/portfolio-v3"}}>{data.category}</Link>
                                            <Link to="/portfolio-v3" onClick={() => {window.location.href="/portfolio-v3"}}>{data.subcategory}</Link>
                                        </div>
                                    </li>
                                ))
                            }
                            </ul>
                            {/* <!-- /.slides --> */}
                        </div>
                        <div className="clearfix">
                            
                        </div>
                    </div>
            </div>
        );
    }
}

export default ListProject;