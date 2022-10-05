import notification from '../images/bell.png'
import setting from '../images/setting.png'
import user from '../images/user.png'
import cicada from '../images/explore.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'


const NavBar = () => {
    const [displayDropdown, setDisplayDropdown] = useState(true);
    const location = useLocation();
    const HandleDropdown = async() => {
        setDisplayDropdown(!displayDropdown);
    }
    return (
        <div>
            <header>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand logo-brand">
                        <img src={cicada} alt="logo-brand"></img>
                    </div>
                    <div className="searching">
                        <div className="wrap-input100 validate-input input-searching">
                            <input className="input100" 
                                type="text"
                                placeholder="Search">
                            </input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <a className='hyper-navbar' href='/'>Chăn nuôi</a>
                    <a className='hyper-navbar' href='/'>Trồng trọt</a>
                    <a className='hyper-navbar' href='/'>Mua và bán</a>
                    <div className='navbar-item-left d-flex'>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={notification} alt="buying"></img></button>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={setting} alt="buying"></img></button>
                        <div>
                            <button type="button" onClick={HandleDropdown} class="btn-lg"><img className="image-item item-left" src={user} alt="buying"></img></button>
                            <div className="dropdown-menu" style={{display:
                                displayDropdown?(
                                    "none"
                                ):(
                                    "grid"
                                )}}>
                                <h3 className="name-dropdown">Hello, {location.state.lname}</h3>
                                <a className="dropdown-item" href="/">Profile</a>
                                <a className="dropdown-item" href="/">Settings</a>
                                <a className="dropdown-item" href="/">Log out</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </header>
        </div>
    );
}

export default NavBar;