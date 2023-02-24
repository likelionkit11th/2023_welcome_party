import React,{useState,useEffect} from 'react';
import  '../../styles/clubBooth/Slide.css';
import { motion } from "framer-motion"
import DetailBox from './DetailBox';
import axios from 'axios';

const Slide = ({setBtnBool,btnBool}) => {
    const [slideState,setSlideState] = useState({y:-100});
    const [clubData,setClubData] = useState({});

    const clickBtn = ()=>{
        setBtnBool(!btnBool);
        (btnBool) ? setSlideState({y:-450}) : setSlideState({y:-100});
    };

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/booth')
        .then((res) => {
            console.log(res.data);
            setClubData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return (
        <motion.div id="slideDiv" animate={slideState}>
            <section>
                <button type='button'><img onClick={clickBtn} src='/images/imgClubBooth/line.png' alt='line' /></button>
            </section>
            <section id='slideSection'>
                <h2 id='clubBigTitle'><b>동아리</b></h2>
                <hr />
            </section>
            <DetailBox clubData={clubData}/>
        </motion.div>
    );
};

export default Slide;