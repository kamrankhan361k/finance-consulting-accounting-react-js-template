import React, { Component } from 'react';
import EventBoxs from './EventBoxs';
class Featured extends Component {
    render() {
        return (
            <section className="flat-row pd-imagebox">
			    <div className="container">
				    <EventBoxs />
            </div>
            {/* <!-- /.container --> */}
		</section>

     
           
        );
    }
}

export default Featured;