import React, {useState, useEffect} from 'react';
import Calender from '../../components/schedule/Calender';
import ScheduleList from '../../components/schedule/ScheduleList';
import '../../styles/schedule/Schedule.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Schedule = () => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })


    const [active, onActive] = useState(true);

    return (
        <section data-aos="fade-up" data-aos-duration="1500">
            <Calender active={active} onActive={onActive} />
            <ScheduleList active={active} />
        </section>
    );
};

export default Schedule;