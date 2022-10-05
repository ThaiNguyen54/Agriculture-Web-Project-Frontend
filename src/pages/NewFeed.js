import '../styles/NewFeed.css'
import NavBar from '../components/Navbar';
import ForumOption from '../components/Forum_option';
import NewsNfeed from '../components/Nf_News';
import Scrollnews from '../components/Scroll_news';
import WeatherContent from '../components/Weather_content';

function NewFeed(){
    return(
        <div>
            <NavBar />
            <Scrollnews />
            <div className='body-content d-flex'>
                <ForumOption />
                <NewsNfeed />
                <WeatherContent />
            </div>
        </div>
    );
}

export default NewFeed;