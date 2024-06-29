import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/imagebox/01.jpg',
                    title: 'Retirement Planning',
                    description:'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself',
                },
                {
                    id: 2,
                    srcimg: 'images/imagebox/02.jpg',
                    title: 'Estate Planning',
                    description:'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself',
                },
                {
                    id: 3,
                    srcimg: 'images/imagebox/03.jpg',
                    title: 'Business Planning',
                    description:'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself',
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
             {
                this.state.datanewBox.map(data => (
                    <div className="col-md-4" key={data.id} >
                        <div className="imagebox-item">
                            <div className="imagebox style3 background-color">
                                <div className="imagebox-image">
                                    <img src={data.srcimg} alt="financial" />
                                </div>
                                <div className="imagebox-title">
                                    <h3><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link></h3>
                                </div>
                                <div className="imagebox-content">
                                    <div className="imagebox-desc">
                                        {data.description}	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            
                               
        );
    }
}

export default BlogFeatured;