import React, { Component } from 'react';
import BoxPost from './BoxPost';
class MainPost extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabpost: [
                {
                    id: '1',
                    classcategory: 'wrap-main-post about-v1',
                },
                {
                    id: '2',
                    classcategory: 'wrap-main-post about-v1',
                },
                {
                    id: '3',
                    classcategory: 'wrap-main-post about-v1',
                },
                {
                    id: '4',
                    classcategory: 'wrap-main-post about-v1',
                },
                {
                    id: '5',
                    classcategory: 'wrap-main-post about-v1',
                },
                {
                    id: '6',
                    classcategory: 'wrap-main-post about-v1',
                },
            ]
            
        }
    }
    render() {
        return (
			<div className="col-md-9 content-tab">
                {
                    this.state.tabpost.map( data => (
                        <div className="content-inner" key={data.id} >
                            <div className={data.classcategory}>
                                <BoxPost />
                            </div> 
                        </div>
                    ))
                }
                </div>
        )
                                
    }
}

export default MainPost;