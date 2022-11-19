
import Scrollnews from "../components/Scroll_news";
import Container from "react-bootstrap/esm/Container";
import ForumOption from "../components/Forum_option";
import WeatherContent from "../components/Weather_content";
import '../styles/NewFeed.css';
import '../styles/ForumBreed.css';
import ForumcropContent from "../components/forumcrop_content";


function ForumCrop(){
    return(
    <div className='all-content-newfeed'>
        <Scrollnews />
        <div className='body-content d-flex'>
            <Container className="dis-flex">
                <ForumOption />
                <ForumcropContent/>
                <WeatherContent />
            </Container>
        </div>
    </div>
    );
}

export default ForumCrop;