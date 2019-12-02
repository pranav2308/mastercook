import React from "react";
import { Route, Redirect } from 'react-router-dom';


const AuthorizationProtectedRoute = (props) => {
	
	const { component : Component, isSignedIn } = props;
	
	if(isSignedIn){
		return <Route render = {(routeProps) => <Component {...routeProps} {...props}/>}/>
	}
	return <Redirect to = "/"/>
}
export default AuthorizationProtectedRoute;