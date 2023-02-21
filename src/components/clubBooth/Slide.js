import React,{useState} from 'react';
import  '../../styles/clubBooth/Slide.css';
import { motion } from "framer-motion"
import DetailBox from './DetailBox';

const Slide = ({setBtnBool,btnBool}) => {
    
    const [slideState,setSlideState] = useState({y:-100});

    const clickBtn = ()=>{
        setBtnBool(!btnBool);
        (btnBool) ? setSlideState({y:-450}) : setSlideState({y:-100});

    };

    return (
        <motion.div id="slideDiv" animate={slideState}>
            <section>
                <button type='button'><img onClick={clickBtn} src='/images/imgClubBooth/line.png' alt='line' /></button>
            </section>
            <section id='slideSection'>
                <h2 id='clubBigTitle'><b>동아리</b></h2>
                <hr />
            </section>
            <DetailBox/>
        </motion.div>
    );
};

export default Slide;