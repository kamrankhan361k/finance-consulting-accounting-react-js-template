import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class newBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/news/image-small-01.png',
                    title: 'Why your sales forecast is off',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    day: 'January 11, 2020',
                },
                {
                    id: 2,
                    srcimg: 'images/news/image-small-02.png',
                    title: 'Why your sales forecast is off',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    day: 'January 11, 2020',
                },
                {
                    id: 3,
                    srcimg: 'images/news/image-small-03.png',
                    title: '6 tips to retain your top sales talent',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    day: 'January 11, 2020',
                },
                {
                    id: 4,
                    srcimg: 'images/news/image-small-04.png',
                    title: 'What the martian can teach sales',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    day: '1January 11, 2020',
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="col-md-4">
                <div className="slidebar-news">
                    <aside className="widget widget-recent-news">
                        <ul className="recent-news">
                                {
                                    this.state.datanewBox.map(data => (
                                        <li key={data.id} >                                    
                                            <div className="thumb">
                                                <span className="overlay-pop"></span>
                                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}}>
                                                    <img src={data.srcimg} alt="" />
                                                </Link>
                                                {/* <!-- /.thumb -->  */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                            <div className="text">
                                                <h4>
                                                    <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                                </h4>
                                                <div className="entry-post">
                                                    <p>{data.day}</p>
                                                </div>
                                            </div>
                                            {/* <!-- /.content-post -->*/}
                                        </li>
                                    ))
                                    
                                }
                        </ul>
                    </aside>
                    {/* <!-- /.widget-recent-news --> */}
                </div>
                {/* <!-- /.slidebar-news --> */}
            </div>
        );
    }
}

export default newBox;