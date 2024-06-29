import React, { Component } from 'react';
import { TopBar,TopHeader ,HeaderModern,Slider, Footer, Loader, CarouselClient } from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Services } from '../layouts/general/services';
import { Project } from '../layouts/general/projects';
import { Callback } from '../layouts/general/callback';
import { Blog } from '../layouts/general/blog';

class Home02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home Modern Header'
                }
            ],
        }
    }
    
    render() {
        return (
            <div className="bg-body">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    <TopHeader />
                    {
                        this.state.headers.map(data => (
                            <HeaderModern data={data} key={data.id}/>
                        ))
                    }

                    <Slider />
                    
                    <Featured />

                    <Services />

                    <Project />

                    <Callback />

                    <Blog />

                    <CarouselClient />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home02;