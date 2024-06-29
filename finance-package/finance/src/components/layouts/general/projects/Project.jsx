import React, { Component } from 'react';
import ListProject from "./ListProject";
class Project extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleProject: [
                {
                    id: 1,
                    title: 'Our Projects',
                    }
            ],
        }
    }
    render() {
        return (
            <section className="flat-row flat-owl-stage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section left">
                            {
                                this.state.titleProject.map(data =>(
                                    <h2 key={data.id}>{data.title}</h2>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    <ListProject />
                </div>
            </section>
        );
    }
}

export default Project;