import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"
import "../styles/Login.css"

function RegisterForm(){
    const [email, setEmail] = useState("");
    const [bthday, setBthday] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [apassword, setAPassword] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = async(event) => {
        event.preventDefault();
        if(password === apassword)
        {
            //https://agriculture-app12-api.herokuapp.com/register
            //http://localhost:3001/register
            await axios.post("//http://localhost:3001/register", {
                email : email,
                bthday: bthday,
                fname: fname,
                lname: lname,
                password: password,
                apassword: apassword
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
                        name="email" 
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
                        name="fname" 
                        placeholder="First Name" 
                        onChange={(e) => {
                        setFname(e.target.value)}}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="text" 
                        name="lname" 
                        placeholder="Last Name" 
                        onChange={(e) => {
                        setLname(e.target.value)}}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="date" 
                        name="bthday" 
                        placeholder="Birthday" 
                        onChange={(e) => {
                        setBthday(e.target.value)}}>
                    </input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="wrap-input100 validate-input">
                    <input className="input100" 
                        type="password"
                        name="password" 
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
            </form>
        </div>
    </div>
    );
}


export default RegisterForm;