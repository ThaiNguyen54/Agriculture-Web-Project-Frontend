
import Scrollnews from "../components/Scroll_news";
import Container from "react-bootstrap/esm/Container";
import ForumOption from "../components/Body/Forum/Forum_option";
import WeatherContent from "../components/Weather_content";
import '../styles/NewFeed.css';
import '../styles/ForumBreed.css';
import ForumbreedContent from "../components/Body/Forum/Forumbreed_content";


function ForumBreed(){
    return(
    <div className='all-content-newfeed'>
        <Scrollnews />
        <div className='body-content d-flex'>
            <Container className="dis-flex">
                <ForumOption />
                <ForumbreedContent/>
                <WeatherContent />
            </Container>
        </div>
    </div>
    );
}

export default ForumBreed;