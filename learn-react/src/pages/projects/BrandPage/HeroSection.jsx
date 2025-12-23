import React from "react";
function HeroSection(){
    return(
        <main className="hero">
            <div className="hero-contents">
                <h1>ELEGANCE IS AN ATTITUDE</h1>
                <pre>
                    Your style deserves more than ordinary.<br/>
                    Every bag is crafted with care and purpose.<br/>
                    Designed to hold what matters most to you.<br/>
                    Blending comfort, quality, and elegance.<br/>
                    Carry confidence wherever life takes you.<br/>
                </pre>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div>
                    Also available on <br/>
                    <img src="/images/flipkart.png" alt="flifcard-logo"/>
                    <img src="/images/amazon.png"/>

                </div>

            </div>
            <div className="hero-image">
                <img src="/images/bag.png"/>
            </div>
        </main>
    );
}
export default HeroSection;