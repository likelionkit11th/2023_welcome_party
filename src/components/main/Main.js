import React,{useEffect} from 'react';
import '../../styles/main/Main.css'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    return (
        <>
        {/* 메인 페이지에 있는 Carousel */}
            <div className='main_container' data-aos="fade-up" data-aos-duration="2000">
                <Carousel>
                    <Carousel.Item interval={4000}>
                        <img
                        id='carousel_img1'
                            className="d-block w-100"
                            src="./images/imgMain/kit_one.png"
                            alt="kit_First slide"/>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        id='carousel_img2'
                            className="d-block w-100"
                            src="./images/imgMain/kit_two.png"
                            alt="kit_Second slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* 메인 페이지 문구 */}
            <div className='main_text' data-aos="fade-up" data-aos-duration="2500">
                <span className='main_text_en'><br/>Welcome to<br/>Kumoh Institute of Technology</span>
                <span className='main_text_ko'><br/>금오공과대학교에 오신 것을 <br />환영합니다.</span>
            </div>
        </>
    );
};

export default Main;