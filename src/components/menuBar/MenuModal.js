import React from "react";
import "../../styles/menuBar/MenuModal.css"
import { Link } from "react-router-dom";

const MenuModal = () => {
    return (
        <div className="menuModalContainer">
            <div className="menuModal">
                <Link className="modalBox" to="/booth" >
                    <div className="page">
                        동아리
                    </div>
                </Link>
                <Link className="modalBox_border" to="/schedule">
                    <div className="page">
                        오늘의 일정
                    </div>
                </Link>
                <Link className="modalBox" to="/visitlog">
                <div className="page">
                    방명록
                </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuModal;