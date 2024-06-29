import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="preloader">
	            <div className="clear-loading loading-effect-2">
	                <span></span>
	            </div>
	        </div>
        );
    }
}

export default Loader;