import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainGrid extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titlegird: [
                {
                    id: 1,
					title: 'Company profile - Our team',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.',
				},
			],
			boxgrid: [
				{
					id: '1',
					srcimg: 'images/about/t01.jpg',
					subtitle: 'Founder &amp; CEO',
					title: 'STEVEN MONROE',
					listsocial: [
						{
							id: '1',
							datatitle:'Facebook',
							classtitle: 'facebook',
							classicon: 'fa fa-facebook'
						},
						{
							id: '2',
							datatitle:'LinkedIn',
							classtitle: 'linkedin',
							classicon: 'fa fa-linkedin'
						},{
							id: '3',
							datatitle:'Google Plus',
							classtitle: 'google-plus',
							classicon: 'fa fa-google-plus'
						}
					]
				},
				{
					id: '2',
					srcimg: 'images/about/t02.jpg',
					subtitle: 'Founder &amp; CEO',
					title: 'STEVEN MONROE'
				},
				{
					id: '3',
					srcimg: 'images/about/t03.jpg',
					subtitle: 'Finance & Commerce',
					title: 'MICHAEL KING'
				},
				{
					id: '4',
					srcimg: 'images/about/t04.jpg',
					subtitle: 'Company Director',
					title: 'ROMEO ALVAREZ'
				}
			],
			
        }
    }
    render() {
        return (
			<section className="flat-row pd-about-team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
								{
									this.state.titlegird.map(data =>(
										<div className="title-section center s1" key={data.id} >
											<h2>{data.title}</h2>
											<p className="sub-title-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.</p>
										</div>		
									))
								}
							<div className="dividers dividers-about-team"></div>
						</div>
					</div>

					<div className="row">
						{
							this.state.boxgrid.map(data =>(
								<div className="col-md-3" key={data.id} >
									<div className="flat-team team-grid has-image">			
										<div className="team-image">
											<img src={data.srcimg} alt="img" />
										</div>										
										<div className="team-info">	
											<div className="team-subtitle">{data.subtitle}</div>
											<div className="team-name">{data.title}</div>			
											<div className="team-desc"></div>
											<div className="social-links">
												<Link to="#" data-title="Facebook" className="facebook"><i className="fa fa-facebook"></i></Link> 
												<Link to="#" data-title="LinkedIn" className="linkedin"><i className="fa fa-linkedin"></i></Link> 
												<Link to="#" data-title="Google Plus" className="google-plus"><i className="fa fa-google-plus"></i></Link>
											</div>
										</div>
									</div> 
								</div> 

						
							))
						}
					</div>				
				</div>
			</section>
            //   flat-row-iconbox
        );
    }
}

export default MainGrid;