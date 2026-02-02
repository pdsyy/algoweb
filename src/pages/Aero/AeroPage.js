import React, {useRef, useState} from 'react';
import "./aero.css"
import productImage from "./images/ProductImageMain.png"
import advantageIcon1 from "./images/strategy_icon.svg"
import advantageIcon2 from "./images/connection_icon.svg"
import advantageIcon3 from "./images/connetction_icon2.svg"
import advantageIcon4 from "./images/bot_icon.svg"
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

const AeroPage = ({activePopup, setActivePopup}) => {

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");


    const reviews = [
        {
            name: "Dmytro P.",
            text: "Пишу відгук за результатами першого тижня торгів. Приємно, що всі угоди чітко сходяться з моніторингом на Myfxbook, профіт йде абсолютно закономірний. Початок чудовий, тож сподіваюсь на довгу та плідну співпрацю.",
            image: review_image1,
        },
        {
            name: "Mykola F.",
            text: "За перший місяць користування ботом отримав такий результат ⬆️ +5% чистого прибутку до депозиту. Працює стабільно, без зайвого ризику, з чіткою логікою входів і виходів. Для мене це хороший та прогнозований результат.",
            image: review_image2,
        },
        {
            name: "Sergii H.",
            text: "Привіт! Користуюся ботом Aero вже рівно два місяці. За цей час на моєму власному депозиті на біржі Bybit він наторгував +321$. Результатом повністю задоволений, бот показує себе чудово на дистанції.",
            image: review_image3,
        }, {
            name: "Alex D.",
            text: "Пишу відгук про свій досвід використання ботів. Придбав одразу два алго — дуже сподобалась подача та презентація. Запустив на одному рахунку й отримав хороші цифри. Підтримка, консультації та супровід — на високому рівні.",
            image: review_image4,
        },
        {
            name: "Dmytro S.",
            text: "Всім привіт. Минуло два місяці з моменту покупки бота Aero. На особистому рахунку Bybit чистий прибуток склав вже +321$. Система працює стабільно і повністю виправдовує вкладені кошти.",
            image: review_image5,
        },
    ];

    const [isActive, setIsActive] = useState(false)

    const bot_info_popup = {
        bot_info: [
            "Безлімітна кількість активацій бота",
            "Пожиттєвий доступ до оновлень",
            "2 версії під MT4/MT5",
            "Відеоінструкції з налаштуванням на кожному етапі",
            "Сет файли під різні види ризику",
            "Доступ до закритого каналу з новинами",
            "Гарантія 100% ідентичності ваших результатів з нашими",
            "Налаштування бота під проп-компанію"],
        bot_name: "AERO EA",
        bot_price: 1200
    }


    const swiperRef = useRef(null);
    return (
        <div className="product_page">

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
                <div>
                    <img src={productImage} alt=""/>
                </div>
                <div className="product_info_main">
                    <div className="product_name">
                        Aero EA
                    </div>
                    <div className="bot_main_theme">
                        Торговий бот з найнижчими просадками
                    </div>
                    <div className="bot_main_desc">
                        Має понад 7 місяців підтвердженої статистики і 10 років тестів зі стабільними
                        результатами.
                    </div>
                    <div className="button_buy_bot" onClick={() => {
                        setIsActive(true)
                    }}>
                        Придбати бота
                    </div>
                    <div className="product_slogan">
                        Безпека вашого капіталу
                    </div>
                    <div className="product_description">
                        Aero - елемент повітря, він може бути спокійним, як легкий вітер, так і динамічним, перетворюючи
                        вітер на бурю, завдяки рівню ризику, що налаштовується.
                        <br/><br/>
                        Алгоритм навчали за допомогою AI на базі символу XAUUSD з 1999 року, його стратегія не має
                        жодних «небезпечних» методик як мартингейл, сіткова торгівля та подібні.
                        <br/><br/>
                        Це забезпечує максимально безпечну торгівлю.
                    </div>
                </div>
            </div>

            <div className="product_advantages">
                <h2>
                    Переваги <span>Aero EA</span>
                </h2>
                <div className="product_advantages_list_aero">
                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon1} alt=""/>
                                Підходить для проп-компаній
                                <div className="product_advantage_num">01</div>
                            </div>
                            <div className="product_advantage_desc">
                                Оскільки він не використовує заборонених стратегій, Aero підходить для більшості
                                популярних проп-компаній.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon2} alt=""/>
                                Адаптація до ринку
                                <div className="product_advantage_num">02</div>
                            </div>
                            <div className="product_advantage_desc">
                                Алгоритм працює на пробій ключових цінових рівнів і підлаштовується під різні стадії
                                ринку.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon3} alt=""/>
                                Гнучкість під будь-який стиль торгівлі
                                <div className="product_advantage_num">03</div>
                            </div>
                            <div className="product_advantage_desc">
                                Ідеальний як для консервативних, так і для агресивних трейдерів. Ви самі контролюєте
                                стиль торгівлі.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon4} alt=""/>
                                Повна автоматизація
                                <div className="product_advantage_num">02</div>
                            </div>
                            <div className="product_advantage_desc">
                                Aero EA працює у фоновому режимі, повністю автоматизований і не потребує постійної
                                участі.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="product_result_fs">


                <div className="product_result">
                    <div className="product_result_info">
                        <div className="product_name">
                            Aero EA
                        </div>
                        <div className="result_block_name_aero">
                            На live рахунку Aero демонструє феноменальний результат з дохідністю
                            2%/місяць при просадці 3.7%
                        </div>
                        <div className="plus_result">
                            При цьому його winrate досягнув показника в 86.8%.
                        </div>
                        <div className="result_advantages">
                            <div className="result_item">
                                <div className="result_name">
                                    Year profit
                                </div>
                                <div className="result_numbers">
                                    +30%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Max drawdown
                                </div>
                                <div className="result_numbers">
                                    3.7%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Winrate
                                </div>
                                <div className="result_numbers">
                                    86.8%
                                </div>
                            </div>


                        </div>
                        <a href="https://www.myfxbook.com/members/alg0_o/aero-ea-low-risk-set/11648009" target = "_blank">
                            <div className="see_stat_button">
                                Дивитися статистику
                            </div>
                        </a>
                    </div>
                    <div className="result_image">
                        <img src={result2025} alt=""/>
                    </div>
                </div>
            </div>

            <div className="video_demonstration">
                <div className="video_text">
                    <h2>
                        <span>Відео-демонстрація</span><br/> роботи бота
                    </h2>
                </div>
                <div className="video_block">
                    <img src={demonstration} alt=""/>
                </div>
            </div>


            <div className="how_to_fs">
                <div className="how_to_block">
                    <div className="learn_ho_to">
                        <div className="how_to_main_info">
                            Дізнайтесь як збільшити дохідність Aero за допомогою проп-компаній
                        </div>
                        <a href="https://teletype.in/@volodymyrbbk/d-OhuPGz2YL" target = "_blank">
                            <div className="read_more_button">
                                Читати більше
                            </div>
                        </a>
                    </div>

                    <div className="hot_to_image">
                        <img src={how_to_image} alt=""/>
                    </div>
                </div>
            </div>


            <div className="algo_feedback_block">
                <div className="feedback_h2">
                    <h2>
                        <span>Що кажуть ті,</span> хто користуються AERO EA
                    </h2>

                    <div className="reviews_nav">
                        <div
                            className="nav-btn prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <img src={prev_arrow} alt=""/>
                        </div>
                        <div
                            className="nav-btn next"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <img src={next_arrow} alt=""/>
                        </div>
                    </div>

                </div>

                <div className="slider-container">


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

                </div>

                <div className="center-btn">
                    <a href="https://t.me/+ZjmgYnV_mh9jOGMy" target="_blank">
                        <div className="more_reviews_button">
                            Більше відгуків
                        </div>
                    </a>
                </div>

            </div>

            <div className="test_result">
                <h2>
                    Результати тестів <span>за останні 10 років</span>
                </h2>
                <div className="test_details_block_fs">
                    <div className="test_details_block">
                        <div className="test_info">
                            <div className="test_theme">
                                Період тестування
                            </div>
                            <div className="test_detail_item">
                                Таймфрейм
                                <div className="test_detail_number">
                                    1 година (H1)
                                </div>
                            </div>
                            <div className="test_detail_item">
                                Дати тестування
                                <div className="test_detail_number">
                                    2016.01.04 — 2026.01.01
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                Депозит та прибуток
                            </div>
                            <div className="test_numbers_grid">
                                <div className="test_numbers_grid_item">
                                    <div className="test_item_name">
                                        Початковий депозит
                                    </div>
                                    <div className="test_item_number">
                                        10000.00
                                    </div>
                                </div>
                                <div className="test_numbers_grid_item">
                                    <div className="test_item_name">
                                        Чистий прибуток
                                    </div>
                                    <div className="test_item_number">
                                        +1113%
                                    </div>
                                </div>
                            </div>

                            <div className="test_detail_item">
                                Валютні пари
                                <div className="test_detail_number">
                                    XAUUSD ( GOLD )
                                </div>
                            </div>


                            <div className="test_theme mt24">
                                Ризик
                            </div>
                            <div className="test_detail_item">
                                Максимальна просадка
                                <div className="test_detail_number">
                                    12.31%
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                Статистика угод
                            </div>
                            <div className="test_detail_item">
                                Прибуткові угоди
                                <div className="test_detail_number">
                                    85.66%
                                </div>
                            </div>
                        </div>
                        <div className="test_result_image">
                            <img src={test_image} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
            <CalculatorSection/>

            <div className="buy_block_fs">
                <div className="buy_block">
                    <div className="buy_block_image">
                        <img src={bottom_product_image} alt=""/>
                    </div>
                    <div className="buy_block_info">
                        <div className="product_name_bottom">
                            Aero EA
                        </div>
                        <div className="product_desc_bottom">
                            Надійний фундамент для автоматичної торгівлі зі стабільними результатами.
                        </div>
                        <div className="buy_block_bot_stat">
                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    Year profit
                                </div>
                                <div className="bot_stat_num">
                                    +30%
                                </div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    Max drawdown
                                </div>
                                <div className="bot_stat_num">
                                    3.7%
                                </div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    Winrate
                                </div>
                                <div className="bot_stat_num">
                                    86.8%
                                </div>
                            </div>
                        </div>

                        <div className="bot_stat_price">
                            Ціна
                            <div className="price_block_bottom">
                                1200
                                <span>
                                    USD
                                </span>
                            </div>
                        </div>

                        <div className="bottom_buttons_block">
                            <div className="button_buy_bottom" onClick={() => {
                                setIsActive(true)
                            }}>
                                Придбати
                            </div>
                            <div className="piece_pay_bottom" onClick={() => {
                                setIsActive(true)
                            }}>
                                Оплата частинами
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <a href="/">
                    <img src={logo} alt="" className="logo_img"/>
                </a>
                <hr/>
                <div className="society_block">
                    <div>
                        <a href="https://www.instagram.com/alg0_o?igsh=MWR0dXY2dzk2bTlwOA==">Instagram</a>
                    </div>
                    <div>
                        <a href="https://t.me/alg0_o">Telegram</a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@alg0_ofx">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AeroPage;