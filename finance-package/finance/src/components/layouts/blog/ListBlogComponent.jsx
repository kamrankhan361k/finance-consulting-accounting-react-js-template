import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import datablog from './dataBlog'

class ListBlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagination: [
                {
                    id: 1,
                    numb: '1',
                    class: 'active'
                },
                {
                    id: 2,
                    numb: '2',
                },
                {
                    id: 3,
                    numb: '>',
                }
            ],
            
        }
    }
    render() {
        return (
            <div className="col-md-8">
						<div className="post-wrap">
                            {
                                datablog.map(data =>(
                                    <article className="main-post" key={data.id} >
                                        <div className="entry-post-title">
                                            <h2 className="post-title"><Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link></h2>
                                            <ul className="entry-meta">
                                                <li className="date"><Link to="#" title="">{data.time}</Link></li>
                                                <li className="author"><Link to="#" title="">{data.author}</Link></li>
                                                <li className="categories"><Link to="#" title="">{data.category}</Link></li>
                                                <li className="comment"><Link to="#" title="">{data.comments}</Link></li>
                                            </ul>
                                        </div>
                                        <div className="featured-post">
                                            <Link to="#"  title="">
                                                <img src={data.srcimg} alt="financial" />
                                            </Link>
                                        </div>
                                        <div className="entry-content">
                                            <p> {data.description}
                                            </p>
                                            <p>
                                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="" className="more-link">Read More</Link>
                                            </p>
                                        </div>
							        </article>
                                ))
                            }
							<div className="blog-pagination">
								<ul className="flat-pagination">
                                    {
                                        this.state.pagination.map (data =>(
                                            <li key={data.id} ><Link to="#" className={data.class} title="">{data.numb}</Link></li>
                                        ))
                                    }
								</ul>
							</div>
						</div>
						
					</div>        
        );
    }
}

export default ListBlogComponent;