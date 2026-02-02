import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Если используете react-router-dom
import logo from "../images/logo.svg";
import {useScroll} from "../context/ScrollContext";

const Header = () => {
    const lang = localStorage.getItem("algo_lang") === "UA";
    const { scrollToSection } = useScroll();
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenuClick = (id) => {
        scrollToSection(id);
        setActiveMenu(false);
    };

    const menuItems = [
        { name: "Як працюють", id: "how-it-works" },
        { name: "Переваги", id: "advantages" },
        { name: "Каталог ботів", id: "catalog" },
        { name: "Відгуки", id: "reviews" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <div className={`header_container ${activeMenu ? "active_menu" : ""}`}>
            <div className="header">
                <a href="/"><img src={logo} alt="" className="logo_img" /></a>
                <div className="desktop_header_menu">
                    {menuItems.map((item) => (
                        <div key={item.id} onClick={() => handleMenuClick(item.id)}>
                            {item.name}
                        </div>
                    ))}
                </div>

                <div className="lang_select_block">
                    <div className="languages_block">
                        <div className={lang ? "active" : ""}>UA</div>
                        <div className={lang ? "" : "active"}>RU</div>
                    </div>
                    <div className="select_bot_button" onClick={() => handleMenuClick("catalog")}>
                        Обрати бота
                    </div>
                </div>

                <div className="burger_menu" onClick={() => setActiveMenu(!activeMenu)}>
                    <div className="burger_lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="mobile_menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu_item" onClick={() => handleMenuClick(item.id)}>
                        {item.name}
                    </div>
                ))}
                <div className="languages_block_mobile">
                    <div className="lang_mob active_item">UA</div>
                    <div className="lang_mob">RU</div>
                </div>
                <div className="select_bot_button_mobile">
                    Обрати бота
                </div>
            </div>
        </div>
    );
};

export default Header;