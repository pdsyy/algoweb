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

const MainPage = () => {


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


    const botsList = [
        {
            image: bot_item1,
            name: "Terra EA",
            description: "Бот з найдовшою публічною статистикою в Україні.",
            advantages: {
                yearProfit: "+20%",
                maxDrawDown: "16.5%",
                winRate: "72.3%"
            },
            price: 800,
            href: "/terra",
            prop: false,
            paying: true,
        }, {
            image: bot_item2,
            name: "Aero EA",
            description: "Бот з найнижчою просадкою в асортименті.",
            advantages: {
                yearProfit: "+30%",
                maxDrawDown: "3.7%",
                winRate: "86.8%"
            },
            price: 1200,
            href: "/aero",
            prop: true,
            paying: true,

        }, {
            image: bot_item3,
            name: "Hydro EA",
            description: "Бот з найвищою прибутковістю в асортименті.",
            advantages: {
                yearProfit: "+50%",
                maxDrawDown: "14.3%",
                winRate: "91.9%"
            },
            price: 2000,
            href: "/hydro",
            prop: true,
            paying: true
        }]

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
            name: "Andry D.",
            text: "Пишу відгук про свій досвід використання ботів. Придбав одразу два алго — дуже сподобалась подача та презентація. Запустив на одному рахунку й отримав хороші цифри. Підтримка, консультації та супровід — на високому рівні.",
            image: review_image4,
        },
        {
            name: "Mykola P.",
            text: "За перший місяць користування ботом отримав такий результат ⬆️ +5% чистого прибутку до депозиту. Працює стабільно, без зайвого ризику, з чіткою логікою входів і виходів. Для мене це хороший та прогнозований результат.",
            image: review_image5,
        },
        {
            name: "Max S.",
            text: "Довго не доходили руки залишити фідбек по Террі. За 3 місяці на підвищеному ризику отримав +48%. Дуже задоволений ботом, постійними оновленнями налаштувань і підтримкою. Окрема повага за чесність — усе, що пишеш, відповідає реальності.",
            image: review_image6,
        },
    ];


    const swiperRef = useRef(null);

    const [openFaqs, setOpenFaqs] = useState([]);

    const faqElements = [
        {
            question: "Як підібрати бота?",
            answer: "Усі ризики по кожному боту прописані на його сторінці. Ми працюємо виключно зі стабільними і низькими настройками ризику, які не перевищують 15-20% просадки від депозиту."
        }, {
            question: "Чи потрібно мені постійно тримати комп'ютер увімкненим?",
            answer: "Ні. Боти працюють на віддалених серверах. Ви можете вимкнути телефон або ноутбук - процес не перерветься."
        }, {
            question: "Чи потрібен великий досвід у трейдингу?",
            answer: "Абсолютно ні, все що потрібно від клієнта це створення аккаунту для торгівлі і підключення бота до нього. Усі відео-інструкції як це зробити будуть доступні після покупки і сам процес на займе більше 5 хвилин."
        }, {
            question: "Чи можна втратити весь депозит?",
            answer: "Наші боти були протестовані на різних етапах ринку та критичних ситуаціях як епідемія ковіду, початок війни і тому подібні. Тому ми готові до будь-яких сценаріїв, в яких з нашими настройками злив депозиту неможливий."
        }, {
            question: "Як підібрати бота?",
            answer: "Для правильного підбору бота рекомендуємо ознайомитись з кожним із них на окремих сторінках або звернутись на консультацію в телеграм, де ми визначимо який саме алгоритм підходить саме вам."
        },
    ]

    return (
        <div className="main_page">
            <div className="main_block" onMouseMove={handleMouseMove}>
                <img src={window.innerWidth > 768 ? mainBlockBg : mainBlockBgMobile} alt="" className="main_block_bg"/>
                <div className="main_info_block">
                    <div className="algo_block">
                        algo
                    </div>
                    <h1 className="main_h1">
                        Алгоритмічна торгівля за чіткими правилами
                    </h1>
                    <div className="main_desc">
                        Торгові боти, які працюють за заданою логікою та з контролем ризику.
                    </div>
                    <div className="select_bot_button" onClick={() => scrollToSection("catalog")}>
                        Обрати бота
                    </div>
                </div>

                <img src={metalPackage} alt="" className="metalPackage" ref={boxRef}/>
            </div>
            <div className="main_page_content">


                <div className="about_us_block">
                    <div className="market_list">
                        <img src={market_image1} alt=""/>
                        <img src={market_image2} alt=""/>
                        <img src={market_image3} alt=""/>
                        <img src={market_image4} alt=""/>
                        <img src={market_image5} alt=""/>
                        <img src={market_image6} alt=""/>
                        <img src={market_image7} alt=""/>
                    </div>
                    <h2 className="our_main_advantages">
                        <span>Наша команда вже автоматизувала трейдинг</span><br/>
                        для багатьох клієнтів, допоможемо і вам.
                    </h2>
                    <div className="our_advantages_list">
                        <div className="advantages_point">
                            <div className="advantages_point_number">2</div>
                            <div className="advantages_point_desc">Роки на ринку</div>
                        </div>
                        <div className="advantages_point">
                            <div className="advantages_point_number">3</div>
                            <div className="advantages_point_desc">Профітних ботів</div>
                        </div>
                        <div className="advantages_point">
                            <div className="advantages_point_number">5</div>
                            <div className="advantages_point_desc">Рахунків з live статистикою</div>
                        </div>
                        <div className="advantages_point">
                            <div className="advantages_point_number">+80%</div>
                            <div className="advantages_point_desc">За 2025 рік</div>
                        </div>
                    </div>

                </div>

                <div className="money_in_management">
                    <div className="money_in_management_number">
                        200 000$
                    </div>

                    <div className="in_management">
                        в управлінні
                    </div>
                </div>

                <div className="first_deal_block" id="how-it-works">
                    <h2>
                        <span>Шлях від налаштування</span> до першої угоди
                    </h2>
                    <div className="first_deal_details">
                        <div className="first_deal_image">
                            <img src={firstDealImage} alt=""/>
                        </div>


                        <div className="first_deal_block_list">
                            <div className="first_deal_item_gradient">

                                <div className="first_deal_item">
                                    <div className="item_name">
                                        <img src={firstDealItem1} alt=""/>
                                        Вибір алгоритму
                                        <div className="item_number">
                                            01
                                        </div>
                                    </div>
                                    <div className="item_desc">
                                        Ви визначаєте свої цілі та допустимий ризик. У нашому каталозі є рішення
                                        як для консервативного накопичення, так і для активної торгівлі.
                                    </div>
                                </div>
                            </div>


                            <div className="first_deal_item_gradient">

                                <div className="first_deal_item">
                                    <div className="item_name">
                                        <img src={firstDealItem2} alt=""/>
                                        Підключення
                                        <div className="item_number">
                                            02
                                        </div>
                                    </div>
                                    <div className="item_desc">
                                        Бот встановлюється на ваш акаунт за кілька кліків. Ви отримуєте всі
                                        необхідні інструкції по підключенню разом з індивідуальною ліцензією
                                        для активації, після чого обраний бот починає свою роботу.
                                    </div>
                                </div>
                            </div>


                            <div className="first_deal_item_gradient">

                                <div className="first_deal_item">
                                    <div className="item_name">
                                        <img src={firstDealItem3} alt=""/>
                                        Автономна торгівля
                                        <div className="item_number">
                                            03
                                        </div>
                                    </div>
                                    <div className="item_desc">
                                        Алгоритм сканує ринок 24/7. Як тільки умови стратегії збігаються (ціна,
                                        індикатори, обсяги), бот миттєво відкриває позицію.
                                    </div>
                                </div>
                            </div>


                            <div className="first_deal_item_gradient">
                                <div className="first_deal_item">
                                    <div className="item_name">
                                        <img src={firstDealItem4} alt=""/>
                                        Моніторинг і результат
                                        <div className="item_number">
                                            04
                                        </div>
                                    </div>
                                    <div className="item_desc">
                                        Ви слідкуєте за статистикою в реальному часі. У будь-який момент роботу
                                        бота можна призупинити або скоригувати налаштування.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="effective_algorithm" id="advantages">
                    <h2>
                        Чому алгоритми ефективніші <br/><span>за ручну торгівлю?</span>
                    </h2>

                    <div className="effective_points first">
                        <div className="effective_point">
                            <img src={effectiveImage1} alt=""/>
                            <div className="name">
                                Торгівля без «людського фактора»
                            </div>
                            <div className="desc">
                                Бот не закриє угоду занадто рано через страх і не затримається в
                                збитках через надію. Лише математичне очікування.
                            </div>
                        </div>
                        <div className="effective_point">
                            <img src={effectiveImage2} alt=""/>
                            <div className="name">
                                Реальна статистика
                            </div>
                            <div className="desc">
                                У кожного алгоритму є відкрита статистика мінімум за 6 місяців роботи
                                на реальному рахунку у ліцензованого брокера.
                            </div>
                        </div>
                    </div>

                    <div className="effective_points second">
                        <div className="effective_point">
                            <img src={effectiveImage3} alt=""/>
                            <div className="name">
                                Пасивний дохід
                            </div>
                            <div className="desc">
                                Ринок не спить. Бот працює і вдень, і вночі, поки ви відпочиваєте.
                                Це повноцінний пасивний дохід без вашої участі.
                            </div>
                        </div>
                        <div className="effective_point">
                            <img src={effectiveImage4} alt=""/>
                            <div className="name">
                                Прозорість і тести
                            </div>
                            <div className="desc">
                                Кожен алгоритм прогнаний через історичні дані. Ви розумієте
                                логіку роботи системи ще до того, як запустите її.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bots_catalog" id="catalog">
                    <h2>
                        Каталог ботів
                    </h2>


                    <div className="bots_list">
                        {botsList.map((el) =>
                            <div className="bot_item">
                                <div className="bot_image">
                                    {el.prop ? <div className="prop_pl">
                                        Підходить під проп
                                    </div> : ""}
                                    <img src={el.image} alt=""/>

                                    {el.paying ?
                                        <div className="paying_pl">
                                            Оплата частинами
                                        </div>
                                        : ""}
                                </div>
                                <div className="bot_name">
                                    {el.name}
                                </div>
                                <div className="bot_description">
                                    {el.description}
                                </div>
                                <div className="bot_advantages">
                                    <div className="advantages_item">
                                        <div className="advantages_name">
                                            Year profit
                                        </div>
                                        <div className="advantages_numbers">
                                            {el.advantages.yearProfit}
                                        </div>
                                    </div>
                                    <div className="advantages_item">
                                        <div className="advantages_name">
                                            Max drawdown
                                        </div>
                                        <div className="advantages_numbers">
                                            {el.advantages.maxDrawDown}
                                        </div>
                                    </div>
                                    <div className="advantages_item">
                                        <div className="advantages_name">
                                            Winrate
                                        </div>
                                        <div className="advantages_numbers">
                                            {el.advantages.winRate}
                                        </div>
                                    </div>


                                </div>

                                <div className="bot_price_block">
                                    <div className="bot_price_text">
                                        Ціна
                                    </div>
                                    <div className="bot_price">
                                        {el.price}
                                        <span>USD</span>
                                    </div>
                                </div>

                                <a href={el.href}>
                                    <div className="bot_more_details">
                                        Детальніше
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="algo_feedback_block" id="reviews">
                    <div className="feedback_h2">
                        <h2>
                            <span>Що кажуть ті,</span> хто вже перейшов на ALGO
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

                <div className="faq_container" id="faq">
                    <h2>
                        Відповіді на запитання
                    </h2>
                    <div className="faq_list">
                        <img src={circles_bg} alt="" className="bg_circles_faq"/>
                        <div className="faq_questions_list">
                            {faqElements.map((el, index) => {
                                const isOpen = openFaqs.includes(index);

                                return (
                                    <div
                                        key={index}
                                        className={`faq_item ${isOpen ? "open_faq" : ""}`}
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
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>


                <div className="select_bot_fs">
                    <div className="select_bot_block">
                        <div className="select_bot_info">
                            <div className="select_bot_theme">
                                Складно вибрати свого першого бота?
                            </div>
                            <div className="select_bot_desc">
                                Ринок пропонує сотні варіантів, але не всі вони підходять під ваш капітал і темперамент.
                                Ми допоможемо підібрати рішення, яке буде комфортним саме для вас.
                            </div>
                            <a href="https://t.me/alg0_o">
                                <div className="consult_button">
                                    Отримати консультацію
                                </div>
                            </a>
                        </div>
                        <img src={select_bot_img} alt=""/>
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
        </div>
    );
};

export default MainPage;