import React, {useEffect, useRef, useState} from 'react';
import "./mainPageStyle.css"
import mainBlockBg from "./images/mainBlockBg.png"
import mainBlockBgMobile from "./images/MainBlockBgMobile.png"
import metalPackage from "./images/Metal-Packages.png"
import market_image1 from "./images/market_image1.svg"
import market_image2 from "./images/market_image2.svg"
import market_image3 from "./images/market_image3.svg"
import market_image4 from "./images/market_image4.svg"
import market_image5 from "./images/market_image5.svg"
import market_image6 from "./images/market_image6.svg"
import market_image7 from "./images/market_image7.svg"
import firstDealImage from "./images/firstDealImage.png"
import firstDealItem1 from "./images/firstDealItem1.svg"
import firstDealItem2 from "./images/firstDealImage2.svg"
import firstDealItem3 from "./images/firstDealImage3.svg"
import firstDealItem4 from "./images/firstDealImage4.svg"
import effectiveImage1 from "./images/effectiveImage1.png"
import effectiveImage2 from "./images/effectiveImage2.png"
import effectiveImage3 from "./images/effectiveImage3.png"
import effectiveImage4 from "./images/effectiveImage4.png"
import bot_item1 from "./images/bot_item1.png"
import bot_item2 from "./images/bot_item2.png"
import bot_item3 from "./images/bot_item3.png"
import prev_arrow from "./images/prev-arrow.svg"
import next_arrow from "./images/next-arrow.svg"
import review_image1 from "./images/review_image1.png"
import review_image2 from "./images/review_image2.png"
import review_image3 from "./images/review_image3.png"
import review_image4 from "./images/review_image4.png"
import review_image5 from "./images/review_image5.png"
import review_image6 from "./images/review_image6.png"
import circles_bg from "./images/circles.svg"
import select_bot_img from "./images/select_bot_img.png"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css/pagination';

import "swiper/css";
import "swiper/css/navigation";
import logo from "../../images/logo.svg";
import {useScroll} from "../../context/ScrollContext";
import {motion} from "framer-motion"
import SEO from "../../SEO";
import preview from "../../images/logo192.png"
import {useLanguage} from "../../context/LanguageProvider";

