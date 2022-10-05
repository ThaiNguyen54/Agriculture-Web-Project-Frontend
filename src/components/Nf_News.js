import newsContentImage1 from '../images/news-1.jpg'

function NewsNfeed(){
    return(
        <div className='d-flex card-news-content row justify-content-center'>
            <div>
                <h2>First Content</h2>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news1"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news2"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news2"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news2"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news2"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card card-news col-lg-4 col-md-6">
                <img className="card-img-top" src={newsContentImage1} alt="news2"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}


export default NewsNfeed;