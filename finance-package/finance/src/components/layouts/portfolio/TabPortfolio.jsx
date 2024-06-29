import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TabPortfolio extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabportfolio: [
                {
					id: 1,
					classname: 'active',
					datafilter: '*',
					title: 'All',
				},
				{
					id: 2,
					classname: '',
					datafilter: '.business',
					title: 'Business',
				},
				{
					id: 3,
					classname: '',
					datafilter: '.finance',
					title: 'Finance',
				},
				{
					id: 4,
					classname: '',
					datafilter: '.invoicing',
					title: 'Invoicing',
				},
				{
					id: 5,
					classname: '',
					datafilter: '.management',
					title: 'Management',
				},
				{
					id: 6,
					classname: '',
					datafilter: '.savings',
					title: 'Savings',
				},
				{
					id: 7,
					classname: '',
					datafilter: '.services',
					title: 'Services',
				},
				{
					id: 8,
					classname: '',
					datafilter: '.trading',
					title: 'Trading',
				},
			],
        }
    }
    render() {
        return (
				/* <!--Tab Portfolio --> */
					<div className="bg-portfolio-filter">  
						<div className="container">
							<div className="row">
								<div className="col-md-12">                           
									<ul className="portfolio-filter">
										{
											this.state.tabportfolio.map(data =>(
												<li key={data.id} className={data.classname}><Link data-filter={data.datafilter} to="#">{data.title}</Link></li>
											))
										}
									</ul>
									{/* <!-- /.project-filter --> */}
								</div>
							</div>
						</div>
					</div>
        );
    }
}

export default TabPortfolio;