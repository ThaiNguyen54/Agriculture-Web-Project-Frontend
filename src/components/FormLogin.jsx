import { useState } from "react";
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"
import "../styles/Login.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function FormLogin(){
    const [Email, setEmail] = useState("");
    const [Password, setpassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const HandleSubmit = async(event) =>{
        event.preventDefault();
        await axios.post('https://agriculture-app12-api.herokuapp.com/signup', {
            email: Email,
            password: Password
        }).then((response => {
            if(response){
                navigate('/newfeed', {state: {lname: response.data.lname}});
            }
            else{
                navigate('/');
            }
        })).catch((e)=>{
            setLoginStatus("Wrong Username / Password. Try again.");
        })
    }

    return (
        <div className="limiter">
            <div className="login100-form validate-form">
                <span className="login100-form-title">
                    Member Login
                </span>
                <form onSubmit={HandleSubmit}>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" 
                            type="text" 
                            name="Email" 
                            placeholder="Email" 
                            onChange={(e) => {
                            setEmail(e.target.value)}}>
                        </input>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" 
                            type="text"
                            name="Password" 
                            placeholder="Password"
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}>
                        </input>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit">
                            Login
                        </button>
                    </div>
                </form>
                <p>{loginStatus}</p>
                <div className="text-center p-t-12">
                    <span className="txt1">
                        Don't have account?
                    </span>
                    <a className="txt1" href="/register">
                        Click here
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;