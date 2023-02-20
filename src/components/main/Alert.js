import React from 'react';
import '../../styles/main/Alert.css'

const Alert = () => {
    return (
        <div>
            <div className='alert'>
                <div className='alert-box'>
                    <span>모바일(스마트폰)에 최적화된 프로그램입니다.<br/>모바일 환경에서 접속해 주세요!!<br/><br/><br/></span>
                    <img
                        id='alert_likelionkit_logo'
                        src='./images/imgMain/LIKELION_kit.png'
                        alt='LIKELIOM kit'/>
                    <span><br/>멋쟁이사자처럼 11기 금오공과대학교</span>
                </div>
            </div>
        </div>
    );
};

export default Alert;