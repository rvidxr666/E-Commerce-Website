

const Carousel = () => {
    return (
        <div>
        {/* className="container" */}
            {/* <div className="row align-items-center"> */}
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade mb-3 h-25" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.guim.co.uk/img/media/beb8ffcaefcecc9b9b25bd8b0db545d9f8aef61d/200_0_6648_3990/master/6648.jpg?width=1200&quality=85&auto=format&fit=max&s=65554f88940a4a6ed1ac498997346f51" width="500" height="500" className="d-block w-100" alt="..." style={{"background-size": "cover"}}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Skateboarding gear and outwear</h1>
                                <p><b>Browse Items</b></p>
                            </div>
                        </div>

                        <div className="carousel-item">
                        <img src="https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/Mulliner%20Batur%201920x1080.jpg/_jcr_content/renditions/original.image_file.1920.1080.file/Mulliner%20Batur%201920x1080.jpg" width="500" height="500" className="d-block w-100" alt="..." style={{"background-size": "cover"}}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Autoparts</h1>
                                <p><b>Browse Items</b></p>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://blog.japanwondertravel.com/wp-content/uploads/2021/10/Japanese-clothing-store.jpg" width="500" height="500" className="d-block w-100" alt="..." style={{"background-size": "cover"}}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Clothing</h1>
                                <p><b>Browse Items</b></p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}


export default Carousel;