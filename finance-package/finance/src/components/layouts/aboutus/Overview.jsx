import React, { Component } from 'react';
import { SlideBar } from '.';
import MainOverView from './MainOverView';
class Overview extends Component {
	constructor(props) {
        super(props);
        this.state = {
            itembox: [
                {
                    id: 1,
					title: 'Wealth Management',
					classicon: 'icon-benefit',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
            ]
        }
    }
    render() {
        return (
			
			<section className="flat-row pd-about-post">
                        <div className="container">
                            <div className="row flat-tabs" data-effect ="fadeIn">
								<SlideBar />
                                <MainOverView />
                            </div>				
                        </div>
			        </section>
                    // flat-row-iconbox
        );
    }
}

export default Overview;