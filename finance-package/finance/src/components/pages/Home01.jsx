import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,  Loader,CarouselClient,  TopBar } from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Services } from '../layouts/general/services';
import { Project } from '../layouts/general/projects';
import { Callback } from '../layouts/general/callback';
import { Blog } from '../layouts/general/blog';

class Home01 extends Component {
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
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
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

export default withRouter(Home01);