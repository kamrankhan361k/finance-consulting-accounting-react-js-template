import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SingleBlogComponent extends Component {
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
            datablog: [
                {
                    id: '1',
                    srcimg: 'images/blog/blog-content-01.png',
                    title: 'Why Do I Need To Use Financial ?',
                    description: 'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem... ',
                    day: '11',
                    month: 'JAN'
                },
                {
                    id: '2',
                    srcimg: 'images/blog/blog-content-02.png',
                    title: 'Why your sales forecast is off',
                    description: 'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...',
                    day: '11',
                    month: 'JAN'
                },
                {
                    id: '3',
                    srcimg: 'images/blog/blog-content-03.png',
                    title: '6 tips to retain your top sales talent',
                    description: 'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...',
                    day: '11',
                    month: 'JAN'
                },
            ]
            
        }
    }
render() {
    return (
        <section className="main-content blog-single-post">
			<div className="container">
				<div className="row">
					<div className="post-wrap">
                        {
                            this.state.datablog.map(data=>(
                                <div className="col-md-4" key={data.id} >
                                    <article className="post style2">
                                        <div className="featured-post">
                                            <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="" className="post-image">
                                                <img src={data.srcimg} alt="img" />
                                            </Link>
                                            <ul className="post-date">
                                                <li className="day">{data.day}</li>
                                                <li className="month">{data.month}</li>
                                            </ul>
                                        </div>
                                        <div className="content-post">
                                            <h4 className="title-post">
                                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                            </h4>
                                            <div className="entry-post">
                                                <p>{data.description}
                                                </p>
                                                <div className="more-link">
                                                    <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">Readmore</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
						</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="dividers dividers-pagination"></div>
						<div className="blog-single-pagination">
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
			</div>
		</section>
        );
    }
}

export default SingleBlogComponent;