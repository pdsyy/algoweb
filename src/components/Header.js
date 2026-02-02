import React, {useState} from 'react';
import logo from "../images/logo.svg"

const Header = () => {
    const lang = localStorage.getItem("algo_lang") === "UA"
    console.log(lang)
    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div className = {`header_container ${activeMenu ? "active_menu" : ""}`}>
            <div className = "header">
                <a href  = "/"><img src = {logo} alt = "" className = "logo_img"/></a>
                <div className = "desktop_header_menu">
                    <div>Як працюють</div>
                    <div>Переваги</div>
                    <div>Каталог ботів</div>
                    <div>Відгуки</div>
                    <div>FAQ</div>
                </div>
                <div className = "lang_select_block">
                    <div className = "languages_block">
                        <div className = {lang ? "active" : ""}>UA</div>
                        <div className = {lang ? "" : "active"}>RU</div>
                    </div>
                    <div className = "select_bot_button">
                        Обрати бота
                    </div>
                </div>

                <div className = "burger_menu" onClick = {() => {
                    setActiveMenu(!activeMenu)
                }}>
                    <div className = "burger_lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className = "mobile_menu">
                <div className = "menu_item">Як працюють</div>
                <div className = "menu_item">Переваги</div>
                <div className = "menu_item">Каталог ботів</div>
                <div className = "menu_item">Відгуки</div>
                <div className = "menu_item">FAQ</div>
                <div className = "languages_block_mobile">
                    <div className = "lang_mob active_item">UA</div>
                    <div className = "lang_mob">RU</div>
                </div>
                <div className = "select_bot_button_mobile">
                    Обрати бота
                </div>
            </div>
        </div>

    );
};

export default Header;