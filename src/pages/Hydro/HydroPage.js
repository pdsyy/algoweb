import React, {useRef, useState} from 'react';
import "./hydro.css"
import productImage from "./images/ProductImageMain.png"
import advantageIcon1 from "./images/strategy_icon.svg"
import advantageIcon2 from "./images/advantage_icon2.svg"
import advantageIcon3 from "./images/connection_icon.svg"
import advantageIcon4 from "./images/connetction_icon2.svg"
import advantageIcon5 from "./images/bot_icon.svg"
import result2025 from "./images/result2025.png"
import demonstration from "./images/demonstration.png"
import how_to_image from "./images/how_to_image.png"
import prev_arrow from "../MainPage/images/prev-arrow.svg";
import next_arrow from "../MainPage/images/next-arrow.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import review_image1 from "./images/review_image1.png";
import review_image2 from "./images/review_image2.png";
import review_image3 from "./images/review_image3.png";
import review_image4 from "./images/review_image4.png";
import review_image5 from "./images/review_image5.png";
import review_image6 from "./images/review_image6.png";
import test_image from "./images/test_image.png";
import dollar_circle from "./images/dollar_circle.svg";
import info_icon from "./images/info_icon.svg";
import calendar_icon from "./images/calendar_icon.svg";
import percent_icon from "./images/percent_icon.svg";
import bottom_product_image from "./images/bottom_product_image.png";
import InputRangeBar from "./InputRangeBar";
import YearMonthHandler from "../../components/YearMonthHandler";
import logo from "../../images/logo.svg";
import hydroPreview from "./images/hydroPreview.png";
import PopupBot from "../../components/PopupBot";
import {Pagination} from "swiper/modules";
import CalculatorSection from "../../components/CalculatorSection";
import {AnimatePresence, motion} from "framer-motion";
import hydroVideo from "./images/hydro.mp4";
import preview from "../../images/logo192.png"
import SEO from "../../SEO";
import {useLanguage} from "../../context/LanguageProvider";
import CalculatorSectionHydro from "../../components/CalculatorSectionHydro";

