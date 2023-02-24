import React,{useState,useEffect} from 'react';
import  '../../styles/clubBooth/Slide.css';
import { motion } from "framer-motion"
import DetailBox from './DetailBox';
import axios from 'axios';

const Slide = ({setBtnBool,btnBool}) => {
    const [slideState,setSlideState] = useState({y:-100});
    const [clubData,setClubData] = useState([]);

    const clickBtn = ()=>{
        setBtnBool(!btnBool);
        (btnBool) ? setSlideState({y:-450}) : setSlideState({y:-100});
    };

    useEffect(()=>{
        axios.get('https://port-0-nodeservertest-r8xoo2mleif97lj.sel3.cloudtype.app/booth')
        .then((res) => {
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
            {
                clubData.map((ele, i)=>{
                    return <DetailBox key={i} title={ele.name} category={ele.category} location={ele.location} img={ele.img} introduction={ele.introduction}/>
                })
            }
            
        </motion.div>
    );
};

export default Slide;