import React from 'react';
import  '../../styles/clubBooth/Box.css';
import banner from '../../assets/banner.png';

const Box = () => {
    return (
        <>
            <div className='clickBoxDiv'>
                <a id="golink" href='https://lava-ambulance-a28.notion.site/9f46d93cd8fb48b685aeb2334cd52a1b'><img id='banner' src={banner} alt='banner'/></a>
                <img id="schoolImg" src='/images/imgClubBooth/school.png' alt='school' />
            </div>
        </>
    );
};

export default Box;