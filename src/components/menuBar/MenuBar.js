import React, {useState} from "react";
import "../../styles/menuBar/MenuBar.css";
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";
import {IoEllipsisHorizontalSharp} from "react-icons/io5";
import MenuModal from "./MenuModal";

const MenuBar = ({open, setOpen}) => {
    const [openMenuModal, setOpenMenuModal] = useState(false);
    
    const onOpenModal = () => {
        setOpen(!open);
    }

    const onOpenMenuModal = () => {
        setOpenMenuModal(!openMenuModal);
    }

    return (
        <>
            {openMenuModal && <MenuModal />}
            <div className="menuBarContainer">
                <div className="menuBar">
                    <Link className="link" to="/">
                        <AiFillHome size={34} className="icon" />
                    </Link>
                    <BsPencilSquare onClick={onOpenModal} className="icon" size="34" />
                    <IoEllipsisHorizontalSharp onClick={onOpenMenuModal} className="icon" size="34" />
                </div>
            </div>
        </>
    )
}

export default MenuBar;