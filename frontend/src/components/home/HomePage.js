import React from "react";
import image1 from "../../assets/images/img-2.png";
import image2 from "../../assets/images/s-img-1.jpeg";
import image3 from "../../assets/images/s-img-2.jpeg";
import image4 from "../../assets/images/s-img-3.jpeg";
import image5 from "../../assets/images/s-img-4.jpeg";
import image6 from "../../assets/images/s-img-5.jpeg";
import image7 from "../../assets/images/s-img-6.jpeg";
import image8 from "../../assets/images/s-img-10.jpeg";
import image9 from "../../assets/images/s-img-11.jpeg";


function HomePage() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Save Earth to Save Life!</h3>
                    <p className="card-info">
                        Climate change is the big environmental problem that humanity will face over the next decade, 
                        but it isn't the only one. We'll take a look at some of them — from water shortages and loss of 
                        biodiversity to waste management — and discuss the challenges we have ahead of us.
                    </p>
                    
                </div>  
            </div>
            <div>
                <img src={image1} alt="global warming" className="home-banner" />   
            </div>
            <div className="box">
                <div>
                <a href="https://www.youtube.com/watch?v=e6rglsLy1Ys" target="blank" > 
                <img src={image2} alt="global warming1" className="s-img" />                
                <p>Air pollution</p>
                </a>
                </div>
                <div>
                <a href="https://www.youtube.com/watch?v=e6rglsLy1Ys" target="blank" > 
                <img src={image3} alt="global warming2" className="s-img" />
                <p>Global warming</p>
                </a>
                </div>
                <div>
                <a href="https://www.youtube.com/watch?v=e6rglsLy1Ys" target="blank" >
                <img src={image4} alt="global warming3" className="s-img" />
                <p>Environment pollution</p>
                </a>
                </div>
                <div>
                <img src={image5} alt="global warming4" className="s-img" />
                <p>Environment pollution</p>
                </div>
                <div>
                <img src={image6} alt="global warming5" className="s-img" />
                <p>Environment pollution</p>
                </div>
                <div>
                <img src={image7} alt="global warming6" className="s-img" />
                <p>Environment pollution</p>
                </div>
                <div>
                <img src={image8} alt="global warming7" className="s-img" />
                <p>Environment pollution</p>
                </div>
                <div>
                <img src={image9} alt="global warming8" className="s-img" />
                <p>Environment pollution</p>
                </div>
            </div>
            {/* </div>Contact & Social Media Information */}
            <footer className="footer">
                <ul className="contact-list">
                
                    <li>
                        <a href="https://www.instagram.com/accounts/login/" target="blank"> Instagram
                        <i className="fab fa-instagram-square"></i>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.facebook.com/" target="blank" > Facebook
                        <i className="fab fa-facebook"></i>
                        </a>
                    </li>  
                    
                    <li>
                        <a href="https://www.youtube.com/watch?v=AW4q0a2lfm8/" target="blank" > Youtube
                        <i class="fab fa-youtube"></i>
                        </a>
                    </li> 
                </ul>    
            </footer>  

        </div>
    );
}

export default HomePage;