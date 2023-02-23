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
                <Link className="modalBox" to="/schedule">
                    <div className="page">
                        강연
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