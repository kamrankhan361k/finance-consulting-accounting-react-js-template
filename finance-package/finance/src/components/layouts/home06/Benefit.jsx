import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Benefit extends Component {
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
				{
                    id: 2,
					title: 'Mutual Funds',
					classicon: 'icon-benefit options',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
				{
                    id: 3,
					title: 'Commodities Trading',
					classicon: 'icon-benefit people',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
				{
                    id: 4,
					title: 'Tax Planing',
					classicon: 'icon-benefit caculator',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
				{
                    id: 5,
					title: 'Insurance Planing',
					classicon: 'icon-benefit magic',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
				{
                    id: 6,
					title: 'Insurance Planing',
					classicon: 'icon-benefit global',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
                },
            ]
        }
    }
    render() {
        return (
            <section className="flat-row parallax parallax1 flat-benefit ">			
			<div className="container">
				<div className="row">

					<div className="col-md-4">
						<div className="benefit-image">
							<img src="./images/benefit/01.png" alt="financial" />
						</div>
					</div>

					<div className="col-md-8">
						<div className="row">
							{
								this.state.itembox.map(data =>(
									<div className="iconbox-item" key={data.id} >
										<div className="iconbox style3">
											<div className="box-header">
												<div className={data.classicon}>
													
												</div>
												<div className="box-title">
													<Link to="#" title="">{data.title}</Link>
												</div>
											</div>
											<div className="box-content">
												{data.boxcontent}
											</div>
										</div>
									</div>
								))
							}
							
						</div>
					</div>
				</div>
			</div>
		</section>
		// <!-- /.flat-benefit -->

     
           
        );
    }
}

export default Benefit;