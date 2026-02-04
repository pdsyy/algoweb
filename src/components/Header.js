import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Если используете react-router-dom
import logo from "../images/logo.svg";
import {useScroll} from "../context/ScrollContext";
import {useLanguage} from "../context/LanguageProvider";

const Header = () => {
    const lang = localStorage.getItem("algo_lang") === "UA";
    const { t, language, setLanguage } = useLanguage();



    const { scrollToSection } = useScroll();
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenuClick = (id) => {
        scrollToSection(id);
        setActiveMenu(false);
    };

    const menuItems = [
        { name: t.home.header.howItWorks, id: "how-it-works" },
        { name: t.home.header.advantages, id: "advantages" },
        { name: t.home.header.catalog, id: "catalog" },
        { name: t.home.header.reviews, id: "reviews" },
        { name: t.home.header.faq, id: "faq" },
    ];

    return (
        <div className={`header_container liquidGlass-wrapper ${activeMenu ? "active_menu" : ""}`}>
            <div className="liquidGlass-effect"></div>
            <div className="liquidGlass-tint"></div>
            <div className="header liquidGlass-text">
                <a href="/"><img src={logo} alt="Logo" className="logo_img" /></a>

                <div className="desktop_header_menu">
                    {menuItems.map((item) => (
                        <div key={item.id} onClick={() => handleMenuClick(item.id)}>
                            {item.name}
                        </div>
                    ))}
                </div>

                <div className="lang_select_block">
                    <div className="languages_block">
                        <div
                            className={language === "UA" ? "active" : ""}
                            onClick={() => setLanguage("UA")}
                        >
                            UA
                        </div>
                        <div
                            className={language === "RU" ? "active" : ""}
                            onClick={() => setLanguage("RU")}
                        >
                            RU
                        </div>
                    </div>
                    <div className="select_bot_button" onClick={() => handleMenuClick("catalog")}>
                        {t.home.hero.button}
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

            {/* Mobile Menu */}
            <div className="mobile_menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu_item" onClick={() => handleMenuClick(item.id)}>
                        {item.name}
                    </div>
                ))}
                <div className="languages_block_mobile">
                    <div
                        className={`lang_mob ${language === "UA" ? "active_item" : ""}`}
                        onClick={() => { setLanguage("UA"); setActiveMenu(false); }}
                    >
                        UA
                    </div>
                    <div
                        className={`lang_mob ${language === "RU" ? "active_item" : ""}`}
                        onClick={() => { setLanguage("RU"); setActiveMenu(false); }}
                    >
                        RU
                    </div>
                </div>
                <div className="select_bot_button_mobile" onClick={() => handleMenuClick("catalog")}>
                    {t.home.hero.button}
                </div>
            </div>

            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
                <filter
                    id="glass-distortion"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="2" seed="5" result="turbulence" />
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5"/>
                        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0"/>
                        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5"/>
                    </feComponentTransfer>
                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap"/>
                    <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
                        <fePointLight x="-200" y="-200" z="300"/>
                    </feSpecularLighting>
                    <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
                    {/* ВАЖНО: Safari лучше работает с SourceGraphic в DisplacementMap, когда заданы точные каналы */}
                    <feDisplacementMap in="SourceGraphic" in2="softMap" scale="50" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </div>
    );
};

export default Header;