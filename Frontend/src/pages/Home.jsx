import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner2 from "../components/Home/Banner2.jsx";
import Banner3 from "../components/Home/Banner3.jsx";
import Videobanner from "../components/Home/Videobanner.jsx";
import UniversityList from "../components/Home/UniversityList.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    // Settings for the slider
    const settings = {
        dots: false,       // Show dot indicators at the bottom
        infinite: true,   // Loop the slides
        speed: 500,       // Transition speed in ms
        slidesToShow: 1,  // Show one slide at a time
        slidesToScroll: 1,// Scroll one slide at a time
        autoplay: true,   // Automatically move to the next slide
        autoplaySpeed: 2000, // Delay between slides in ms
        fade: true,           //  Enable fade animation
        cssEase: 'linear' //Set the easing for the fade
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <Videobanner />
                    </div>
                    <div>
                        <Banner2 />
                    </div>
                    <div>
                        <Banner3 />
                    </div>
                </Slider>
            </div>
            <UniversityList />
            <Footer />
        </>
    );
}

export default Home;