const MainPage = () => {
    const { t } = useLanguage();


    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');

            window.addEventListener("DOMContentLoaded", () => {
                const element = document.getElementById(id);
                if (element) {
                    const elementHeight = element.offsetHeight;
                    const windowHeight = window.innerHeight;
                    const headerOffset = 80;

                    if (elementHeight > windowHeight * 0.8) {
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: elementPosition - headerOffset,
                            behavior: 'smooth'
                        });
                    } else {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
            })
        }
    }, []);

    const {scrollToSection} = useScroll();

    const boxRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!boxRef.current) return;
        const {innerWidth, innerHeight} = window;
        const x = (e.clientX / innerWidth) - 0.5;
        const y = (e.clientY / innerHeight) - 0.5;
        const moveX = x * 30;
        const moveY = y * 30;
        boxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };


    const bot_images = [bot_item1, bot_item2, bot_item3];

    const botsList = t.home.botsList.map((bot, index) => ({
        ...bot,
        image: bot_images[index]
    }));

    const reviews_images = [review_image1, review_image2, review_image3, review_image4, review_image5, review_image6];

    const reviews = t.home.reviewsList.map((review, index) => ({
        ...review,
        image: reviews_images[index]
    }));


    const swiperRef = useRef(null);

    const [openFaqs, setOpenFaqs] = useState([]);

    const faqElements = t.home.faq;


    const initial = {opacity: 0, y: 40}
    const whileInView = {opacity: 1, y: 0}
    const transition = {duration: 0.8, ease: "easeOut", delay:0.1}
    const viewport = {once: true}

    const pointVariants = {
        hidden: {opacity: 0, y: 20},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {delay: i * 0.15, duration: 0.6, ease: "easeOut"}
        })
    };
    const fadeNumeric = {
        initial: "hidden",
        whileInView: "visible",
        viewport: {once: true},
        variants: pointVariants
    };

    const fadeUp = {
        initial: {opacity: 0, y: 40},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: true, amount: 0.3},
        transition: {duration: 0.8, ease: "easeOut"}
    };
    const fadeDown = {
        initial: {opacity: 0, y: -40},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: true, amount: 0.3},
        transition: {duration: 0.8, ease: "easeOut"}
    };
    const fadeLeft = {
        initial: {opacity: 0, x: -50},
        whileInView: {opacity: 1, x: 0},
        viewport: {once: true, amount: 0.3},
        transition: {duration: 0.8, ease: "easeOut"}
    };
    const fadeRight = {
        initial: {opacity: 0, x: 50},
        whileInView: {opacity: 1, x: 0},
        viewport: {once: true, amount: 0.3},
        transition: {duration: 0.8, ease: "easeOut"}
    };

    const marketImages = [
        market_image1,
        market_image2,
        market_image3,
        market_image4,
        market_image5,
        market_image6,
        market_image7
    ];


    return (
        <div className="main_page">
            <SEO
                title="ALGO — Алгоритмічна торгівля та торгові боти"
                description="Автоматизовані торгові боти з прозорою статистикою. Пасивний дохід на трейдингу без людського фактора. Оберіть свій алгоритм: Terra, Aero або Hydro EA."
                keywords="трейдинг боти, алгоритмічна торгівля, пасивний дохід, Terra EA, Aero EA, Hydro EA, торгові роботи Україна, автоматизація трейдингу"
                image={preview}
            />
            <div className="main_block" onMouseMove={handleMouseMove}>
                <img
                    src={window.innerWidth > 768 ? mainBlockBg : mainBlockBgMobile}
                    alt="Background"
                    className="main_block_bg"
                />
                <motion.div className="main_info_block" {...fadeLeft}>
                    <div className="algo_block">
                        algo
                    </div>
                    <h1 className="main_h1">
                        {t.home.hero.title}
                    </h1>
                    <div className="main_desc">
                        {t.home.hero.desc}
                    </div>
                    <div className="select_bot_button" onClick={() => scrollToSection("catalog")}>
                        {t.home.hero.button}
                    </div>
                </motion.div>

                <motion.img
                    src={metalPackage}
                    alt="Metal Package"
                    className="metalPackage"
                    ref={boxRef}
                    {...fadeRight}
                />
            </div>
            <div className="main_page_content">


                <div className="about_us_block">
                    <motion.div className="market_list" {...fadeUp}>
                        {[...Array(window.innerWidth < 768 ? 14 : 7)].map((_, i) => (
                            <img
                                key={i}
                                src={marketImages[i % 7]}
                                alt={`market-${i}`}
                            />
                        ))}
                    </motion.div>

                    <motion.h2 className="our_main_advantages" {...fadeUp} dangerouslySetInnerHTML={{ __html: t.home.stats.title }} />

                    <div className="our_advantages_list">
                        {t.home.stats.items.map((item, index) => (
                            <motion.div key={index} className="advantages_point" {...fadeNumeric} custom={index + 1}>
                                <div className="advantages_point_number">{item.num}</div>
                                <div className="advantages_point_desc">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="money_in_management">
                    <motion.div className="money_in_management_number" {...fadeUp}>
                        200 000$
                    </motion.div>
                    <motion.div className="in_management" {...fadeUp}>
                        {t.home.stats.management}
                    </motion.div>
                </div>

                <div className="first_deal_block" id="how-it-works">
                    <motion.h2 {...fadeUp} dangerouslySetInnerHTML={{ __html: t.home.steps.title }} />
                    <div className="first_deal_details">
                        <motion.div className="first_deal_image" {...fadeLeft}>
                            <img src={firstDealImage} alt=""/>
                        </motion.div>

                        <motion.div className="first_deal_block_list" {...fadeRight}>
                            {t.home.steps.items.map((step, index) => (
                                <div className="first_deal_item_gradient" key={index}>
                                    <div className="first_deal_item">
                                        <div className="item_name">
                                            <img src={index === 0 ? firstDealItem1 : index === 1 ? firstDealItem2 : index === 2 ? firstDealItem3 : firstDealItem4} alt=""/>
                                            {step.title}
                                            <div className="item_number">0{index + 1}</div>
                                        </div>
                                        <div className="item_desc">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>


                <div className="effective_algorithm" id="advantages">
                    <motion.h2 {...fadeUp} dangerouslySetInnerHTML={{ __html: t.home.effective.title }} />

                    <div className="effective_points first">
                        {t.home.effective.items.slice(0, 2).map((item, index) => (
                            <motion.div key={index} className="effective_point" {...(index === 0 ? fadeLeft : fadeRight)}>
                                <img src={index === 0 ? effectiveImage1 : effectiveImage2} alt=""/>
                                <div className="name">{item.title}</div>
                                <div className="desc">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="effective_points second">
                        {t.home.effective.items.slice(2, 4).map((item, index) => (
                            <motion.div key={index + 2} className="effective_point" {...(index === 0 ? fadeLeft : fadeRight)}>
                                <img src={index === 0 ? effectiveImage3 : effectiveImage4} alt=""/>
                                <div className="name">{item.title}</div>
                                <div className="desc">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="bots_catalog" id="catalog">
                    <motion.h2 {...fadeUp}>
                        {t.home.catalog.title}
                    </motion.h2>

                    <div className="bots_list">
                        {botsList.map((el, idx) =>
                            <motion.div className="bot_item" key={idx} {...fadeNumeric} custom={idx}>
                                <div className="bot_image">
                                    {el.prop && <div className="prop_pl">{t.home.catalog.propLabel}</div>}
                                    <img src={el.image} alt={el.name}/>
                                    {el.paying && <div className="paying_pl">{t.home.catalog.payingLabel}</div>}
                                </div>
                                <div className="bot_name">{el.name}</div>
                                <div className="bot_description">{el.description}</div>
                                <div className="bot_advantages">
                                    <div className="advantages_item">
                                        <div className="advantages_name">Year profit</div>
                                        <div className="advantages_numbers">{el.advantages.yearProfit}</div>
                                    </div>
                                    <div className="advantages_item">
                                        <div className="advantages_name">Max drawdown</div>
                                        <div className="advantages_numbers">{el.advantages.maxDrawDown}</div>
                                    </div>
                                    <div className="advantages_item">
                                        <div className="advantages_name">Winrate</div>
                                        <div className="advantages_numbers">{el.advantages.winRate}</div>
                                    </div>
                                </div>

                                <div className="bot_price_block">
                                    <div className="bot_price_text">{t.terra.buy.price}</div>
                                    <div className="bot_price">
                                        {el.price}
                                        <span>USD</span>
                                    </div>
                                </div>

                                <a href={el.href}>
                                    <div className="bot_more_details">
                                        {t.home.catalog.moreDetails}
                                    </div>
                                </a>
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="algo_feedback_block" id="reviews">
                    <div className="feedback_h2">
                        <motion.h2 {...fadeUp}>
                            <span>{t.home.reviews.titleAccent}</span> {t.home.reviews.title}
                        </motion.h2>
                        <div className="reviews_nav">
                            <div className="nav-btn prev" onClick={() => swiperRef.current?.slidePrev()}>
                                <img src={prev_arrow} alt=""/>
                            </div>
                            <div className="nav-btn next" onClick={() => swiperRef.current?.slideNext()}>
                                <img src={next_arrow} alt=""/>
                            </div>
                        </div>
                    </div>

                    <motion.div className="slider-container" {...fadeUp}>
                        <Swiper
                            loop
                            modules={[Pagination]}
                            pagination={{ clickable: true, el: '.custom-pagination' }}
                            spaceBetween={24}
                            slidesPerView={3}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            breakpoints={{
                                0: {slidesPerView: 1},
                                768: {slidesPerView: 2},
                                1024: {slidesPerView: 3},
                            }}
                        >
                            {reviews.map((review, i) => (
                                <SwiperSlide key={i} className="review_item">
                                    <img src={review.image} alt=""/>
                                    <div className="review_author">{review.name}</div>
                                    <div className="review_description">{review.text}</div>
                                </SwiperSlide>
                            ))}
                            <div className="custom-pagination"></div>
                        </Swiper>
                    </motion.div>

                    <div className="center-btn">
                        <a href="https://t.me/+ZjmgYnV_mh9jOGMy" target="_blank" rel="noreferrer">
                            <div className="more_reviews_button">
                                {t.terra.reviews1.more}
                            </div>
                        </a>
                    </div>
                </div>

                <div className="faq_container" id="faq">
                    <motion.h2 {...fadeUp}>
                        {t.home.faqTitle}
                    </motion.h2>
                    <div className="faq_list">
                        <img src={circles_bg} alt="" className="bg_circles_faq"/>
                        <div className="faq_questions_list">
                            {faqElements.map((el, index) => {
                                const isOpen = openFaqs.includes(index);

                                return (
                                    <motion.div
                                        key={index}
                                        className={`faq_item ${isOpen ? "open_faq" : ""}`}
                                        {...fadeNumeric}
                                        custom={index}
                                    >
                                        <div className="faq_item_question" onClick={() => {
                                            setOpenFaqs((prev) =>
                                                isOpen
                                                    ? prev.filter((i) => i !== index)
                                                    : [...prev, index]
                                            );
                                        }}>
                                            {el.question}

                                            <div className="cross_block">
                                                <div className="minus"></div>
                                                <div className="plus"></div>
                                            </div>
                                        </div>

                                        <div className="faq_item_answer">
                                            {el.answer}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <motion.div className="select_bot_fs" {...fadeUp}>
                    <div className="select_bot_block">
                        <div className="select_bot_info">
                            <div className="select_bot_theme">
                                {t.home.consult.title}
                            </div>
                            <div className="select_bot_desc">
                                {t.home.consult.desc}
                            </div>
                            <a href="https://t.me/alg0_o" target="_blank" rel="noreferrer">
                                <div className="consult_button">
                                    {t.home.consult.button}
                                </div>
                            </a>
                        </div>
                        <img src={select_bot_img} alt="Consultation"/>
                    </div>
                </motion.div>

                <motion.div className="footer" {...fadeUp}>
                    <a href="/">
                        <img src={logo} alt="Logo" className="logo_img"/>
                    </a>
                    <hr/>
                    <div className="society_block">
                        <div>
                            <a href="https://www.instagram.com/alg0_o?igsh=MWR0dXY2dzk2bTlwOA==" target="_blank" rel="noreferrer">
                                {t.terra.footer.instagram}
                            </a>
                        </div>
                        <div>
                            <a href="https://t.me/alg0_o" target="_blank" rel="noreferrer">
                                {t.terra.footer.telegram}
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/@alg0_ofx" target="_blank" rel="noreferrer">
                                {t.terra.footer.youtube}
                            </a>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default MainPage;