import React, {useEffect} from 'react';
import '../../styles/schedule/ScheduleList.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ScheduleList = ({active}) => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    return (
        <div className='schedule_list_container'>
            <div className='schedule_list_box'>
                <div className='today_schedule'>
                    <span className='today_schedule_text'>오늘의 일정</span>
                </div>

                {/* 8일 스케줄 */}
                <div className={(active) ? '8th_schedule_list' : 'schedule_list_none'} data-aos="fade-up" data-aos-duration="2000">
                    <div className='schedule_list_card'>
                        <div className='card_content'>
                            <span className='schedule_name'>동아리 박람회<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;잔디밭<br/></span>
                            </div>
                            <span className='sl_time'>09:00 - 18:00</span>
                        </div>
                    </div>
                </div>

                {/* 9일 스케줄 */}
                <div className={(active) ? 'schedule_list_none' : '9th_schedule_list'} data-aos="fade-up" data-aos-duration="2000">
                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>동아리 박람회<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;잔디밭<br/></span>
                            </div>
                            <span className='sl_time'>09:00 - 18:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>공동구매 부스 (실험복 & 계산기)<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;학생회관 농구대 앞<br/></span>
                            </div>
                            <span className='sl_time'>09:00 - 18:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>공동구매 부스 (생필품)<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;기숙사 삼거리<br/></span>
                            </div>
                            <span className='sl_time'>09:00 - 18:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>책 벼룩시장<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;학생회관 편의점 맞은편<br/></span>
                            </div>
                            <span className='sl_time'>10:00 - 17:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>스탬프 투어<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;교내</span>
                            </div>
                            <span className='sl_time'>13:00 - 18:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500"> 
                        <div className='card_content'>
                            <span className='schedule_name'>동아리 공연<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;잔디밭<br/></span>
                            </div>
                            <span className='sl_time'>19:00 - 21:00</span>
                        </div>
                    </div>

                    <div className='schedule_list_card' data-aos="fade-up" data-aos-duration="2500">
                        <div className='card_content'>
                            <span className='schedule_name'>신입생 환영 공연<br /></span>
                            <div className='sl_location'>
                                <img src='./images/imgSchedule/marker.png' alt='location marker'/>
                                <span className='sl_location'>&nbsp;잔디밭<br/></span>
                            </div>
                            <span className='sl_time'>21:00 - 21:30</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ScheduleList;