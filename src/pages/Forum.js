import '../styles/NewFeed.css'
import ForumOption from '../components/Body/Forum/Forum_option';
import Scrollnews from '../components/Scroll_news';
import WeatherContent from '../components/Weather_content';
import Container from 'react-bootstrap/esm/Container';
import NewsForum from '../components/Body/Forum/Forum_content';

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
        </div>
    );
}

export default Forum;