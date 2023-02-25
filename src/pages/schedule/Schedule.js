import React, {useState, useEffect} from 'react';
import Calender from '../../components/schedule/Calender';
import ScheduleList from '../../components/schedule/ScheduleList';
import '../../styles/schedule/Schedule.css'
import AOS from "aos";
import "aos/dist/aos.css";
import MenuBar from '../../components/MenuBar';

const Schedule = () => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    const [active, setActive] = useState(true);

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Calender active={active} setActive={setActive} />
                <ScheduleList active={active} />
            </div>
            <MenuBar />
        </>
    );
};

export default Schedule;