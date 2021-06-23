import React from 'react'
import FacebookLogin from 'react-facebook-login';

 const Login = (props) => {
    return (
        <div className="row text-center mt-5">
            <div className="col my-5">
                <h2 className="mb-5 fs-3">Log in using facebook to proceed</h2>
              <FacebookLogin
            appId="137347345042510"
            autoLoad={false}
            fields="picture"
            callback={props.responseFacebook} />  
            </div>
            
        </div>
    )
}

export default Login;