const HydroPage = ({activePopup, setActivePopup}) => {
    const { t } = useLanguage();

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");


    const reviews_images = [review_image1, review_image2, review_image3, review_image4, review_image5, review_image6];


    const reviews = t.hydro.reviewsList.map((review, index) => ({
        ...review,
        image: reviews_images[index]
    }));

    const [isActive, setIsActive] = useState(false)

    const bot_info_popup = {
        bot_info: t.hydro.botInfoPopup.botInfo,
        bot_name: t.hydro.botInfoPopup.botName,
        bot_price: t.hydro.botInfoPopup.botPrice
    };


    const swiperRef = useRef(null);


    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

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

    return (
        <div className="product_page hydro">
            <SEO
                title="Hydro EA — Торговий бот з Winrate 91.9% та високою прибутковістю"
                description="Hydro EA: професійний скальпінг-бот для Gold (XAUUSD). Середня дохідність 5% на місяць, захист від волатильності та робота без мартингейла. Найкращий вибір для капіталу."
                keywords="Hydro EA, скальпінг бот, високоприбутковий торговий робот, бот для золота, Winrate 90 трейдинг, автоматизація XAUUSD, професійні торгові алгоритми"
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
                <motion.div {...fadeLeft}>
                    <video
                        src={hydroVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="my-video-class"
                    >
                        {t.hydro.hero.videoFallback}
                    </video>
                </motion.div>
                <div className="product_info_main">
                    <motion.div className="product_name" {...fadeNumeric} custom={1}>
                        {t.hydro.hero.botName}
                    </motion.div>
                    <motion.div className="bot_main_theme" {...fadeNumeric} custom={2}>
                        {t.hydro.hero.theme}
                    </motion.div>
                    <motion.div className="bot_main_desc" {...fadeNumeric} custom={3}>
                        {t.hydro.hero.desc}
                    </motion.div>
                    <motion.div className="button_buy_bot" onClick={() => setIsActive(true)} {...fadeNumeric} custom={4}>
                        {t.hydro.hero.buy}
                    </motion.div>
                    <motion.div className="product_slogan" {...fadeNumeric} custom={5}>
                        {t.hydro.hero.slogan}
                    </motion.div>
                    <motion.div
                        className="product_description"
                        {...fadeNumeric}
                        custom={6}
                        dangerouslySetInnerHTML={{ __html: t.hydro.hero.about }}
                    />
                </div>
            </div>

            <div className="product_advantages">
                <motion.h2 {...fadeUp}>
                    {t.hydro.advantages.title} <span>{t.hydro.hero.botName}</span>
                </motion.h2>

                <div className="product_advantages_list_hydro">
                    {t.hydro.advantages.items.slice(0, 3).map((item, index) => (
                        <motion.div key={index} className="product_advantage_item_gradient" {...fadeNumeric} custom={index + 1}>
                            <div className="product_advantage_item">
                                <div className="product_advantage_name">
                                    <img src={index === 0 ? advantageIcon1 : index === 1 ? advantageIcon2 : advantageIcon3} alt=""/>
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

                <div className="product_advantages_list_hydro sec">
                    {t.hydro.advantages.items.slice(3).map((item, index) => (
                        <motion.div key={index + 3} className="product_advantage_item_gradient" {...fadeNumeric} custom={index + 4}>
                            <div className="product_advantage_item">
                                <div className="product_advantage_name">
                                    <img src={index === 0 ? advantageIcon4 : advantageIcon5} alt=""/>
                                    {item.title}
                                    <div className="product_advantage_num">0{index + 4}</div>
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
                    <div className="product_result_info">
                        <motion.div className="product_name" {...fadeNumeric} custom={1}>
                            {t.hydro.hero.botName}
                        </motion.div>
                        <motion.div className="result_block_name_aero" {...fadeNumeric} custom={2}>
                            {t.hydro.results.subtitle}
                        </motion.div>
                        <motion.div className="plus_result" {...fadeNumeric} custom={3}>
                            {t.hydro.results.winrateText}
                        </motion.div>
                        <motion.div className="result_advantages" {...fadeNumeric} custom={4}>
                            {t.hydro.results.stats.map((stat, index) => (
                                <div className="result_item" key={index}>
                                    <div className="result_name">{stat.label}</div>
                                    <div className="result_numbers">{stat.value}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.a href="https://www.myfxbook.com/portfolio/aero-ea-low-risk-set/11648009"
                                  target="_blank" rel="noreferrer" {...fadeNumeric} custom={5}>
                            <div className="see_stat_button">
                                {t.aero.results.button}
                            </div>
                        </motion.a>
                    </div>
                    <motion.div className="result_image" {...fadeUp}>
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
                        style={{width: '100%', height: '100%', border: 'none'}}
                        src={isPlaying
                            ? "https://www.youtube.com/embed/M3kGv3oRp-Q?autoplay=1&mute=0&si=05eZ6R8NleVqosq0"
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
                                initial={{opacity: 1}}
                                exit={{opacity: 0, scale: 1.05}}
                                transition={{duration: 0.5, ease: "easeInOut"}}
                                className="video_cover_wrapper"
                                onClick={handlePlay}
                            >
                                <img src={hydroPreview} alt="Video Cover" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="how_to_fs">
                <div className="how_to_block">
                    <motion.div className="learn_ho_to" {...fadeLeft}>
                        <div className="how_to_main_info">
                            {t.hydro.propInfo.title}
                        </div>
                        <a href="https://teletype.in/@volodymyrbbk/sun8mJ6tXbz" target="_blank" rel="noreferrer">
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
                        <span>{t.hydro.reviews.titleAccent}</span> {t.hydro.reviews.title}
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
                <motion.h2 {...fadeUp}>
                    {t.terra.tests.title} <span>{t.terra.tests.titleAccent}</span>
                </motion.h2>
                <div className="test_details_block_fs">
                    <motion.div className="test_details_block" {...fadeUp}>
                        <div className="test_info">
                            <div className="test_theme">
                                {t.terra.tests.period}
                            </div>
                            <div className="test_detail_item">
                                {t.terra.tests.timeframe}
                                <div className="test_detail_number">
                                    {t.hydro.tests.timeframeValue}
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
                                        +5705%
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
                                    11.56%
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                {t.terra.tests.trades}
                            </div>
                            <div className="test_detail_item">
                                {t.aero.tests.winTrades}
                                <div className="test_detail_number">
                                    94.24%
                                </div>
                            </div>
                        </div>
                        <div className="test_result_image">
                            <img src={test_image} alt="Hydro EA tests"/>
                        </div>
                    </motion.div>
                </div>
            </div>
            <CalculatorSectionHydro/>

            <div className="buy_block_fs">
                <div className="buy_block">
                    <motion.div className="buy_block_image" {...fadeLeft}>
                        <img src={bottom_product_image} alt="Hydro EA"/>
                    </motion.div>
                    <motion.div className="buy_block_info" {...fadeRight}>
                        <div className="product_name_bottom">
                            {t.hydro.hero.botName}
                        </div>
                        <div className="product_desc_bottom">
                            {t.aero.buy.desc}
                        </div>
                        <div className="buy_block_bot_stat">
                            {t.hydro.results.stats.map((stat, index) => (
                                <div className="bot_stat_item" key={index}>
                                    <div className="bot_stat_name">{stat.label}</div>
                                    <div className="bot_stat_num">{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bot_stat_price">
                            {t.terra.buy.price}
                            <div className="price_block_bottom">
                                {t.hydro.botInfoPopup.botPrice}
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
                    </motion.div>
                </div>
            </div>

            <div className="footer">
                <a href="/">
                    <img src={logo} alt="Logo" className="logo_img"/>
                </a>
                <hr/>
                <div className="society_block">
                    <div>
                        <a href="https://www.instagram.com/alg0_o?igsh=MWR0dXY2dzk2bTlwOA==">{t.terra.footer.instagram}</a>
                    </div>
                    <div>
                        <a href="https://t.me/alg0_o">{t.terra.footer.telegram}</a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@alg0_ofx">{t.terra.footer.youtube}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HydroPage;