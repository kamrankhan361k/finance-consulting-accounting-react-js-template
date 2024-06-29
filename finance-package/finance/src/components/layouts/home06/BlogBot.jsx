import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/news/01.png',
                    title: 'Why Do I Need To Use Financial ?',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, semper ligula. Nullam v...',
                    day: '11',
                    month: 'JAN'
                },
                {
                    id: 2,
                    srcimg: 'images/news/02.png',
                    title: 'Why your sales forecast is off',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    day: '11',
                    month: 'JAN'
                },
            ]
        }
    }
    
    render() {
        return (
            <section className="flat-row flat-news-s2">
			<div className="container">

				<div className="row">
					<div className="col-md-12">
						<div className="title-section title-section center style3">
							<h2>
								Latest news
							</h2>
						</div>
                        
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="wrap-article">
                            {
                                this.state.datanewBox.map(data => (
                                    <article className="news-post post style3" key={data.id} >
                                        <div className="featured-post">
                                            <Link to="/blog" onClick={() => {window.location.href="/blog"}}>
                                            <img src={data.srcimg} alt="financial" />
                                            </Link>
                                            <ul className="post-date">
                                                <li className="day">{data.day}</li>
                                                <li className="month">{data.month}</li>
                                            </ul>
                                        </div>

                                        <div className="content-post">
                                            <h4 className="title-post">
                                                <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link>
                                            </h4>
                                            <div className="entry-post">
                                                <p>{data.description}</p>
                                            </div>	
                                            <div className="news-button style3">
                                                <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">Continue Reading</Link>
                                            </div>	
                                        </div>
							        </article>
                                ))
                            }
						</div>
					</div>				

				</div>

			</div>
		</section>

            
                               
        );
    }
}

export default BlogFeatured;