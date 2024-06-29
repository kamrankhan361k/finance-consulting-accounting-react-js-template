import React, { Component } from 'react';
import FormApply from "./FormApply";

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state = {
           titleCallback: [
               {
                   id: 1,
                   title: 'Get a Call Back',
                   text: 'If you need to speak to us about a general query fill in the form below and we will call you back within the same working day.',
                   }
           ],
           
        }
    }
    render() {
        return (
        
            <section className="flat-row flat-callback">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                this.state.titleCallback.map(data =>(
                                    <div className="text-block-callback" key={data.id}>
                                        <h2>{data.title}</h2>
                                        <div className="text-callback-content">{data.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-md-8">
                            <FormApply />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Callback;