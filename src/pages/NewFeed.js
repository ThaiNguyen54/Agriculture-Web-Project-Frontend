import '../styles/NewFeed.css'
import ForumOption from '../components/Body/Forum/Forum_option';
import NewsNfeed from '../components/Body/Nf_News';
import Scrollnews from '../components/Scroll_news';
import WeatherContent from '../components/Weather_content';
import Container from 'react-bootstrap/esm/Container';

const NewFeed = () =>{
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