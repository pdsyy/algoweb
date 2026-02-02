import React, {useState} from 'react';
import cross from "../images/popup_cross.svg";

const ThxPopup = () => {

    const [activePopup, setActivePopup] = useState(false)

    return (
        <div className={`popup_fs ${activePopup ? "active_popup" : ""}`} onClick={() => {
            setActivePopup(false)
        }}>
            <div className="popup_container_gradient" onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="popup_container">
                    <div className="thx_tex">
                        Дякуємо! Вашу заявку успішно відправлено.
                        <div className="cross_block_popup" onClick={() => {
                            setActivePopup(false)
                        }}>
                            <img src={cross} alt=""/>
                        </div>
                    </div>

                    <div className="thx_desc">
                        Наш менеджер опрацює інформацію та зв'яжеться з вами протягом найближчого часу для уточнення
                        деталей. Гарного дня!
                    </div>

                    <a href="/">
                        <div className="main_page_button">
                            На головну
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThxPopup;