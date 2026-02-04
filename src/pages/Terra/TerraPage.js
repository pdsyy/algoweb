import React, {useRef, useState} from 'react';
import "./terra.css"
import productImage from "./images/productImageMain.png"
import advantageIcon1 from "./images/advantage_icon1.svg"
import advantageIcon2 from "./images/advantage_icon2.svg"
import advantageIcon3 from "./images/advantage_icon3.svg"
import result2024 from "./images/result2024.png"
import result2025 from "./images/result2025.png"
import demonstration from "./images/demonstration.png"
import prev_arrow from "../MainPage/images/prev-arrow.svg";
import next_arrow from "../MainPage/images/next-arrow.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import review_image1 from "./images/review_image1.png";
import review_image2 from "./images/review_image2.png";
import review_image3 from "./images/review_image3.png";
import review_image4 from "./images/review_image4.png";
import review_image5 from "./images/review_image5.png";
import test_image from "./images/test_image.png";
import dollar_circle from "./images/dollar_circle.svg";
import info_icon from "./images/info_icon.svg";
import calendar_icon from "./images/calendar_icon.svg";
import percent_icon from "./images/percent_icon.svg";
import bottom_product_image from "./images/bottom_product_image.png";
import InputRangeBar from "./InputRangeBar";
import YearMonthHandler from "../../components/YearMonthHandler";
import logo from "../../images/logo.svg";
import PopupBot from "../../components/PopupBot";
import {Pagination} from "swiper/modules";
import CalculatorSection from "../../components/CalculatorSection";
import ThxPopup from "../../components/ThxPopup";
import {AnimatePresence, motion} from "framer-motion"
import terraPreview from "./images/terraPreviewVIdeoFigma.png";
import terraVideo from "./images/terraVideoMain.mp4";
import SEO from "../../SEO";
import preview from "../../images/logo192.png"
import { useLanguage } from "../../context/LanguageProvider";

