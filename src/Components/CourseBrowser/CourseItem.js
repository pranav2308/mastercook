import React, {Component} from 'react';
import firebase from '../../Firebase/firebase';

let courseRef = firebase.firestore.collection('Courses');

class CourseItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            image: "https://www.usnews.com/dims4/USNEWS/4f17cab/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fa9%2F14%2Fc75d491f4979a756e6108846c2e5%2F161104-tofucubes-stock.jpg",
            name: '',
            description: '',
            duration: '',
            user: ''
        };
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            description: this.props.description,
            duration: this.props.duration,
            user: this.props.user
        });
    }

    render() {
        return(
            <section class="resultCard">
				<div class="card">
					<div class="row ">
						<div class="col-sm-3 col-md-3">
							<img src={this.state.image} class="resultCardImage"/>
						</div>
						<div class="col-sm-3 col-md-8 px-3">
							<div class="card-block px-3">
                            <h1 class="card-text">{this.state.name}</h1>
                            <h6 class="card-text"><t>{this.state.description}</t></h6>
							<p class="card-text"> Duration: {this.state.duration}</p>
							<p class="card-text"> Rating: 4.5/5</p>
							<button class="btn btn-light" type="submit">Enroll Now</button>
							</div>
						</div>

						</div>
					</div>
            </section>
        );
    }
}

export default CourseItem;