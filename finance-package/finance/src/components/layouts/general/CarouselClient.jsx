import React, { Component } from 'react';

class CarouselClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgCarousel: [
                {
                    id: 1,
                    srcimg: 'images/client/logo-slide-05.png',
                },
                {
                    id: 2,
                    srcimg: 'images/client/logo-slide-03.png',
                },
                {
                    id: 3,
                    srcimg: 'images/client/logo-slide-04.png',
                },
                {
                    id: 4,
                    srcimg: 'images/client/logo-slide-02.png',
                },
                {
                    id: 5,
                    srcimg: 'images/client/logo-slide-01.png',
                }
            ], 
        }
    }
    render() {
        return (
            <section className="flat-row flat-client bg-theme">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <ul className="flat-carousel" data-item="5" data-nav="false" data-dots="false" data-auto="true">
                                {
                                    this.state.imgCarousel.map(data =>(
                                        <li className="item" key={data.id} >
                                            <img src={data.srcimg} alt="img" />
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div> 
                        {/* <!-- /.col-md-12 --> */}
                    </div> 
                    {/* <!-- /.row --> */}
                </div> 
                {/* <!-- /.container --> */}
            </section> 
        );
    }
}

export default CarouselClient;