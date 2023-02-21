import React,{useState} from 'react';
import  '../../styles/clubBooth/Slide.css';
import { motion } from "framer-motion"

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
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Why do we use it?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </motion.div>
    );
};

export default Slide;