import React, {useRef, useState} from 'react';
import "./aero.css"
import advantageIcon1 from "./images/strategy_icon.svg"
import advantageIcon2 from "./images/connection_icon.svg"
import advantageIcon3 from "./images/connetction_icon2.svg"
import advantageIcon4 from "./images/bot_icon.svg"
import result2025 from "./images/result2025.png"
import how_to_image from "./images/how_to_image.png"
import prev_arrow from "../MainPage/images/prev-arrow.svg";
import next_arrow from "../MainPage/images/next-arrow.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import review_image1 from "./images/review_image1.png";
import review_image2 from "./images/review_image2.png";
import review_image3 from "./images/review_image3.png";
import review_image4 from "./images/review_image4.png";
import review_image5 from "./images/review_image5.png";
import test_image from "./images/test_image.png";
import bottom_product_image from "./images/bottom_product_image.png";
import logo from "../../images/logo.svg";
import PopupBot from "../../components/PopupBot";
import {Pagination} from "swiper/modules";
import CalculatorSection from "../../components/CalculatorSection";
import {AnimatePresence, motion} from "framer-motion";
import aeroPreview from "./images/aeroPreview.png";
import aeroVideo from "./images/aeroVideoMain.mp4";
import SEO from "../../SEO";
import preview from "../../images/logo192.png"
import {useLanguage} from "../../context/LanguageProvider";
import CalculatorSectionAero from "../../components/CalculatorSectionAero";

