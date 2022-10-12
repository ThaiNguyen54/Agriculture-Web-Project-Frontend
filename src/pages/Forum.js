import NavBar from "../components/Navbar";
import Scrollnews from "../components/Scroll_news";
import Container from "react-bootstrap/esm/Container";
import ForumOption from "../components/Forum_option";
import WeatherContent from "../components/Weather_content";
import CreatePost from "../components/CreatePost";
import '../styles/NewFeed.css';
import '../styles/Forum.css';
import footerPage from "../components/Footer";


function Forum(){
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
        <footerPage />
    </div>
    );
}

export default Forum;