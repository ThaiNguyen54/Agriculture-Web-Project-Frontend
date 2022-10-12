import '../styles/NewFeed.css'
import NavBar from '../components/Navbar';
import ForumOption from '../components/Forum_option';
import NewsNfeed from '../components/Nf_News';
import Scrollnews from '../components/Scroll_news';
import WeatherContent from '../components/Weather_content';
import Container from 'react-bootstrap/esm/Container';

function NewFeed(){
    return(
        <div className='all-content-newfeed'>
            <Scrollnews />
            <div className='body-content d-flex'>
                <Container className="dis-flex">
                    <ForumOption />
                    <NewsNfeed />
                    <WeatherContent />
                </Container>
            </div>
        </div>
    );
}

export default NewFeed;