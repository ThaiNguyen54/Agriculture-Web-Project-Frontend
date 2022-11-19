import React from "react";
import FormLogin from "../components/Body/Login/FormLogin";

function Login(){
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}

export default Login;