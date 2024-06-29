import React, { Component } from 'react';
import { TopBar, HeaderWidget,TopHeader, CarouselClient,Slider,  Footer,  Loader} from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Services } from '../layouts/general/services';
import { Project } from '../layouts/general/projects';
import { Callback } from '../layouts/general/callback';
import { Blog } from '../layouts/general/blog';
class Home03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home Widget Header'
                }
            ],
        }
    }
    render() {
        return (
            <div className="boxed">
                <Loader />
                <TopBar />
                <TopHeader />
                {
                    this.state.headers.map(data => (
                        <HeaderWidget data={data} key={data.id}/>
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
        );
    }
}

export default Home03;