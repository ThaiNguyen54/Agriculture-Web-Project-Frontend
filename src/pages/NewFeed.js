import '../styles/NewFeed.css'
import NavBar from '../components/Navbar';
import news from '../images/news.png'
import location from '../images/location.png'

function NewFeed(){
    return(
        <div>
            <NavBar />
            <div class="scrollbar scrollbar-primary">
                <div class="force-overflow">
                    <div className='Forum'>
                        <a href='' className='Whatnew d-flex'>
                            <img className='logo-forum' src={news}></img>
                            <p>What news?</p>
                        </a>
                        <a href='' className='Whatnew d-flex'>
                            <img className='logo-forum' src={location}></img>
                            <p>Agricultural Knowledge</p>
                        </a>
                        <a href='' className='Whatnew d-flex'>
                            <img className='logo-forum' src={location}></img>
                            <p>Agricultural Knowledge</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewFeed;