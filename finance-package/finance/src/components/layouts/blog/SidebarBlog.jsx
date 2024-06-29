import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SidebarBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listrecentpost: [
                {
                    id: '1',
                    title: 'Why Do I Need To Use Financial ?',
                    datapost: 'January 11, 2021'
                },
                {
                    id: '2',
                    title: 'Why your sales forecast is off',
                    datapost: 'January 11, 2021'
                },
                {
                    id: '3',
                    title: '6 tips to retain your top sales talent',
                    datapost: 'January 11, 2021'
                },
                {
                    id: '4',
                    title: 'What the martian can teach sales',
                    datapost: 'January 11, 2021'
                }
            ],
            category: [
                {
                    id: '1',
                    title: 'Business'
                },
                {
                    id: '2',
                    title: 'Finanve'
                },
                {
                    id: '3',
                    title: 'Insurance'
                },
                {
                    id: '4',
                    title: 'Leasing'
                },
            ],
            tabcloud: [
                {
                    id: '1',
                    tablink: 'Business'
                },
                {
                    id: '2',
                    tablink: 'Consulting'
                },
                {
                    id: '3',
                    tablink: 'Creative'
                },
                {
                    id: '4',
                    tablink: 'Finanve'
                },
                {
                    id: '5',
                    tablink: 'Insurance'
                },
                {
                    id: '6',
                    tablink: 'Leasing'
                },
                {
                    id: '7',
                    tablink: 'Management'
                },
                {
                    id: '8',
                    tablink: 'Portfolio'
                },
                {
                    id: '9',
                    tablink: 'ThemeForest'
                }
            ]
        }
    }
    render() {
        return (
                <div className="col-md-4">
                    <div className="sidebar right">
                        <aside id="recent-post" className=" widget widget-recent">
                            <h3 className="widget-title">RECENT POSTs</h3>
                            <ul>
                                {
                                    this.state.listrecentpost.map(data => (
                                        <li key={data.id} >
                                            <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                            <span>{data.datapost}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </aside>
                        <aside className=" widget widget-categories">
                            <h3 className="widget-title">CATEGORIES</h3>
                            <ul>
                                {
                                    this.state.category.map(data => (
                                        <li key={data.id} ><Link to="#" title="">{data.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </aside>
                        <aside className="widget widget-brochure">
                            <div className="brochure-box-title">
                                <h5 className="brochure-title">Our Brochure</h5>
                                <p>View our 2016 financial prospectus brochure
                                    for an easy to read guide on all of the
                                    services offered.
                                </p>
                            </div>
                            <p className="btn-download">
                                <Link to="#" title="" className="pdf">Download .PDF</Link>
                            </p>
                            <p className="btn-download doc">
                                <Link to="#" title="" className="doc">Download .DOC</Link>
                            </p>
                        </aside>
                        <aside className="widget widget-tags">
                            <h3 className="widget-title">TAGS</h3>
                            <div className="tag-cloud">
                                {
                                    this.state.tabcloud.map(data =>(
                                        <Link key={data.id} to="#" title="" className="tag-link">{data.tablink}</Link>
                                    ))
                                }
                            </div>
                        </aside>
                    </div>
                </div>
        );
    }
}

export default SidebarBlog;