import React from 'react';
import './CourseStudent.css';

const CourseStudent = () => {
    return (
        <div class="tableContainer">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Grades</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark (should be hyperlinks)</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <div class="submitButton">
                <button type="button" class="btn btn-lg btn-primary" disabled>Save Changes</button>
            </div>
        </div>
    );
}

export default CourseStudent;