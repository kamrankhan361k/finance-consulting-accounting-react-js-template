import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import menus from '../menu'
class HeaderTransparent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linklogo: '/'
        }
    }
    
    render() {
        const { location } = this.props;
        return (
            <div id="header" className="header transparent style3">
                <div className="container">
                    <div className="row">
                        <div className="header-wrap">
                            <div className="col-md-2">
                                <div id="logo" className="logo">
                                    <Link to="#" title="">
                                        <img src="images/logo-blog.png" alt="logo Finance Business" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-10">	
                                <div className="flat-show-search">
                                    <div className="show-search">
                                        <Link to="#"><i className="fa fa-search"></i></Link>                                             
                                    </div>
                                    <div className="top-search">                        
                                        <form action="#" id="searchform-all" method="get">
                                            <div>
                                                <input type="text" id="s" className="sss" placeholder="Search..." />
                                                <input type="submit" value="" id="searchsubmit" />
                                            </div>
                                        </form>
                                    </div> 
                                </div> 				
                                <div className="nav-wrap">
                                    <div className="btn-menu">
                                        <span></span>
                                    </div>							
                                    <nav id="mainnav" className="mainnav">
                                        <ul className="menu">
                                        {
                                            menus.map(data =>(
                                                <li className={data.name === this.props.data.names ? "active" : ""} key={data.id}>
                                                    <Link to={data.linkmenu} onClick={() => {window.location.href=data.linkmenu}}>{data.name} <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                                    {
                                                        data.namesub === undefined ? "" : 
                                                        <ul className="sub-menu">
                                                            {
                                                                data.namesub.map(submenus =>(
                                                                    <li className={location.pathname === submenus.links || submenus.sub === this.props.data.names02 ? "active" : ""} key={submenus.id}><Link to={submenus.links} onClick={() => {window.location.href=submenus.links}}>{submenus.sub}</Link>
                                                                        {
                                                                            submenus.submenu === undefined ? "" :
                                                                            <ul className="sub-menu">
                                                                                {
                                                                                    submenus.submenu.map(menusub => (
                                                                                        <li className={location.pathname === menusub.linksub ? "active" : ""} key={menusub.id}><Link to= {menusub.linksub} onClick={() => {window.location.href=menusub.linksub}}>{menusub.titlesub}</Link></li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        }
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                </li>
                                            ))
										}								
                                        </ul>								
                                    </nav>						
                                </div>
                        </div>
                    </div>
                </div>
		    </div>
            </div>
        );   
    }
}

export default withRouter(HeaderTransparent);