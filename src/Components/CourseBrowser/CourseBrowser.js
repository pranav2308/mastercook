import React from 'react';
import {Dropdown} from 'react-bootstrap';
import firebase from '../../Firebase/firebase';
import './CourseBrowser.css';
import CourseItem from './CourseItem';
import CourseList from './CourseList';
import SearchEngine from '../SearchEngine/SearchEngine';

const CourseBrowser = () => {

	const tableStyle = {
		height: '300px',
		marginTop: '10%',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
	const bigHeadingStyle = {
		color: '#7a653f',
		fontWeight: 'bold',
		fontSize: '350%'
	}
	
	
	return (
		<div>
			<div class="optionContainer">
				<div class="sort-by-container">
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
				<div class="categories-container">
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
			<div> <CourseList /></div>
			<div> <CourseItem /></div>
		</div>
	);
}

export default CourseBrowser;