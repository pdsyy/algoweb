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

const TerraPage = () => {

    const [hoverMode, setHoverMode] = useState(null);
    const [mode, setMode] = useState("2024");




    const reviews = [
        {
            name: "Taras O.",
            text: "Користуюсь ботом з листопада і дуже задоволений результатом. Шукав інструмент для пасивного доходу з низькими ризиками — цей варіант підійшов ідеально. За два місяці отримав 4% чистого прибутку завдяки системі складного відсотка. Бот повністю автоматичний: налаштував за допомогою продавця і більше не втручався. Особливо радує, що система сама вимикається під час сильних новин, мінімізуючи ризики. Очікую близько 40% річних. Рекомендую як надійний та безпечний інструмент.",
            image: review_image1,
        },
        {
            name: "Max S.",
            text: "Бот демонструє відмінну роботу. Використовую його на мінімальних ризиках для стабільного приросту капіталу. Для мене це стала чудова альтернатива іншим способам диверсифікації коштів під відсоток. Величезним плюсом є те, що бот інтегрується з біржею Bybit, і я можу тримати весь депозит на власному рахунку, що додає впевненості у безпеці активів. Інструмент зручний, зрозумілий і, головне, приносить прогнозований прибуток без зайвого клопоту та щоденного моніторингу.",
            image: review_image2,
        },
        {
            name: "Dmytro P.",
            text: "Користуюсь ботом «Терра» вже три місяці. Вирішив протестувати стратегію на високих ризиках і результат вразив — маю +48% до депозиту. Дуже круто, що розробник постійно оновлює налаштування та завжди на зв’язку в чаті, відповідаючи на всі питання. Окрім технічної частини, імпонує чесність автора: слова в постах завжди відповідають реальним цифрам. Це викликає велику довіру. З нетерпінням чекаю на нові релізи та алгоритми, бо цей продукт однозначно вартий уваги.",
            image: review_image3,
        }, {
            name: "Valerii R.",
            text: "Придбав цей софт близько місяця тому і вже можу зробити перші висновки. Процес налаштування пройшов швидко, алгоритм стратегії зрозумілий навіть без глибоких технічних знань. Бот працює дуже чітко, без технічних збоїв чи помилок у виконанні ордерів. Це саме той продукт, який відповідає заявленим характеристикам. Поки що все йде за планом, результати стабільні, тож можу сміливо радити цього бота тим, хто цінує якість виконання та зрозумілу логіку торгівлі.",
            image: review_image4,
        },
        {
            name: "Sergii I.",
            text: "Працюю з ботом «Терра» вже п’ятий місяць. Свідомо пішов на експеримент і занизив рівень безпеки (завищив ризики), хоча розробник попереджав про можливі наслідки. Незважаючи на це, результатом за цей період дуже задоволений — бот витримав ринкові рухи та показав гарний плюс. Система працює стабільно навіть при агресивних налаштуваннях. Дякую Вові за якісний продукт, який дає можливість гнучко керувати своєю стратегією та отримувати бажаний прибуток на дистанції.",
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
            "Гарантія 100% ідентичності ваших результатів з нашими"],
        bot_name: "TERRA EA",
        bot_price:800
    }


    const swiperRef = useRef(null);



    const [calcResults, setCalcResults] = useState([]);

    const [startSum, setStartSum] = useState(10000)

    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(20);
    const [refillSum, setRefillSum] = useState(0);

    const handleCalculate = () => {
        // Для теста берем значения: 10 000 старт, 10 лет, 20% ставка, 0 пополнение
        // Позже вы замените это на реальные значения из ваших инпутов
        //const startAmount = 10000;
        //const years = 10;
        //const rate = 10;
        //const monthlyAdd = 0;

        let currentBalance = startSum;
        let totalInvested = startSum;
        let totalIncome = 0;
        const results = [];

        for (let i = 1; i <= years; i++) {
            const startOfYearBalance = currentBalance;
            const yearlyIncome = currentBalance * (rate / 100);
            const yearlyAdded = refillSum * 12;

            currentBalance += yearlyIncome + yearlyAdded;
            totalInvested += yearlyAdded;
            totalIncome += yearlyIncome;

            results.push({
                year: i,
                balance: startOfYearBalance,
                addedYear: yearlyAdded,
                totalAdded: totalInvested,
                yearlyIncome: yearlyIncome,
                totalIncome: totalIncome,
                finalBalance: currentBalance
            });
        }
        setCalcResults(results);
    };


    return (
        <div className="product_page">
            <PopupBot
                bot_info={bot_info_popup.bot_info}
                bot_name={bot_info_popup.bot_name}
                price={bot_info_popup.bot_price}
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <div className="bot_info_main">
                <div>
                    <img src={productImage} alt=""/>
                </div>
                <div className="product_info_main">
                    <div className="product_name">
                        TERRA EA
                    </div>
                    <div className="bot_main_theme">
                        Бот з найдовшою статистикою в Україні
                    </div>
                    <div className="bot_main_desc">
                        Має понад 2 роки підтвердженої статистики зі стабільними результатами
                    </div>
                    <div className="button_buy_bot" onClick = {() => {
                        setIsActive(true)
                    }}>
                        Придбати бота
                    </div>
                    <div className="product_slogan">
                        Основа вашого капіталу
                    </div>
                    <div className="product_description">
                        Як земля, що підтримує все живе і слугує фундаментом для всього, Terra EA забезпечить вам
                        надійну основу для торгівлі зі стабільними результатами.
                        <br/><br/>
                        Алгоритм створено для тих, хто шукає впевненість.
                        <br/><br/>
                        Стратегія має прибуткове математичне очікування і пройшла перевірку часом і ринком.
                    </div>
                </div>
            </div>

            <div className="product_advantages">
                <h2>
                    <span>Інтелектуальний підхід</span> до трейдингу
                </h2>
                <div className="product_advantages_list">
                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon1} alt=""/>
                                Комбінація індикаторів:
                                <div className="product_advantage_num">01</div>
                            </div>
                            <div className="product_advantage_desc">
                                В основі алгоритму лежить синергія RSI, Bollinger Bands та ATR.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon2} alt=""/>
                                Розумний ризик-менеджмент:
                                <div className="product_advantage_num">02</div>
                            </div>
                            <div className="product_advantage_desc">
                                Грамотне управління капіталом, хеджування позицій та використання мартингейла
                                лише за необхідності.
                            </div>
                        </div>
                    </div>

                    <div className="product_advantage_item_gradient">
                        <div className="product_advantage_item">
                            <div className="product_advantage_name">
                                <img src={advantageIcon3} alt=""/>
                                Money менеджмент
                                <div className="product_advantage_num">03</div>
                            </div>
                            <div className="product_advantage_desc">
                                Терра демонструє ефективну роботу з мінімальними просадками при депозиті від 1000$,
                                що для мартінгейл ботів є рідкістю
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="product_result_fs">


                <div className="product_result">
                    <div className="product_result_info">
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
                            Результати говорять самі за себе
                        </div>
                        <div className="plus_result">
                            23 з 24 місяців торгівлі закриті в плюс.
                        </div>
                        <div className="result_advantages">
                            <div className="result_item">
                                <div className="result_name">
                                    Year profit
                                </div>
                                <div className="result_numbers">
                                    +20%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Max drawdown
                                </div>
                                <div className="result_numbers">
                                    16.5%
                                </div>
                            </div>
                            <div className="result_item">
                                <div className="result_name">
                                    Winrate
                                </div>
                                <div className="result_numbers">
                                    72.3%
                                </div>
                            </div>


                        </div>

                        <div className="see_stat_button">
                            Дивитися статистику
                        </div>
                    </div>
                    <div className="result_image">
                        <img src={mode === "2024" ? result2024 : result2025} alt=""/>
                    </div>
                </div>
            </div>

            <div className = "video_demonstration">
                <div className = "video_text">
                    <h2>
                        <span>Відео-демонстрація</span><br/> роботи бота
                    </h2>
                </div>
                <div className = "video_block">
                    <img src = {demonstration} alt = ""/>
                </div>
            </div>


            <div className="algo_feedback_block">
                <div className="feedback_h2">
                    <h2>
                        <span>Що кажуть ті,</span> хто користуються TERRA EA
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
                    <div className="more_reviews_button">
                        Більше відгуків
                    </div>
                </div>

            </div>

            <div className = "test_result">
                <h2>
                    Результати тестів <span>за останні 10 років</span>
                </h2>
                <div className = "test_details_block_fs">
                    <div className = "test_details_block">
                        <div className = "test_info">
                            <div className = "test_theme">
                                Період тестування
                            </div>
                            <div className = "test_detail_item">
                                Таймфрейм
                                <div className = "test_detail_number">
                                    1 година (H1)
                                </div>
                            </div>
                            <div className = "test_detail_item">
                                Дати тестування
                                <div className = "test_detail_number">
                                    2016.01.04  — 2026.01.01
                                </div>
                            </div>

                            <div className = "test_theme mt24">
                                Депозит та прибуток
                            </div>
                            <div className = "test_numbers_grid">
                                <div className = "test_numbers_grid_item">
                                    <div className = "test_item_name">
                                        Початковий депозит
                                    </div>
                                    <div className = "test_item_number">
                                        10000.00
                                    </div>
                                </div>
                                <div className = "test_numbers_grid_item">
                                    <div className = "test_item_name">
                                        Чистий прибуток
                                    </div>
                                    <div className = "test_item_number">
                                        +525.59%
                                    </div>
                                </div>
                            </div>

                            <div className = "test_detail_item">
                                Валютні пари
                                <div className = "test_detail_number">
                                    NZDCAD, AUDCAD, AUDNZD
                                </div>
                            </div>


                            <div className = "test_theme mt24">
                                Ризик
                            </div>
                            <div className = "test_detail_item">
                                Максимальна просадка
                                <div className = "test_detail_number">
                                    31.42%
                                </div>
                            </div>

                            <div className = "test_theme mt24">
                                Статистика угод
                            </div>
                            <div className = "test_detail_item">
                                Статистика угод
                                <div className = "test_detail_number">
                                    70.15%
                                </div>
                            </div>
                        </div>
                        <div className = "test_result_image">
                            <img src = {test_image} alt = ""/>
                        </div>
                    </div>
                </div>

            </div>
            <div className = "calculate_block_container">
                <h2>
                    <span>Розрахуйте свою</span> довгострокову дохідність
                </h2>
                <div className = "calculate_block_fs">
                    <div className = "calculate_block">
                        <div className = "calculate_theme">
                            Сума та термін
                        </div>
                        <div className = "input_name">
                            Початкова сума
                        </div>
                        <InputRangeBar SLIDER_MAX = "50000" startValue = "10000" inputIcon = {dollar_circle} value={startSum} setValue={setStartSum}/>

                        <div className = "calculate_warn">
                            <img src = {info_icon} alt = ""/> Сума, з якої починаються інвестиції
                        </div>
                        <div className = "input_name">
                            Одиниця виміру
                        </div>


                        <YearMonthHandler leftItem = "Рік" rightItem = "Місяць"/>

                        <div className = "input_name mt8">
                            Термін
                        </div>

                        <InputRangeBar SLIDER_MAX="10" startValue="5" inputIcon={calendar_icon} value={years} setValue={setYears}/>

                        <div className = "calculate_warn">
                            <img src = {info_icon} alt = ""/> Кількість років/місяців, протягом яких ви плануєте інвестувати кошти
                        </div>

                        <hr className = "calculate_hr"/>

                        <div className = "calculate_theme mt12">
                            Нарахування відсотків
                        </div>
                        <div className = "input_name mt8">
                            Періодичність
                        </div>

                        <YearMonthHandler leftItem = "Щорічно" rightItem = "Щомісяця"/>

                        <div className = "input_name mt8">
                            Відсоткова ставка
                        </div>

                        <InputRangeBar SLIDER_MAX="40" startValue="20" inputIcon={percent_icon} value={rate} setValue={setRate}/>

                        <div className = "calculate_warn">
                            <img src = {info_icon} alt = ""/> Розмір річного/місячного доходу у відсотках
                        </div>

                        <hr className = "calculate_hr"/>

                        <div className = "calculate_theme mt12">
                            Поповнення
                        </div>
                        <div className = "input_name mt8">
                            Перiодичнiсть
                        </div>
                        <YearMonthHandler leftItem = "Щорічно" rightItem = "Щомісяця"/>
                        <div className = "input_name mt8">
                            Сума
                        </div>

                        <InputRangeBar SLIDER_MAX="10000" startValue="0" inputIcon={dollar_circle} value={refillSum} setValue={setRefillSum}/>

                        <div className = "calculate_warn">
                            <img src = {info_icon} alt = ""/> Сума, на яку плануєте поповнювати
                        </div>

                        <div className = "calculate_button" onClick={handleCalculate}>
                            Розрахувати дохідність
                        </div>

                    </div>
                    <div className="calculate_table">
                        <div className="calculate_table_name">Таблиця з розрахунками</div>

                        {calcResults.length > 0 ? (
                            <div className="table_wrapper">
                                <table className="results_table">
                                    <thead>
                                    <tr>
                                        <th>Рік</th>
                                        <th>Баланс</th>
                                        <th>Поповнено за рік</th>
                                        <th>Сумарні поповнення</th>
                                        <th>Річний дохід</th>
                                        <th>Загальний дохід</th>
                                        <th>Підсумковий баланс</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {calcResults.map((row) => (
                                        <tr key={row.year}>
                                            <td>{row.year}</td>
                                            <td>{row.balance.toLocaleString()}</td>
                                            <td>{row.addedYear.toLocaleString()}</td>
                                            <td>{row.totalAdded.toLocaleString()}</td>
                                            <td>{row.yearlyIncome.toLocaleString()}</td>
                                            <td>{row.totalIncome.toLocaleString()}</td>
                                            <td>{row.finalBalance.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="calculate_table_description">
                                Terra EA в середньому робить стабільні +20% на рік/1.6% на місяць.<br/>
                                Чим більший термін інвестицій, тим більша магія складного відсотку!
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className = "buy_block_fs">
                <div className = "buy_block">
                    <div className = "buy_block_image">
                        <img src = {bottom_product_image} alt = ""/>
                    </div>
                    <div className = "buy_block_info">
                        <div className = "product_name_bottom">
                            Terra EA
                        </div>
                        <div className = "product_desc_bottom">
                            Надійний фундамент для автоматичної торгівлі зі стабільними результатами.
                        </div>
                        <div className = "buy_block_bot_stat">
                            <div className = "bot_stat_item">
                                <div className = "bot_stat_name">
                                    Year profit
                                </div>
                                <div className = "bot_stat_num">
                                    +20%
                                </div>
                            </div>

                            <div className = "bot_stat_item">
                                <div className = "bot_stat_name">
                                    Max drawdown
                                </div>
                                <div className = "bot_stat_num">
                                    16.5%
                                </div>
                            </div>

                            <div className = "bot_stat_item">
                                <div className = "bot_stat_name">
                                    Winrate
                                </div>
                                <div className = "bot_stat_num">
                                    72.3%
                                </div>
                            </div>
                        </div>

                        <div className = "bot_stat_price">
                            Ціна
                            <div className = "price_block_bottom">
                                800
                                <span>
                                    USD
                                </span>
                            </div>
                        </div>

                        <div className = "bottom_buttons_block">
                            <div className = "button_buy_bottom" onClick = {() => {
                                setIsActive(true)
                            }}>
                                Придбати
                            </div>
                            <div className = "piece_pay_bottom">
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
                        <a href = "https://www.instagram.com/alg0_o?igsh=MWR0dXY2dzk2bTlwOA==">Instagram</a>
                    </div>
                    <div>
                        <a href = "https://t.me/alg0_o">Telegram</a>
                    </div>
                    <div>
                        <a href = "https://www.youtube.com/@alg0_ofx">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerraPage;