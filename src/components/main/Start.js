import React, {useEffect}  from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/main/Start.css"
import { useNavigate } from 'react-router-dom';

const Start = () => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

      const navigate = useNavigate();

    //  Let's start 버튼 클릭 시 동아리 부스 페이지로 넘어감
      const onClubBooth = () => {
        navigate('/booth')
      }

    return (
        // Let's start 버튼
        <section className='start_btn_container' data-aos="fade-up" data-aos-duration="3000">
            <div className='start_btn' onClick={onClubBooth}>
                <span className='start_btn_text'>Let's start</span>
            </div>
        </section>
    );
};

export default Start;