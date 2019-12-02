
    function setUser(user){
    	this.setState({ user: user, isSignedIn : true});
    	// console.log("User added: ", user);
    }

    function flushUser(emptyUser){
    	this.setState({ user:emptyUser, isSignedIn : false});
    }


    export {setUser, flushUser } ;

