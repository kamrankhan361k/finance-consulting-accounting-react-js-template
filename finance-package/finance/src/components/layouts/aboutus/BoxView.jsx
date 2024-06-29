import React, { Component } from 'react';
class BoxView  extends Component {
	constructor(props) {
        super(props);
        this.state = {
            imgslide: [
                {
                    id: '1',
                    srcimg: 'images/about/s01.jpg'
                },
                {
                    id: '2',
                    srcimg: 'images/about/s01.jpg'
                }
            ],
            content: [
                {
                    id: '1',
                    title: 'Want to know more about Finance Plus?',
                    description: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                }
            ],
            blogtimeline: [
                {
                    id: '1',
                    year: '2012',
                    title: 'Start with a small service',
                    description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                },
                {
                    id: '2',
                    year: '2013',
                    title: 'Website Design, Seo Makerting Online',
                    description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                },
                {
                    id: '3',
                    year: '2014',
                    title: 'Developer WordPress Themeforest.net',
                    description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                }
            ]
            
        }
    }
    render() {
        return (
            <div>
                <div className="flexslider s2">
                    <div className="flat-slides">                            
                        <ul className="slides">
                            {
                                this.state.imgslide.map(data =>(
                                    <li key={data.id}>   
                                        <img src={data.srcimg} alt="img" />
                                    </li>
                                ))
                            }
                            
                        </ul> 
                    </div>
                </div> 
                    {
                        this.state.content.map(data =>(
                            <div className="box-content" key={data.id} >
                                <div className="title">{data.title}</div>
                                <p>{data.description}</p>
                                <div className="dividers dividers-bc-v4"></div>
                            </div>
                            ))
                    }
                
                    {
                        this.state.blogtimeline.map(data =>(
                            <div className="flat-text-block-timeline" key={data.id} >
                                <div className="year">{data.year}</div>
                                <div className="flat-timeline-content">
                                <div className="box-content">
                                    <div className="title">{data.title}</div>
                                    <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
								
        )
                                
    }
}

export default BoxView;