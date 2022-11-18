import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"
import "../styles/Login.css"
import { apiUrl } from "../Constants/constants";

function RegisterForm(){
    const [username, setUsername] = useState("");
    const [loginname, setLoginname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apassword, setAPassword] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = async(event) => {
        event.preventDefault();
        if(password === apassword)
        {
            await axios.post(`${apiUrl}/ver1/user`, {
                UserName : username,
                LoginName: loginname,
                Email: email,
                Password: password,
                apassword: apassword,
                UserRight: "BASIC_USER"
            }).then((res => {
                navigate("/");
            })).catch((err) => {
                
            })
        }
        else{
            navigate("/register");
        }
    }
    return(
        <div className="limiter d-flex justify-content-center">
            <div className="login100-form validate-form">
            <span className="login100-form-title">
                Member Register
            </span>
            <form onSubmit={HandleSubmit}>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="text" 
                        name="UserName" 
                        placeholder="User Name" 
                        onChange={(e) => {
                        setUsername(e.target.value)}}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="text" 
                        name="LoginName" 
                        placeholder="Login Name" 
                        onChange={(e) => {
                        setLoginname(e.target.value)}}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
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
                        type="password"
                        name="Password" 
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="password"
                        name="apassword" 
                        placeholder="Enter Password Again"
                        onChange={(e) => {
                            setAPassword(e.target.value)
                        }}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" type="submit">
                        Register
                    </button>
                </div>
                <div className="text-center p-t-12">
                    <span className="txt1">
                        Already have an account?
                    </span>
                    <a className="txt1" href="/login">
                        Click here
                    </a>
                </div>
            </form>
        </div>
    </div>
    );
}


export default RegisterForm;