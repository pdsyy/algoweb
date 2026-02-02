import React, {useState} from 'react';
import cross from "../images/popup_cross.svg"
import YearMonthHandler from "./YearMonthHandler";

const PopupBot = ({bot_info = [], bot_name, price, isActive, setIsActive}) => {

     return (
        <div className={`popup_fs ${isActive ? "active_popup" : ""}`} onClick={() => {
            setIsActive(false)
        }}>
            <div className="popup_container_gradient" onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="popup_container">
                    <div className="popup_head">
                        <div className="popup_bot_name">
                            {bot_name}
                        </div>
                        <div className="forex_text">
                            Forex trading bot
                        </div>
                        <div className="cross_block_popup" onClick={() => {setIsActive(false)}}>
                            <img src={cross} alt=""/>
                        </div>
                    </div>

                    <div className="contact_info_block">
                        <div className="contact_block_popup">
                            <div className="contact_us_text">Звʼяжіться з нами</div>
                            <YearMonthHandler leftItem="Telegram" rightItem="Instagram"/>

                            <div className = "popup_input_theme">
                                Ваше імʼя
                            </div>
                            <input type = "text" placeholder = "Ваше імʼя" className = "popup_input"/>

                            <div className = "popup_input_theme">
                                Ваша пошта або телеграм
                            </div>
                            <input type = "text" placeholder = "Пошта або телеграм" className = "popup_input"/>

                            <div className = "send_button">
                                Відправити
                            </div>

                            <div className = "letter_us">
                                <hr/>
                                <div>Або напишіть нам</div>
                                <hr/>
                            </div>
                            <div className = "telegram_btn">
                                Написати в телеграм
                            </div>
                        </div>


                        <div className = "popup_bot_info">

                            {bot_info.map((e) => <div className = "bot_info_item">
                                <div className = "circle_bot_info"></div>
                                {e}
                            </div>)}

                            <div className = "popup_price">
                                <div className = "price_text_popup">
                                    Ціна
                                </div>

                                <div className = "price_container">
                                    <div className = "paying">
                                        Доступна оплата частями
                                    </div>
                                    <div className = "price_main">
                                        ${price}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupBot;