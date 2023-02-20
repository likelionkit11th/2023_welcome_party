import React from 'react';
import Main from '../../components/main/Main';
import Start from '../../components/main/Start';
import '../../styles/main/MainPage.css'

const MainPage = () => {
    return (
        <div className='main_page_container'>
            <Main />
            <Start />
        </div>
    );
};

export default MainPage;