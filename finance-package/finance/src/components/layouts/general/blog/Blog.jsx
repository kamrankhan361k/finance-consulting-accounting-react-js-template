import React, { Component } from 'react'
import BlogFeatured from "./BlogFeatured";
import BlogSlidebar from "./BlogSlidebar";
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleNews: [
                {
                    id: 1,
                    title: 'Latest news',
                    }
                ],
        }
    }
    
    render() {
        return (
                <section className="flat-row flat-news">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section left">
                                {
                                    this.state.titleNews.map(data =>(
                                        <h2 key={data.id}>{data.title}</h2>
                                    ))
                                }
                                </div>
                                {/* <!-- /.title-section --> */}
                            </div>
                        </div>
                        {/* <!-- /.row --> */}

                        <div className="row">
                            <BlogFeatured />

                            
                            <BlogSlidebar />

                        </div>
                        {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.container --> */}
                </section>           
        );
    }
}

export default Blog;