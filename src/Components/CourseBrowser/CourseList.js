import React, {Component, Pagination} from 'react';
import firebase from '../../Firebase/firebase';
import CourseItem from './CourseItem';

let courseRef = firebase.firestore.collection('Courses');

class CourseList extends Component {
    constructor(props){
        super(props);
        this.state={
            mockResultArr: [
                "5KKOEtkTRCEt3xoLramy",
                "5vmTWkMBWojRU8FYodxG",
                "RfQEbtyjifBqC8H1xkmH",
                "t0TYw0GTvHRyAJmNbBGk"],
            courseArr: [],
            currentPage: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount(){
        courseRef.onSnapshot((s) => {
            let array = this.state.mockResultArr.map((element) => {
                s.forEach(doc => {
                    if (doc.id == element){
                        return {[doc.id]: doc.data()};
                    }
                })
            })
            console.log(typeof array);
            this.setState({courseArr: array});
        });
    }

    handlePageChange(pageNumber) {
        this.setState({currentPage: pageNumber});
    }

    render() {

        //console.log(typeof this.state.courseArr);

        if (this.state.courseArr && this.state.courseArr.length > 0) {
            
            let keys = Object.keys(this.state.courseArr);
            //console.log(keys);
        }

        if (this.state.courseArr.length == 0) {
            return <div> There are no matching courses! </div>
        }

        let indexOfLastCourse = this.state.currentPage * 10;
        let indexOfFirstCourse = indexOfLastCourse - 10;



       // let coursePerPage = this.state.courseArr.slice(indexOfFirstCourse, indexOfLastCourse);

        return(
            <div> i'm printing </div>
           /* <div>
                   <Pagination
                       items={this.state.courseArr}
                       activePage={this.state.currentPage}
                       itemsCountPerPage={10}
                       totalItemsCount={this.state.courseArr.length}
                       pageRangeDisplayed={5}
                       onChange={this.handlePageChange}/>

                   {coursePerPage}

                   <Pagination
                       items={this.state.courseArr}
                       activePage={this.state.currentPage}
                       itemsCountPerPage={10}
                       totalItemsCount={this.state.courseArr.length}
                       pageRangeDisplayed={5}
                       onChange={this.handlePageChange}/>
               </div>*/
        );
    }
}

export default CourseList;