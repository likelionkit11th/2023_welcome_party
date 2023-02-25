import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MenuBar.css'
import MenuModal from './menuBar/MenuModal';

const MenuBar = () => {

    const [url, setUrl] = useState("");
    const [menuModal, setMenuModal] = useState(true);

    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setUrl(location.pathname);
    }, [url])

    const onMenuModal = () => {
        setMenuModal(!menuModal);
    }

    const onBackMove = () => {
        navigate(-1);
    }

    const onGoHome = () => {
        navigate('/')
    }

    return (
        <div className='footer_container'>
            <div className={(menuModal) ? 'menu_modal_none' : 'menu_modal'}>
                <MenuModal />
            </div>
            <div className='footer_box'>
                <div className='menu_left'>
                    <img onClick={onBackMove} id={(url === '/visitlog') ? 'menu_none' : 'menu_back'} src='./images/imgMenu/back.png' alt='menu'/>
                    <img onClick={onGoHome} id={(url === '/visitlog') ? 'menu_home' : 'menu_none'} src='./images/imgMenu/home.png' alt='menu'/>
                </div>
                <div className='menu_center'>
                    <img onClick={onGoHome} id={(url === '/visitlog') ? 'menu_none' : 'menu_home'} src='./images/imgMenu/home.png' alt='menu'/>
                    <img id={(url === '/visitlog') ? 'menu_writebtn' : 'menu_none'}  src='./images/imgMenu/writebtn.png' alt='menu'/>
                </div>
                <div className='menu_right'>
                    <img onClick={onMenuModal} id='menu_dots' src='./images/imgMenu/dots.png' alt='menu'/>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;