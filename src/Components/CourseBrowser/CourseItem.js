import React, {Component} from 'react';
import firebase from '../../Firebase/firebase';

let courseRef = firebase.firestore.collection('Courses');

class CourseItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <section class="resultCard">
				<div class="card">
					<div class="row ">
						<div class="col-sm-3 col-md-3">
							<img src={this.props.imgUrl} class="resultCardImage"/>
						</div>
						<div class="col-sm-3 col-md-8 px-3">
							<div class="card-block px-3">
                            <h1 class="card-text">{this.props.name}</h1>
                            <h6 class="card-text"><t>{this.props.description}</t></h6>
							<p class="card-text"> Duration: {this.props.duration}</p>
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