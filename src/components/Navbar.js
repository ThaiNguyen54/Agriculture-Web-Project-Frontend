import seafood from '../images/seafood.png'
import agriculture from '../images/agriculture.png'
import buying from '../images/buying.png'
import livestock from '../images/livestock.png'
import notification from '../images/bell.png'
import message from '../images/messenger.png'
import setting from '../images/setting.png'
import user from '../images/user.png'
import cicada from '../images/explore.png'


const NavBar = () => {
    return (
        <div>
            <header>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand logo-brand">
                        <img src={cicada}></img>
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
                    <div className='navbar-item'>
                        <button type="button" class="btn btn-default btn-circle btn-lg"><img className="image-item" src={seafood} alt="seafood"></img></button>
                    </div>
                    <div className='navbar-item'>
                        <button type="button" class="btn btn-default btn-circle btn-lg"><img className="image-item" src={agriculture} alt="agriculture"></img></button>
                    </div>
                    <div className='navbar-item'>
                        <button type="button" class="btn btn-default btn-circle btn-lg"><img className="image-item" src={livestock} alt="buying"></img></button>
                    </div>
                    <div className='navbar-item'>
                        <button type="button" class="btn btn-default btn-circle btn-lg"><img className="image-item" src={buying} alt="buying"></img></button>
                    </div>
                    <div className='navbar-item-left'>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={message} alt="buying"></img></button>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={notification} alt="buying"></img></button>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={setting} alt="buying"></img></button>
                        <button type="button" class="btn-lg"><img className="image-item item-left" src={user} alt="buying"></img></button>
                    </div>
                </div> 
            </header>
        </div>
    );
}

export default NavBar;