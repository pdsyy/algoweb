import React, {useState} from 'react';
import InputRangeBar from "../pages/Terra/InputRangeBar";
import dollar_circle from "../pages/Terra/images/dollar_circle.svg";
import info_icon from "../pages/Terra/images/info_icon.svg";
import YearMonthHandler from "./YearMonthHandler";
import calendar_icon from "../pages/Terra/images/calendar_icon.svg";
import percent_icon from "../pages/Terra/images/percent_icon.svg";

const CalculatorSection = () => {

    const [calcResults, setCalcResults] = useState([]);

    const [startSum, setStartSum] = useState(10000)

    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(20);
    const [refillSum, setRefillSum] = useState(0);

    const [periodUnit, setPeriodUnit] = useState("Рік"); // Рік / Місяць
    const [rateFrequency, setRateFrequency] = useState("Щорічно"); // Щорічно / Щомісяця
    const [refillFrequency, setRefillFrequency] = useState("Щорічно"); // Щорічно / Щомісяця

    const handleCalculate = () => {
        let currentBalance = startSum;
        let totalInvested = startSum;
        let totalIncome = 0;
        const results = [];

        // 1. Определяем общее количество итераций (месяцев или лет)
        const iterations = years;

        for (let i = 1; i <= iterations; i++) {
            let periodIncome = 0;
            let periodAdded = 0;
            const startOfPeriodBalance = currentBalance;

            // 2. Расчет дохода за текущий период (Год или Месяц)
            if (periodUnit === "Рік" && rateFrequency === "Щомісяця") {
                // Магия сложного процента: 12 начислений внутри одного года
                for (let m = 1; m <= 12; m++) {
                    let monthlyProfit = currentBalance * (rate / 100);
                    currentBalance += monthlyProfit;
                    periodIncome += monthlyProfit;
                }
            } else {
                // Обычное начисление раз в период
                periodIncome = currentBalance * (rate / 100);
                currentBalance += periodIncome;
            }

            // 3. Расчет пополнения за текущий период
            if (periodUnit === "Рік" && refillFrequency === "Щомісяця") {
                periodAdded = refillSum * 12;
            } else {
                periodAdded = refillSum;
            }

            currentBalance += periodAdded;
            totalInvested += periodAdded;
            totalIncome += periodIncome;

            results.push({
                year: i,
                balance: startOfPeriodBalance,
                addedYear: periodAdded,
                totalAdded: totalInvested,
                yearlyIncome: periodIncome,
                totalIncome: totalIncome,
                finalBalance: currentBalance
            });
        }
        setCalcResults(results);
    };

    return (
        <div className="calculate_block_container">
            <h2>
                <span>Розрахуйте свою</span> довгострокову дохідність
            </h2>
            <div className="calculate_block_fs">
                <div className="calculate_block">
                    <div className="calculate_theme">
                        Сума та термін
                    </div>
                    <div className="input_name">
                        Початкова сума
                    </div>
                    <InputRangeBar SLIDER_MAX="50000" startValue="10000" inputIcon={dollar_circle} value={startSum}
                                   setValue={setStartSum}/>

                    <div className="calculate_warn">
                        <img src={info_icon} alt=""/> Сума, з якої починаються інвестиції
                    </div>
                    <div className="input_name">
                        Одиниця виміру
                    </div>


                    <YearMonthHandler
                        leftItem="Рік"
                        rightItem="Місяць"
                        handleValue={periodUnit}
                        setHandleValue={setPeriodUnit}
                    />

                    <div className="input_name mt8">
                        Термін
                    </div>

                    <InputRangeBar SLIDER_MAX="10" startValue="5" inputIcon={calendar_icon} value={years}
                                   setValue={setYears}/>

                    <div className="calculate_warn">
                        <img src={info_icon} alt=""/> Кількість років/місяців, протягом яких ви плануєте інвестувати
                        кошти
                    </div>

                    <hr className="calculate_hr"/>

                    <div className="calculate_theme mt12">
                        Нарахування відсотків
                    </div>
                    <div className="input_name mt8">
                        Періодичність
                    </div>

                    <YearMonthHandler
                        leftItem="Щорічно"
                        rightItem="Щомісяця"
                        handleValue={rateFrequency}
                        setHandleValue={setRateFrequency}
                    />

                    <div className="input_name mt8">
                        Відсоткова ставка
                    </div>

                    <InputRangeBar SLIDER_MAX="40" startValue="20" inputIcon={percent_icon} value={rate}
                                   setValue={setRate}/>

                    <div className="calculate_warn">
                        <img src={info_icon} alt=""/> Розмір річного/місячного доходу у відсотках
                    </div>

                    <hr className="calculate_hr"/>

                    <div className="calculate_theme mt12">
                        Поповнення
                    </div>
                    <div className="input_name mt8">
                        Перiодичнiсть
                    </div>
                    <YearMonthHandler
                        leftItem="Щорічно"
                        rightItem="Щомісяця"
                        handleValue={refillFrequency}
                        setHandleValue={setRefillFrequency}
                    />
                    <div className="input_name mt8">
                        Сума
                    </div>

                    <InputRangeBar SLIDER_MAX="10000" startValue="0" inputIcon={dollar_circle} value={refillSum}
                                   setValue={setRefillSum}/>

                    <div className="calculate_warn">
                        <img src={info_icon} alt=""/> Сума, на яку плануєте поповнювати
                    </div>

                    <div className="calculate_button" onClick={handleCalculate}>
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
                                    <th>{periodUnit === "Рік" ? "Рік" : "Місяць"}</th>
                                    <th>Баланс</th>
                                    <th>{periodUnit === "Рік" ? "Поповнено (рік)" : "Поповнено (міс.)"}</th>
                                    <th>Сумарні інвестиції</th>
                                    <th>{periodUnit === "Рік" ? "Річний дохід" : "Місячний дохід"}</th>
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
    );
};

export default CalculatorSection;