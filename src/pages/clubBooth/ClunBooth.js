import React,{useState} from 'react';
import Slide from '../../components/clubBooth/Slide';
import Box from '../../components/clubBooth/Box';
import '../../styles/clubBooth/ClubBooth.css';

const ClunBooth = () => {
    const [btnBool,setBtnBool] = useState(false);

    return (
        <div id="clubDiv">
            <Box btnBool={btnBool} />
            <Slide setBtnBool={setBtnBool} btnBool={btnBool} />
        </div>
    );
};

export default ClunBooth;