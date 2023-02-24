import React, {useState} from "react";
import "../../styles/menuBar/MenuBar.css";
import { Link,useNavigate } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";
import {BiArrowBack} from "react-icons/bi";
import {IoEllipsisHorizontalSharp} from "react-icons/io5";
import MenuModal from "./MenuModal";

const MenuBarBooth = () => {
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const navigate = useNavigate();
    
    const clickBackArrow = () => {
        navigate(-1);
    }

    const onOpenMenuModal = () => {
        setOpenMenuModal(!openMenuModal);
    }

    return (
        <>
            {openMenuModal && <MenuModal />}
            <div className="menuBarContainer">
                <div className="menuBar">
                    <BiArrowBack onClick={clickBackArrow} className="icon" size="34" />
                    <Link className="link" to="/">
                        <AiFillHome size={34} className="icon" />
                    </Link>
                    <IoEllipsisHorizontalSharp onClick={onOpenMenuModal} className="icon" size="34" />
                </div>
            </div>
        </>
    )
}

export default MenuBarBooth;