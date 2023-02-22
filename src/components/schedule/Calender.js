import React from 'react';
import '../../styles/schedule/Calender.css'

const Calender = ({active, onActive}) => {

    const onEight = () => {
        if (active === false) {
            onActive(!active);
        }
    }

    const onNine = () => {
        if (active === true) {
            onActive(!active);
        }
    }

    return (
        <section>
            {/* 3/8 수요일 */}
            <div className={(active) ? 'schedule_calendar_w' : 'schedule_calendar_none'}>
                <div className='month_box'>
                    <span className='schedule_calendar_day'><br />Wednesday<br /></span>
                    <span className='schedule_calendar_date'>March 03.2023</span>
                </div>
                <div className='day_box'>
                    <span className='weekend_sun'>S</span>
                    <span className='weekday'>M</span>
                    <span className='weekday'>T</span>
                    <span className='weekday'>W</span>
                    <span className='weekday'>T</span>
                    <span className='weekday'>F</span>
                    <span className='weekend_sat'>S</span>
                </div>
                <div className='date_box'>
                    <span className='weekend_sun'>5</span>
                    <span className='weekday'>6</span>
                    <span className='weekday'>7</span>
                    <span className={(active) ? 'weekday_on' : 'weekday'} onClick={onEight}>8</span>
                    <span className={(active) ? 'weekday' : 'weekday_on'} onClick={onNine}>9</span>
                    <span className='weekday'>10</span>
                    <span className='weekend_sat'>11</span>
                </div>
            </div>

            {/* 3/9 목요일 */}
            <div className={(active) ? 'schedule_calendar_none' : 'schedule_calendar_t'}>
                <div className='month_box'>
                    <span className='schedule_calendar_day'><br />Thursday<br /></span>
                    <span className='schedule_calendar_date'>March 03.2023</span>
                </div>
                <div className='day_box'>
                    <span className='weekend_sun'>S</span>
                    <span className='weekday'>M</span>
                    <span className='weekday'>T</span>
                    <span className='weekday'>W</span>
                    <span className='weekday'>T</span>
                    <span className='weekday'>F</span>
                    <span className='weekend_sat'>S</span>
                </div>
                <div className='date_box'>
                    <span className='weekend_sun'>5</span>
                    <span className='weekday'>6</span>
                    <span className='weekday'>7</span>
                    <span className={(active) ? 'weekday_on' : 'weekday'} onClick={onEight}>8</span>
                    <span className={(active) ? 'weekday' : 'weekday_on'} onClick={onNine}>9</span>
                    <span className='weekday'>10</span>
                    <span className='weekend_sat'>11</span>
                </div>
            </div>
        </section>
    );
};

export default Calender;