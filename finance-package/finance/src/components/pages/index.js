import Home01 from './Home01'
import Home02 from './Home02'
import Home03 from './Home03'
import Home04 from './Home04'
import Home05 from './Home05'
import Home06 from './Home06'
import TeamGrid from './TeamGrid'
import OverView from './OverView'
import AboutUs from './AboutUs'
import Services from './Services'
import Blog from './Blog'
import BlogGrid from './BlogGrid'
import RiskManagement from './RiskManagement'
import Portfolio from './Portfolio'
import Portfolio2 from './Portfolio2'
import Portfolio3 from './Portfolio3'
import Contact01 from './Contact01'
import Contact02 from './Contact02'
import BlogSingle from './BlogSingle'

const routes = [
    { path: '/', component: Home01},
    { path: '/index-v2', component: Home02},
    { path: '/index-v3', component: Home03},
    { path: '/index-v4', component: Home04},
    { path: '/index-layout2', component: Home05},
    { path: '/index-v5', component: Home06},
    { path: '/about-v1', component: AboutUs},
    { path: '/about-v2', component: TeamGrid},
    { path: '/about-v3', component: OverView},
    { path: '/services-v1', component: Services},
    { path: '/services-v2', component: RiskManagement},
    { path: '/portfolio-v3', component: Portfolio},
    { path: '/portfolio-v2', component: Portfolio2},
    { path: '/portfolio-v1', component: Portfolio3},
    { path: '/blog', component: Blog},
    { path: '/blog-grid', component: BlogGrid},
    { path: '/contact-v1', component: Contact01},
    { path: '/contact-v2', component: Contact02},
    { path: '/blog-single', component: BlogSingle},
    
]

export default routes;