import React, { Component } from 'react';
import { Link } from "react-router-dom";
class BoxPost extends Component {
	constructor(props) {
        super(props);
        this.state = {
            infobox: [
                {
                    id: '1',
                    srcimg: 'images/about/01.jpg',
                    subtitle:'Founder & CEO',
                    title: 'STEVEN MONROE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                    classdivider: 'dividers dividers-about-post'
                },
                {
                    id: '2',
                    srcimg: 'images/about/02.jpg',
                    subtitle:'Founder & CEO',
                    title: 'STEVEN MONROE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                    classdivider: 'dividers dividers-about-post'
                },
                {
                    id: '3',
                    srcimg: 'images/about/03.jpg',
                    subtitle:'Finance & Commerce',
                    title: 'STEVEN MONROE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                    classdivider: 'dividers dividers-about-post'
                },
                {
                    id: '4',
                    srcimg: 'images/about/04.jpg',
                    subtitle:'Company Director',
                    title: 'ROMEO ALVAREZ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                    classdivider: ''
                },
            ]
            
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.infobox.map(data =>(
                        <div key={data.id} >
                        <article className="entry">
                            <div className="feature-post">                                    
                                <Link to="#">
                                    <img src={data.srcimg} alt="img" />
                                </Link>                                    
                            </div>
                            <div className="content-post">
                                <div className="position">{data.subtitle}</div>	
                                <h3 className="title-post"><Link to="#">{data.title}</Link></h3>
                                <div className="entry-post">
                                    <p>{data.description}</p>
                                </div>
                                <div className="wrap-button s2">
                                    <Link className="flat-button" to="#">View Profile</Link>
                                </div>                                  
                            </div>
                        </article>
                         <div className={data.classdivider}></div>
                        </div>
                    ))
                }
                
            </div>
        )
                                
    }
}

export default BoxPost;