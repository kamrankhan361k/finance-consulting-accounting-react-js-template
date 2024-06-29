import React, { Component } from 'react';

import {Slider,  Footer,  Loader, HeaderWidget, CarouselClient, TopHeader} from '../layouts/general';
import { Blog } from '../layouts/general/blog';
import { BlogFeatured, Offer, Counter, ProgessAccordion } from '../layouts/home05';

class Home05 extends Component {
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
                    <section className="flat-row flat-imagebox style2 bg-theme">
                        <div className="container">
                            <div className="row">
                                <BlogFeatured />

                            </div>
                        </div>
		            </section>
                    <Offer />
                    <Counter />

                    <ProgessAccordion />

                    <Blog />

                    <CarouselClient />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home05;