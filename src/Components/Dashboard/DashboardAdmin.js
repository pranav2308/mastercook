import React from 'react';
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
    return (
        <div class="tableContainer">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Opeartion</th>
                        <th scope="col">ID</th>
                        <th scope="col">Submit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Add User with ID</th>
                        
                        <td>
                            <form>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </td>
                        
                    </tr>
                    <tr>
                    <th scope="row">Delete User with ID</th>
                        
                        <td>
                            <form>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </td>
                       
                    </tr>
                    <tr>
                    <th scope="row">Add Course with ID</th>
                        
                        <td>
                            <form>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </td>
                     
                    </tr>
                    <tr>
                    <th scope="row">Delete Course with ID</th>
                        
                        <td>
                            <form>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </td>
                     
                    </tr>
                    
                    <tr>
                    <th scope="row">Add User with ID to ID</th>
                        
                        <td>
                            <form>
                            <div>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            <div class="form-group admin-group">
                                
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ID"/>
                                
                            </div>
                            </div>
                            </form>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </td>
                     
                    </tr>
                </tbody>
            </table>
            <div class="submitButton">
                <button type="button" class="btn btn-lg btn-primary" disabled>Save Changes</button>
            </div>
        </div>
    );
}

export default DashboardAdmin;