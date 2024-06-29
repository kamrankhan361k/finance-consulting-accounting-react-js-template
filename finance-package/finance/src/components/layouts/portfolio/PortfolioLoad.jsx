import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TabPortfolio from './TabPortfolio';

class PortfolioLoad extends Component {
	constructor(props) {
        super(props);
        this.state = {
			itemcontent: [
				{
					id: '1',
					srcimg: 'images/portfolio/01.jpg',
					classitem: 'item business savings trading',
					title: 'Business Solutions',
					category: 'Services /',
					subcategory: 'Trading',
				},
				{
					id: '2',
					srcimg: 'images/portfolio/02.jpg',
					classitem: 'item management finance',
					title: 'Money Market',
					category: 'Services /',
					subcategory: 'Trading',
				},
				{
					id: '3',
					srcimg: 'images/portfolio/03.jpg',
					classitem: 'item savings services',
					title: 'MO Insurance',
					category: 'Services /',
					subcategory: 'Trading',
				},
				{
					id: '4',
					srcimg: 'images/portfolio/04.jpg',
					classitem: 'item finance trading',
					title: 'Financial Report',
					category: 'Management /',
					subcategory: 'Trading',
				},
				{
					id: '5',
					srcimg: 'images/portfolio/05.jpg',
					classitem: 'item invoicing finance',
					title: 'Event Finder',
					category: 'Invoicing',
					subcategory: '',
				},
				{
					id: '6',
					srcimg: 'images/portfolio/06.jpg',
					classitem: 'item services savings',
					title: 'Oak Tree Solutions',
					category: 'Business',
					subcategory: '',
				},
				{
					id: '7',
					srcimg: 'images/portfolio/07.jpg',
					classitem: 'item trading management',
					title: 'Investment Planning',
					category: 'Business /',
					subcategory: 'Trading',
				},
				{
					id: '8',
					srcimg: 'images/portfolio/08.jpg',
					classitem: 'item invoicing services',
					title: 'Enterprise Loan',
					category: 'Finance',
					subcategory: '',
				}
			]
        }
    }
    render() {
        return (
				/* <!-- Portfolio --> */
				<section className="flat-row pd-portfolio-s3" id="work">
					<TabPortfolio />
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="dividers portfolio"></div>
								<div className="flat-portfolio">             
									<div className="portfolio-wrap grid one-three clearfix">
										{
											this.state.itemcontent.map(data =>(
												<div key={data.id} className={data.classitem}>
													<div className="wrap-iconbox">
														<div className="featured-post">
															<img src={data.srcimg} alt="img" />
														</div>
														<div className="title-post">
															<Link to="#">{data.title}</Link>
														</div>
														<div className="category-post">
															<Link to="#" title="">{data.category} </Link>
															<Link to="#" title=""> {data.subcategory}</Link>
													</div>
												</div> 
											</div>
										/* <!-- portfolio-item --> */
											))
										}
									</div>
									{/* <!-- /.portfolio-wrap --> */}
								</div>
								{/* <!-- /.flat-portfolio --> */}
							</div>

						</div>
					</div>
				</section> 

				 
        );
    }
}

export default PortfolioLoad;