const AeroPage = ({activePopup, setActivePopup}) => {
    const { t } = useLanguage();

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");


    const reviews_images = [review_image1, review_image2, review_image3, review_image4, review_image5];

    const reviews = t.aero.reviewsList.map((review, index) => ({
        ...review,
        image: reviews_images[index]
    }));

    const [isActive, setIsActive] = useState(false)

    const bot_info_popup = {
        bot_info: t.aero.botInfoPopup.botInfo,
        bot_name: t.aero.botInfoPopup.botName,
        bot_price: t.aero.botInfoPopup.botPrice
    };


    const swiperRef = useRef(null);




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


    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };
    return (
        <div className="product_page aero">

            <PopupBot
                bot_info={bot_info_popup.bot_info}
                bot_name={bot_info_popup.bot_name}
                price={bot_info_popup.bot_price}
                isActive={isActive}
                setIsActive={setIsActive}
                activeThx={activePopup}
                setActiveThx={setActivePopup}
            />
            <SEO
                title="Aero EA — Безпечний торговий бот з просадкою 3.7%"
                description="Aero EA: алгоритм на базі AI для XAUUSD (Gold). Без мартингейла та сіток. Ідеально підходить для проп-компаній. Winrate 86.8% та стабільний прибуток."
                keywords="Aero EA, бот для проп компаній, безпечний трейдинг бот, робот для золота XAUUSD, трейдинг без мартингейла, торгові боти AI"
                image={preview}
            />
            <div className="bot_info_main">
                <motion.div className = "main_video_block" {...fadeLeft}>
                    <video
                        src={aeroVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="my-video-class"
                    >
                        {t.aero.hero.videoFallback}
                    </video>
                </motion.div>
                <div className="product_info_main">
                    <motion.div className="product_name" {...fadeNumeric} custom={1}>
                        {t.aero.hero.botName}
                    </motion.div>
                    <motion.div className="bot_main_theme" {...fadeNumeric} custom={2}>
                        {t.aero.hero.theme}
                    </motion.div>
                    <motion.div className="bot_main_desc" {...fadeNumeric} custom={3}>
                        {t.aero.hero.desc}
                    </motion.div>
                    <motion.div className="button_buy_bot" onClick={() => setIsActive(true)} {...fadeNumeric} custom={4}>
                        {t.aero.hero.buy}
                    </motion.div>
                    <motion.div className="product_slogan" {...fadeNumeric} custom={5}>
                        {t.aero.hero.slogan}
                    </motion.div>
                    <motion.div
                        className="product_description"
                        {...fadeNumeric}
                        custom={6}
                        dangerouslySetInnerHTML={{ __html: t.aero.hero.about }}
                    />
                </div>
            </div>

            <div className="product_advantages">
                <motion.h2 {...fadeUp}>
                    {t.aero.advantages.title} <span>{t.aero.hero.botName}</span>
                </motion.h2>
                <div className="product_advantages_list_aero">
                    {t.aero.advantages.items.map((item, index) => (
                        <motion.div key={index} className="product_advantage_item_gradient" {...fadeNumeric} custom={index + 1}>
                            <div className="product_advantage_item">
                                <div className="product_advantage_name">
                                    <img src={index === 0 ? advantageIcon1 : index === 1 ? advantageIcon2 : index === 2 ? advantageIcon3 : advantageIcon4} alt=""/>
                                    {item.title}
                                    <div className="product_advantage_num">0{index + 1}</div>
                                </div>
                                <div className="product_advantage_desc">
                                    {item.desc}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="product_result_fs">
                <div className="product_result">
                    <motion.div className="product_result_info" {...fadeNumeric} custom={1}>
                        <div className="product_name">
                            {t.aero.hero.botName}
                        </div>
                        <div className="result_block_name_aero">
                            {t.aero.results.subtitle}
                        </div>
                        <div className="plus_result">
                            {t.aero.results.winrateText}
                        </div>
                        <div className="result_advantages">
                            {t.aero.results.stats.map((stat, index) => (
                                <div className="result_item" key={index}>
                                    <div className="result_name">{stat.label}</div>
                                    <div className="result_numbers">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                        <a href="https://www.myfxbook.com/members/alg0_o/aero-ea-low-risk-set/11648009" target="_blank" rel="noreferrer">
                            <div className="see_stat_button">
                                {t.aero.results.button}
                            </div>
                        </a>
                    </motion.div>
                    <motion.div className="result_image" {...fadeNumeric} custom={2}>
                        <img src={result2025} alt="Statistics"/>
                    </motion.div>
                </div>
            </div>

            <div className="video_demonstration">
                <motion.div className="video_text" {...fadeLeft}>
                    <h2 dangerouslySetInnerHTML={{ __html: t.aero.video.title }} />
                </motion.div>
                <motion.div className="video_block" {...fadeRight}>
                    <iframe
                        key={isPlaying ? "playing" : "stopped"}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        src={isPlaying
                            ? "https://www.youtube.com/embed/8fZmyU_JZXQ?autoplay=1&mute=0&si=stKJz6oasfygiEZk"
                            : "about:blank"
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>

                    <AnimatePresence>
                        {!isPlaying && (
                            <motion.div
                                key="cover"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="video_cover_wrapper"
                                onClick={handlePlay}
                            >
                                <img src={aeroPreview} alt="Video Cover" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="how_to_fs">
                <div className="how_to_block">
                    <motion.div className="learn_ho_to" {...fadeLeft}>
                        <div className="how_to_main_info">
                            {t.aero.propInfo.title}
                        </div>
                        <a href="https://teletype.in/@volodymyrbbk/d-OhuPGz2YL" target="_blank" rel="noreferrer">
                            <div className="read_more_button">
                                {t.aero.propInfo.button}
                            </div>
                        </a>
                    </motion.div>
                    <motion.div className="hot_to_image" {...fadeRight}>
                        <img src={how_to_image} alt=""/>
                    </motion.div>
                </div>
            </div>


            <div className="algo_feedback_block">
                <div className="feedback_h2">
                    <motion.h2 {...fadeUp}>
                        <span>{t.aero.reviews.titleAccent}</span> {t.aero.reviews.title}
                    </motion.h2>

                    <div className="reviews_nav">
                        <div className="nav-btn prev" onClick={() => swiperRef.current?.slidePrev()}>
                            <img src={prev_arrow} alt="prev"/>
                        </div>
                        <div className="nav-btn next" onClick={() => swiperRef.current?.slideNext()}>
                            <img src={next_arrow} alt="next"/>
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
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review, i) => (
                            <SwiperSlide key={i} className="review_item">
                                <img src={review.image} alt={review.name}/>
                                <div className="review_author">{review.name}</div>
                                <div className="review_description">{review.text}</div>
                            </SwiperSlide>
                        ))}
                        <div className="custom-pagination"></div>
                    </Swiper>
                </motion.div>

                <motion.div className="center-btn" {...fadeUp}>
                    <a href="https://t.me/+ZjmgYnV_mh9jOGMy" target="_blank" rel="noreferrer">
                        <div className="more_reviews_button">
                            {t.terra.reviews1.more}
                        </div>
                    </a>
                </motion.div>
            </div>

            <div className="test_result">
                <h2>
                    {t.terra.tests.title} <span>{t.terra.tests.titleAccent}</span>
                </h2>
                <div className="test_details_block_fs">
                    <div className="test_details_block">
                        <div className="test_info">
                            <div className="test_theme">
                                {t.terra.tests.period}
                            </div>
                            <div className="test_detail_item">
                                {t.terra.tests.timeframe}
                                <div className="test_detail_number">
                                    {t.terra.tests.timeframeValue}
                                </div>
                            </div>
                            <div className="test_detail_item">
                                {t.terra.tests.dates}
                                <div className="test_detail_number">
                                    2016.01.04 — 2026.01.01
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.depositProfit}
                            </div>
                            <div className="test_numbers_grid">
                                <div className="test_numbers_grid_item">
                                    <div className="test_item_name">
                                        {t.terra.tests.startDeposit}
                                    </div>
                                    <div className="test_item_number">
                                        10000.00
                                    </div>
                                </div>
                                <div className="test_numbers_grid_item">
                                    <div className="test_item_name">
                                        {t.terra.tests.netProfit}
                                    </div>
                                    <div className="test_item_number">
                                        +1113%
                                    </div>
                                </div>
                            </div>

                            <div className="test_detail_item">
                                {t.terra.tests.pairs}
                                <div className="test_detail_number">
                                    XAUUSD ( GOLD )
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.risk}
                            </div>
                            <div className="test_detail_item">
                                {t.terra.tests.maxDrawdown}
                                <div className="test_detail_number">
                                    12.31%
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.trades}
                            </div>
                            <div className="test_detail_item">
                                {t.aero.tests.winTrades}
                                <div className="test_detail_number">
                                    85.66%
                                </div>
                            </div>
                        </div>
                        <div className="test_result_image">
                            <img src={test_image} alt="Test results chart"/>
                        </div>
                    </div>
                </div>
            </div>
            <CalculatorSectionAero startPercentage = {30}/>

            <div className="buy_block_fs">
                <div className="buy_block">
                    <div className="buy_block_image">
                        <img src={bottom_product_image} alt="Aero EA"/>
                    </div>
                    <div className="buy_block_info">
                        <div className="product_name_bottom">
                            {t.aero.hero.botName}
                        </div>
                        <div className="product_desc_bottom">
                            {t.aero.buy.desc}
                        </div>
                        <div className="buy_block_bot_stat">
                            {t.aero.results.stats.map((stat, index) => (
                                <div className="bot_stat_item" key={index}>
                                    <div className="bot_stat_name">{stat.label}</div>
                                    <div className="bot_stat_num">{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bot_stat_price">
                            {t.terra.buy.price}
                            <div className="price_block_bottom">
                                {t.aero.botInfoPopup.botPrice}
                                <span>USD</span>
                            </div>
                        </div>

                        <div className="bottom_buttons_block">
                            <div className="button_buy_bottom" onClick={() => setIsActive(true)}>
                                {t.terra.buy.buy}
                            </div>
                            <div className="piece_pay_bottom" onClick={() => setIsActive(true)}>
                                {t.terra.buy.parts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <a href="/">
                    <img src={logo} alt="Logo" className="logo_img"/>
                </a>
                <hr/>
                <div className="society_block">
                    <div>
                        <a href="https://www.instagram.com/alg0_bots?igsh=NW82eGFuajRlYmpw">{t.terra.footer.instagram}</a>
                    </div>
                    <div>
                        <a href="https://t.me/+uKCqVOr1OAE2ZmQy">{t.terra.footer.telegram}</a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@alg0_ofx">{t.terra.footer.youtube}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AeroPage;