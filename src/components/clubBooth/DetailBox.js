import React, {useState, useRef} from 'react';
import  '../../styles/clubBooth/DetailBox.css';
import logo from '../../assets/logo.png';
import pointer from '../../assets/pointer.png';
import map from '../../assets/map.png';

function DetailBox(clubData) {
    const [close, setClose] = useState(false);
    const imgRef = useRef();

    const click = () => {
        if (!imgRef || !imgRef.current) {
            return; 
        }
        const style = imgRef.current.style;
        if (close) {
            style.maxHeight = '0';
        } else if (!close) {
            style.maxHeight = `${imgRef.current.scrollHeight}px`;
        }
        setClose(!close);
    }

    return (
        <div className='border'>
            <div className='title'>
                <div className='left'>
                    멋쟁이사자처럼
                    <img src={pointer} alt='logo' className='img-pointer'/>
                    <span className='location'>A45</span>
                    <div className='introduction'>웹 코딩 동아리</div>
                    <div className=''></div>
                </div>
                <div className='right'>
                <button className={`${close ? 'close': 'open'}`} onClick={click}>{close ? '닫기':'위치 열기'}</button>
                </div>
            </div>
            <div className='imgBox' ref={imgRef} style={{maxHeight:'0'}}>
                <img src={map} alt='map' className='mapimg'/>
            </div>
            <div className='content'>
                <img src={logo} alt='logo' className='img-logo'/>
                <p>내 손으로 게임을 만들 수 있다고?! 나만의 게임 만들기✨</p>
            </div>
        </div>
    );
}

export default DetailBox;