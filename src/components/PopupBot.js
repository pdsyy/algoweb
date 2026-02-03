import React, {useState} from 'react';
import cross from "../images/popup_cross.svg"
import YearMonthHandler from "./YearMonthHandler";
import axios from "axios";
import {useLanguage} from "../context/LanguageProvider";

const PopupBot = ({bot_info = [], bot_name, price, isActive, setIsActive, activeThx, setActiveThx}) => {


    const [name, setName] = useState("")
    const [contactChanelValue, setContactChanelValue] = useState("")
    const { t } = useLanguage();
    const handlerItems = ["Telegram", "Instagram"]

    const [contactChanel, setContactChanel] = useState(handlerItems[0])

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post('/api/send-email', {
                botName: bot_name,
                contactChanel:contactChanel,
                userName: name,
                account: contactChanelValue,
            });

            if (response.status === 200) {
                setIsActive(false)
                setActiveThx(true)
                //alert('Заявка успешно отправлена!');

            }
        } catch (error) {
            console.error('Ошибка отправки:', error.response?.data || error.message);
            alert('Произошла ошибка при отправке заявки.');
        }
    };

     return (
         <div className={`popup_fs ${isActive ? "active_popup" : ""}`} onClick={() => setIsActive(false)}>
             <div className="popup_container_gradient" onClick={(e) => e.stopPropagation()}>
                 <div className="popup_container">
                     <div className="popup_head">
                         <div className="popup_bot_name">{bot_name}</div>
                         <div className="forex_text">{t.popup.subtitle}</div>
                         <div className="cross_block_popup" onClick={() => setIsActive(false)}>
                             <img src={cross} alt="close" />
                         </div>
                     </div>

                     <div className="contact_info_block">
                         <div className="contact_block_popup">
                             <div className="contact_us_text">{t.popup.title}</div>
                             <YearMonthHandler
                                 leftItem={handlerItems[0]}
                                 rightItem={handlerItems[1]}
                                 handleValue={contactChanel}
                                 setHandleValue={setContactChanel}
                             />

                             <div className="popup_input_theme">{t.popup.labels.name}</div>
                             <input
                                 type="text"
                                 placeholder={t.popup.placeholders.name}
                                 className="popup_input"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                             />

                             <div className="popup_input_theme">
                                 {t.popup.labels.contact} {contactChanel === "Telegram" ? t.popup.channels.tg : t.popup.channels.inst}
                             </div>
                             <input
                                 type="text"
                                 placeholder={contactChanel === "Telegram" ? t.popup.channels.tg : t.popup.channels.inst}
                                 className="popup_input"
                                 value={contactChanelValue}
                                 onChange={e => setContactChanelValue(e.target.value)}
                             />

                             <div className="send_button" onClick={handleFormSubmit}>
                                 {t.popup.submit}
                             </div>

                             <div className="letter_us">
                                 <hr/>
                                 <div>{t.popup.or}</div>
                                 <hr/>
                             </div>
                             <a href="https://t.me/alg0_o" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                                 <div className="telegram_btn">
                                     {t.popup.writeTg}
                                 </div>
                             </a>
                         </div>

                         <div className="popup_bot_info">
                             {bot_info.map((e, idx) => (
                                 <div className="bot_info_item" key={idx}>
                                     <div className="circle_bot_info"></div>
                                     {e}
                                 </div>
                             ))}

                             <div className="popup_price">
                                 <div className="price_text_popup">{t.terra.buy.price}</div>
                                 <div className="price_container">
                                     <div className="paying">{t.home.catalog.payingLabel}</div>
                                     <div className="price_main">${price}</div>
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