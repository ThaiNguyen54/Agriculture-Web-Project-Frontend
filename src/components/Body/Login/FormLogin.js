import { useState } from "react";
import "../../../styles/font-awesome-4.7.0/css/font-awesome.min.css"
import "../../../styles/Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userLogin } from "../../features/user/userAction";
import logo from "../../../images/AFlogo.png";
import { loginfailed } from "../../features/user/userSlice";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function FormLogin(){
    const [loginname, setLoginname] = useState("");
    const [Password, setpassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const {userInfo, status} = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const HandleSubmit = async(event) =>{
        event.preventDefault();
        dispatch(userLogin({email: loginname, password: Password}));
    }

    useEffect(() => {
        if(status === 'succeeded' && userInfo){
            if(userInfo.success){
                navigate("/")
            }else{
                setLoginStatus(userInfo.description)
                dispatch(loginfailed(userInfo))
                navigate('/login')
            }
        }
    }, [status])

    return (
        <div className="limiter d-flex">
            <Row className="container-login-phase">
                <Col lg="6" md="12" className="validate-form">
                    <div className="login100-form">
                        <span className="login100-form-title">
                            Đăng Nhập Thành Viên
                        </span>
                        <form onSubmit={HandleSubmit}>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text" 
                                    name="LoginName" 
                                    placeholder="Tên Đăng Nhập" 
                                    onChange={(e) => {
                                    setLoginname(e.target.value)}}>
                                </input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="password"
                                    name="Password" 
                                    placeholder="Mật Khẩu"
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
                                    Đăng Nhập
                                </button>
                            </div>
                        </form>
                        <p>{loginStatus}</p>
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Bạn Chưa Có Tài Khoản?
                            </span>
                            <a className="txt1" href="/register">
                                Đăng Ký Ngay!
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="0">
                    <div  className="Logo" >
                        <img src={logo}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FormLogin;