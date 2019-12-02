import React from 'react';
import './ViewStudents.css';

const ViewStudents = () => {
    return (
        <div class="tableContainer">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Date of join</th>
                        <th scope="col">Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><a href = "/">Elon Musk</a></td>
                        <td>2/12/2018</td>
                        <td>95%</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><a href = "/">Larry Page</a></td>
                        <td>5/22/2019</td>
                        <td>18%</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><a href = "/">Mark Zukerberg</a></td>
                        <td>3/12/2017</td>
                        <td>4%</td>
                    </tr>
                </tbody>
            </table>
            <div class="submitButton">
                <button type="button" class="btn btn-lg btn-primary" disabled>Save Changes</button>
            </div>
        </div>
    );
}

export default ViewStudents;