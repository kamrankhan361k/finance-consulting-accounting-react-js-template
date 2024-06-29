import React, { Component } from 'react';

import {Slider,  Footer,  Loader, HeaderWidget, CarouselClient, TopHeader} from '../layouts/general';
import { BlogFeatured, Benefit, Counter, Testimonials,BlogBot } from '../layouts/home06';
import {Callback} from "../layouts/general/callback";

class Home06 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home'
                }
            ],
        }
    }
    
    render() {
        return (
            <div className="bg-body2">
                <div className="boxed">
                    <Loader />
                    <TopHeader />
                    {
                        this.state.headers.map(data => (
                            <HeaderWidget data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    <section className="flat-row flat-imagebox pd-imagebox-s3">
                        <div className="container">
                            <div className="row">

                                <BlogFeatured />

                            </div>
                        </div>
		            </section>
                    <Benefit />

                    <Counter />

                    <Testimonials />

                    <CarouselClient />

                    <BlogBot />

                    <Callback />

                    <section className="flat-row pdmap">
                        <div className="flat-maps" data-address="Thành phố New York, Tiểu bang New York" data-height="453" data-images="images/map/map-1.png" data-name="Themesflat Map"></div>
                        <div className="gm-map">                
                            <div className="map"></div>                        
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home06;