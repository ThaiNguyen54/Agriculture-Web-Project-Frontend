import news from '../images/news.png'
import location from '../images/location.png'

function ForumOption(){
    return(
        <div class="scrollbar scrollbar-primary">
            <div class="force-overflow">
                <div className='Forum'>
                    <p>Diễn đàn</p>
                    <a href='' className='Whatnew d-flex'>
                        <img className='logo-forum' src={news}></img>
                        <p>Hôm nay có gì?</p>
                    </a>
                    <a href='' className='Whatnew d-flex'>
                        <img className='logo-forum' src={location}></img>
                        <p>Kiến thức nhà nông</p>
                    </a>
                    <a href='' className='Whatnew d-flex'>
                        <img className='logo-forum' src={location}></img>
                        <p>Agricultural Knowledge</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ForumOption;