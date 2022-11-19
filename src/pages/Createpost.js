import Scrollnews from "../components/Scroll_news";
import Container from "react-bootstrap/esm/Container";
import ForumOption from "../components/Body/Forum/Forum_option";
import WeatherContent from "../components/Weather_content";
import '../styles/NewFeed.css';
import '../styles/ForumBreed.css';
import footerPage from "../components/Footer/Footer";
import CreatePost from "../components/Body/UploadPost/CreatePost";


function Createpost(){
    return(
    <div className='all-content-newfeed'>
        <Scrollnews />
        <div className='body-content d-flex'>
            <Container className="dis-flex">
                <ForumOption />
                <CreatePost />
                <WeatherContent />
            </Container>
        </div>
    </div>
    );
}

export default Createpost;