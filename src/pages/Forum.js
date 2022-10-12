import '../styles/NewFeed.css'
import NavBar from '../components/Navbar';
import ForumOption from '../components/Forum_option';
import Scrollnews from '../components/Scroll_news';
import WeatherContent from '../components/Weather_content';
import Container from 'react-bootstrap/esm/Container';
import NewsForum from '../components/Forum_content';
import Footer from '../components/Footer';

const Forum = () => {
    return(
        <div className='all-content-newfeed'>
            <Scrollnews />
            <div className='body-content d-flex'>
                <Container className="dis-flex">
                    <ForumOption />
                    <NewsForum />
                    <WeatherContent />
                </Container>
            </div>
            <Footer/>
        </div>
    );
}

export default Forum;