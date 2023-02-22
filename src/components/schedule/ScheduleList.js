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

            </div>
        </div>
    );
};

export default ScheduleList;