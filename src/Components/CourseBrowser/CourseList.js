import React, {Component, Pagination} from 'react';
// import firebase from '../../Firebase/firebase';
import CourseItem from './CourseItem';

// let courseRef = firebase.firestore.collection('Courses');

class CourseList extends Component {
    constructor(props){
        super(props);
        this.state={
            currentPage: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({currentPage: pageNumber});
    }

    render() {

        let courseArr = [];
        // console.log("Outside course list if: ", this.props.searchResults);
        if (this.props.searchResults && this.props.searchResults.length > 0) {
            
            // console.log("Inside course list if: ", this.props.searchResults);
            // console.log(this.props.searchResults[0]);

           // let indexOfLastCourse = this.state.currentPage * 10;
           // let indexOfFirstCourse = indexOfLastCourse - 10;

            this.props.searchResults.forEach((result, index) => {
                if(index === 0){
                    // console.log('Pushing result: ', result);
                    courseArr.push(<CourseItem name={result.name} description={result.description}
                    duration={result.duration}  imgUrl = {result.imgUrl} rating = {result.rating} courseID = {result.id} {...this.props}/>);
                
                    courseArr.push();    
                }
                
            });
            
            // console.log(courseArr);

          //  let coursePerPage = courseArr.slice(indexOfFirstCourse, indexOfLastCourse);

            return(
                <div>
                    {courseArr}
                </div>
            );
        } else {
            return <div> Loading... </div>
        }


    }
}

export default CourseList;