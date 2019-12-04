import React from 'react';
import {Dropdown} from 'react-bootstrap';
import firebase from '../../Firebase/firebase';
import './CourseBrowser.css';
import CourseItem from './CourseItem';
import CourseList from './CourseList';
import SearchEngine from '../SearchEngine/SearchEngine';
import { any } from 'prop-types';

let courseRef = firebase.firestore.collection("Courses");

class CourseBrowser extends React.Component {

  render() {
    // console.log('Search result in CourseBrowser: ', this.props.searchResults);
    return (
    <div className="course-browser-container">
      <div className="options-container">
        <div className="sort-by-container">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Most relevant</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Most recent</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name (A->Z)</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name (Z->A)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="categories-container">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Indian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thai</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="result-container"> <CourseList searchResults={this.props.searchResults} user={this.props.user}/></div>
    </div>
    );
  }
}

export default CourseBrowser;