const TerraPage = ({activePopup, setActivePopup}) => {
    const { t } = useLanguage();

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");




    const reviews_images = [review_image1, review_image2, review_image3, review_image4, review_image5];

    const reviews = t.terra.reviewsList.map((review, index) => ({
        ...review,
        image: reviews_images[index]
    }));

    const [isActive, setIsActive] = useState(false)

    const bot_info_popup = {
        bot_info: t.terra.botInfoPopup.botInfo,
        bot_name: t.terra.botInfoPopup.botName,
        bot_price: t.terra.botInfoPopup.botPrice
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
        <div className="product_page">
            <SEO
                title="Terra EA — Торговий бот з найдовшою статистикою в Україні"
                description="Terra EA: понад 2 роки підтвердженої статистики, 23 з 24 місяців у плюс. Надійний алгоритм для MT4/MT5 з річним прибутком +20% та контролем ризику."
                keywords="Terra EA, торговий робот статистика, форекс бот скачати, автоматична торгівля MT4, алгоритм RSI Bollinger, стабільний заробіток на трейдингу"
                image={preview}
            />
            <PopupBot
                bot_info={bot_info_popup.bot_info}
                bot_name={bot_info_popup.bot_name}
                price={bot_info_popup.bot_price}
                isActive={isActive}
                setIsActive={setIsActive}
                activeThx={activePopup}
                setActiveThx={setActivePopup}
            />

            <div className="bot_info_main">
                <motion.div className = "main_video_block" {...fadeLeft}>
                    <video
                        src={terraVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="my-video-class"
                    >
                        {t.terra.hero.videoFallback}
                    </video>
                </motion.div>

                <div className="product_info_main">
                    <motion.div className="product_name" {...fadeNumeric} custom={1}>
                        TERRA EA
                    </motion.div>

                    <motion.div className="bot_main_theme" {...fadeNumeric} custom={2}>
                        {t.terra.hero.theme}
                    </motion.div>

                    <motion.div className="bot_main_desc" {...fadeNumeric} custom={3}>
                        {t.terra.hero.desc}
                    </motion.div>

                    <motion.div
                        className="button_buy_bot"
                        onClick={() => setIsActive(true)}
                        {...fadeNumeric}
                        custom={4}
                    >
                        {t.terra.hero.buy}
                    </motion.div>

                    <motion.div className="product_slogan" {...fadeNumeric} custom={5}>
                        {t.terra.hero.slogan}
                    </motion.div>

                    <motion.div className="product_description" {...fadeNumeric} custom={6}>
                        {t.terra.hero.about.p1}
                        <br /><br />
                        {t.terra.hero.about.p2}
                        <br /><br />
                        {t.terra.hero.about.p3}
                    </motion.div>
                </div>
            </div>

            <div className="product_advantages">
                <motion.h2 {...fadeUp}>
                    <span>{t.terra.advantages.titleAccent}</span> {t.terra.advantages.title}
                </motion.h2>

                <div className="product_advantages_list">
                    {t.terra.advantages.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="product_advantage_item_gradient"
                            {...fadeNumeric}
                            custom={i + 1}
                        >
                            <div className="product_advantage_item">
                                <div className="product_advantage_name">
                                    <img
                                        src={[advantageIcon1, advantageIcon2, advantageIcon3][i]}
                                        alt=""
                                    />
                                    {item.title}
                                    <div className="product_advantage_num">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
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
                        <div className="years_handler">
                            <div
                                className={`top_handler ${
                                    (hoverMode === "2025" || (!hoverMode && mode === "2025")) ? "active2025" : ""
                                }`}
                            ></div>

                            <div
                                className={`year2024 ${mode === "2024" ? "active" : ""}`}
                                onClick={() => {
                                    setHoverMode("2024")
                                    setMode("2024")
                                }}
                            >
                                2024
                            </div>

                            <div
                                className={`year2025 ${mode === "2025" ? "active" : ""}`}
                                onClick={() => {
                                    setHoverMode("2025")
                                    setMode("2025")
                                }}
                            >
                                2025
                            </div>
                        </div>

                        <div className="result_block_name">
                            {t.terra.results.title}
                        </div>

                        <div className="plus_result">
                            {t.terra.results.subtitle}
                        </div>

                        <div className="result_advantages">
                            {t.terra.results.stats.map((item, i) => (
                                <div className="result_item" key={i}>
                                    <div className="result_name">
                                        {item.label}
                                    </div>
                                    <div className="result_numbers">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://www.myfxbook.com/members/alg0_o/terra-ea-v2/11649755"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="see_stat_button">
                                {t.terra.results.button}
                            </div>
                        </a>
                    </motion.div>

                    <motion.div className="result_image" {...fadeNumeric} custom={2}>
                        <img src={mode === "2024" ? result2024 : result2025} alt="" />
                    </motion.div>
                </div>
            </div>


            <div className="video_demonstration">
                <motion.div className="video_text" {...fadeLeft}>
                    <h2>
                        <span>{t.terra.video.titleAccent}</span><br />
                        {t.terra.video.title}
                    </h2>
                </motion.div>

                <motion.div className="video_block" {...fadeRight}>
                    <iframe
                        key={isPlaying ? "playing" : "stopped"}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        src={
                            isPlaying
                                ? "https://www.youtube.com/embed/XthGYjSNjN0?autoplay=1&mute=0&si=oCgsWa31-1ZkLTj1"
                                : "about:blank"
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

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
                                <img src={terraPreview} alt="Video Cover" loading="lazy"/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>


            <div className="algo_feedback_block">
                <div className="feedback_h2">
                    <motion.h2 {...fadeUp}>
                        <span>{t.terra.reviews.titleAccent}</span> {t.terra.reviews.title}
                    </motion.h2>

                    <div className="reviews_nav">
                        <div
                            className="nav-btn prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <img src={prev_arrow} alt="" />
                        </div>
                        <div
                            className="nav-btn next"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <img src={next_arrow} alt="" />
                        </div>
                    </div>
                </div>


                <motion.div className="slider-container" {...fadeUp}>


                    <Swiper
                        loop
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        spaceBetween={24}
                        slidesPerView={3}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
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

                <motion.div className="center-btn" {...fadeUp}>
                    <a href="https://t.me/+ZjmgYnV_mh9jOGMy" target="_blank" rel="noreferrer">
                        <div className="more_reviews_button">
                            {t.terra.reviews1.more}
                        </div>
                    </a>
                </motion.div>


            </div>

            <div className="test_result">
                <motion.h2 {...fadeUp}>
                    {t.terra.tests.title} <span>{t.terra.tests.titleAccent}</span>
                </motion.h2>

                <div className="test_details_block_fs">
                    <div className="test_details_block">
                        <motion.div className="test_info" {...fadeNumeric} custom={1}>
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
                                    <div className="test_item_number">10000.00</div>
                                </div>

                                <div className="test_numbers_grid_item">
                                    <div className="test_item_name">
                                        {t.terra.tests.netProfit}
                                    </div>
                                    <div className="test_item_number">+525.59%</div>
                                </div>
                            </div>

                            <div className="test_detail_item">
                                {t.terra.tests.pairs}
                                <div className="test_detail_number">
                                    NZDCAD, AUDCAD, AUDNZD
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.risk}
                            </div>

                            <div className="test_detail_item">
                                {t.terra.tests.maxDrawdown}
                                <div className="test_detail_number">31.42%</div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.trades}
                            </div>

                            <div className="test_detail_item">
                                {t.terra.tests.trades}
                                <div className="test_detail_number">70.15%</div>
                            </div>
                        </motion.div>

                        <motion.div className="test_result_image" custom={2}>
                            <img src={test_image} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>


            <CalculatorSection/>

            <div className="buy_block_fs">
                <div className="buy_block">
                    <motion.div className="buy_block_image" {...fadeNumeric} custom={1}>
                        <img src={bottom_product_image} alt="" />
                    </motion.div>

                    <motion.div className="buy_block_info" {...fadeNumeric} custom={2}>
                        <div className="product_name_bottom">Terra EA</div>

                        <div className="product_desc_bottom">
                            {t.terra.buy.desc}
                        </div>

                        <div className="buy_block_bot_stat">
                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    {t.terra.stats.yearProfit}
                                </div>
                                <div className="bot_stat_num">+20%</div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    {t.terra.stats.maxDrawdown}
                                </div>
                                <div className="bot_stat_num">16.5%</div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    {t.terra.stats.winrate}
                                </div>
                                <div className="bot_stat_num">72.3%</div>
                            </div>
                        </div>

                        <div className="bot_stat_price">
                            {t.terra.buy.price}
                            <div className="price_block_bottom">
                                800 <span>USD</span>
                            </div>
                        </div>

                        <div className="bottom_buttons_block">
                            <div
                                className="button_buy_bottom"
                                onClick={() => setIsActive(true)}
                            >
                                {t.terra.buy.buy}
                            </div>

                            <div
                                className="piece_pay_bottom"
                                onClick={() => setIsActive(true)}
                            >
                                {t.terra.buy.parts}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="footer">
                <a href="/">
                    <img src={logo} alt="" className="logo_img" />
                </a>
                <hr />
                <div className="society_block">
                    <div>
                        <a href="https://www.instagram.com/alg0_bots?igsh=NW82eGFuajRlYmpw" target="_blank" rel="noreferrer">
                            {t.terra.footer.instagram}
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/+uKCqVOr1OAE2ZmQy" target="_blank" rel="noreferrer">
                            {t.terra.footer.telegram}
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@alg0_ofx" target="_blank" rel="noreferrer">
                            {t.terra.footer.youtube}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerraPage;