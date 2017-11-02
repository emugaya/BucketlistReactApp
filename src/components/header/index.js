import React from 'react';
import './index.css';

function Header(){
    return(
        <div className="navbar navbar-light bg-custom-color">
        <BucketlistIcon />
        <UserLoggedIn />
        </div>
    );
}

function BucketlistIcon(){
    return (
            <a class="navbar-brand" href="#">
                <i className="fa fa-bitbucket "/> BucketList</a>
    );
}

function UserLoggedIn(){
    if (localStorage.getItem('loggedin')){
        return (
            <i className="fa fa-user-circle-o user-circle-button"/>
        );
    } else{
        return (
            <i className="fa fa-sign-in sign-up-button"/>
        );
    }
}
export default Header;
