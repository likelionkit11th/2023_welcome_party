import React, {useState, useRef} from 'react';
import  '../../styles/clubBooth/DetailBox.css';
// import logo from '../../assets/logo.png';
import pointer from '../../assets/pointer.png';
import map from '../../assets/map2.png';

function DetailBox({title, category, location, img, introduction}) {
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
                    <span className='titlement'>{title}</span>
                    <img src={pointer} alt='logo' className='img-pointer'/>
                    <span className='location'>{location}</span>
                    <div className='introduction'>{category}</div>
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
                <img src={img} alt='logo' className='img'/>
                <p>{introduction}</p>
            </div>
        </div>
    );
}

export default DetailBox;