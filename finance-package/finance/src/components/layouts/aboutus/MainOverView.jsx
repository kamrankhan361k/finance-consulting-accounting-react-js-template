import React, { Component } from 'react';
import BoxView from "./BoxView";
class MainPost extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabpost: [
                {
                    id: '1',
                    classcategory: 'wrap-main-post about-v3',
                },
                {
                    id: '2',
                    classcategory: 'wrap-main-post about-v3',
                },
                {
                    id: '3',
                    classcategory: 'wrap-main-post about-v3',
                },
                {
                    id: '4',
                    classcategory: 'wrap-main-post about-v3',
                },
                {
                    id: '5',
                    classcategory: 'wrap-main-post about-v3',
                },
                {
                    id: '6',
                    classcategory: 'wrap-main-post about-v3',
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
                                <BoxView />
                            </div>
                        </div>
                    ))
                }
	        </div> 
        )
                                
    }
}

export default MainPost;