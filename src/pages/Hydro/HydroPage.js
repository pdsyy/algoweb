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
import PopupBot from "../../components/PopupBot";
import {Pagination} from "swiper/modules";
import CalculatorSection from "../../components/CalculatorSection";

const HydroPage = ({activePopup, setActivePopup}) => {

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");


    const reviews = [
        {
            name: "Valerii R.",
            text: "Придбав бота два тижні тому, зацікавила детальна статистика 📈 Тестував його тиждень, бо в цій сфері давно і знаю, що часто на словах одне, а на практиці зовсім інше. Можу підтвердити — все відповідає заявленому, трейди сходяться зі статистикою.",
            image: review_image1,
        },
        {
            name: "Eduard F.",
            text: "Бот успішно пройшов першу фазу на FTMO за 22 торгові дні ✅ Другу фазу верифікації закрив усього за 4 дні. Результатом повністю задоволений, працює стабільно, без сюрпризів, дотримується ризик-менеджменту та показує прогнозований результат.",
            image: review_image2,
        },
        {
            name: "Dmytro K.",
            text: "Зробив свій перший вивід коштів з трейдингу за довгий період часу. Чесно — дуже приємні відчуття, особливо коли результат отриманий без постійного контролю. Чудовий бонус і подарунок до майбутніх свят, який реально мотивує рухатися далі.",
            image: review_image3,
        }, {
            name: "Dmytro A.",
            text: "Маю результат в +1200$ на власному рахунку Bybit! Бот торгує 3 місяці, планую збільшувати депозит найближчим часом",
            image: review_image4,
        },
        {
            name: "Nikolay S.",
            text: "Привіт ще раз, хочу написати відгук про роботу бота і, власне, про твою роботу. Спочатку бот купувався під проп, відразу скажу, що був попереджений, що всі ризики з пропами беру на себе. Що стосується особистого депозиту, бот з усіма злетами і падіннями приніс 4-5% за період з 18 серпня.",
            image: review_image5,
        }, {
            name: "Volodymyr D.",
            text: "У мене вийшло за місяць з урахуванням стопа на Лоу ризик і хай ризик по 20%😂",
            image: review_image6,
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
            "Налаштування бота під проп-компанію"
        ],
        bot_name: "HYDRO EA",
        bot_price:2000
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
                        Hydro ea
                    </div>
                    <div className="bot_main_theme">
                        Торговий бот з найвищою дохідністю
                    </div>
                    <div className="bot_main_desc">
                        Має понад 7 місяців підтвердженої статистики і 10 років тестів зі стабільними
                        результатами.
                    </div>
                    <div className="button_buy_bot" onClick = {() => {
                        setIsActive(true)
                    }}>
                        Придбати бота
                    </div>
                    <div className="product_slogan">
                        Приріст вашого капіталу
                    </div>
                    <div className="product_description">
                        Hydro поєднує спокій глибоких вод і силу припливів, допомагаючи знаходити баланс між
                        стабільністю та прибутковістю.
                        <br/><br/>
                        Він швидко реагує на зміни ринку, знаходячи оптимальні точки входу та виходу з високою точністю.
                        <br/><br/>
                        Маючи Winrate вище 90% та дохідність більше 4.5% на місяць,
                        Hydro показує себе як довершений скальпінг бот, який максимально імітує людську торгову
                        поведінку.
                    </div>
                </div>
            </div>

            <div className="product_advantages">
                <h2>
                    Переваги <span>Hydro EA</span>
                </h2>
                <div className="product_advantages_list_hydro">
                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon1} alt=""/>
                                Інтелектуальна точність
                                <div className="product_advantage_num">01</div>
                            </div>
                            <div className="product_advantage_desc">
                                Високий win rate завдяки інтелектуальному аналізу
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon2} alt=""/>
                                Контроль ризиків
                                <div className="product_advantage_num">02</div>
                            </div>
                            <div className="product_advantage_desc">
                                Торгує зі стоп-лоссами без мартингейла та усереднень
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon3} alt=""/>
                                Захист від волатильності
                                <div className="product_advantage_num">03</div>
                            </div>
                            <div className="product_advantage_desc">
                                Має фільтр новин для уникнення торгівлі у волатильний час
                            </div>
                        </div>
                    </div>

                </div>

                <div className="product_advantages_list_hydro sec">
                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon4} alt=""/>
                                Проп-сумісність
                                <div className="product_advantage_num">04</div>
                            </div>
                            <div className="product_advantage_desc">
                                Завдяки відсутності мартингейла та сітки, алгоритм повністю відповідає жорстким правилам
                                ризик-менеджменту більшості проп-компаній.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon5} alt=""/>
                                Цілодобовий моніторинг
                                <div className="product_advantage_num">05</div>
                            </div>
                            <div className="product_advantage_desc">
                                Алгоритм працює 24/7 без емоцій та втоми, миттєво реагуючи на торгові сигнали в будь-яку
                                сесію.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="product_result_fs">


                <div className="product_result">
                    <div className="product_result_info">
                        <div className="product_name">
                            Hydro EA
                        </div>
                        <div className="result_block_name_aero">
                            На публічному рахунку Hydro демонструє феноменальний результат із середньою дохідністю в 5%
                            місячних.
                        </div>
                        <div className="plus_result">
                            При цьому його winrate досягнув показника в 91.9%.
                        </div>
                        <div className="result_advantages">
                            <div className="result_item">
                                <div className="result_name">
                                    Year profit
                                </div>
                                <div className="result_numbers">
                                    +50%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Max drawdown
                                </div>
                                <div className="result_numbers">
                                    14.3%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Winrate
                                </div>
                                <div className="result_numbers">
                                    91.9%
                                </div>
                            </div>


                        </div>

                        <a href="https://www.myfxbook.com/portfolio/aero-ea-low-risk-set/11648009">
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
                            Дізнайтесь як збільшити дохідність Hydro за допомогою проп-компаній
                        </div>
                        <div className="read_more_button">
                            Читати більше
                        </div>
                    </div>

                    <div className="hot_to_image">
                        <img src={how_to_image} alt=""/>
                    </div>
                </div>
            </div>


            <div className="algo_feedback_block">
                <div className="feedback_h2">
                    <h2>
                        <span>Що кажуть ті,</span> хто користуються HYDRO EA
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
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={24}
                        slidesPerView={3}
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
                                    1 день ( D1 )
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
                                        +5705%
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
                                    11.56%
                                </div>
                            </div>

                            <div className="test_theme mt24">
                                Статистика угод
                            </div>
                            <div className="test_detail_item">
                                Прибуткові угоди
                                <div className="test_detail_number">
                                    94.24%
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
                            Hydro EA
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
                                    +50%
                                </div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    Max drawdown
                                </div>
                                <div className="bot_stat_num">
                                    14.3%
                                </div>
                            </div>

                            <div className="bot_stat_item">
                                <div className="bot_stat_name">
                                    Winrate
                                </div>
                                <div className="bot_stat_num">
                                    91.9%
                                </div>
                            </div>
                        </div>

                        <div className="bot_stat_price">
                            Ціна
                            <div className="price_block_bottom">
                                2000
                                <span>
                                    USD
                                </span>
                            </div>
                        </div>

                        <div className="bottom_buttons_block">
                            <div className="button_buy_bottom" onClick = {() => {
                                setIsActive(true)
                            }}>
                                Придбати
                            </div>
                            <div className="piece_pay_bottom" onClick = {() => {
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

export default HydroPage;