import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const HandClick = () => {
        navigate("/login")
    }
    return(
        <div>
            <h1>Successful Route</h1>
            <button className="login100-form-btn" onClick={HandClick}>
                Login
            </button>
        </div>
    );
}

export default Home;