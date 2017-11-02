import React from 'react';
import './index.css';

function Auth(){
    return (
        <div className="auth" id="auth-background">
            <Login />
        </div>
    );
}
function Login(){
    return(
        <div className="test">
        <div className="card">
            <div className="card-block">
                <h4 className="card-title">Log In to Bucketlist</h4>
                <hr/>
            </div>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="@Username" id="auth-form"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"  placeholder="@Password" id="auth-form"/>
                </div>
            </form>
            <div className='card-block'>
                <a href="#" className="btn btn-primary">Log In</a>
                <p className="card-text"> Click <a href="">Here</a> to register if you don't have an account.</p>
            </div>
        </div>
        </div>
    );
}
export default Auth;