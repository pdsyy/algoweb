import React, {useState} from 'react';

const YearMonthHandler = ({leftItem, rightItem}) => {

    const [hoverMonthYearFirst, setHoverMonthYearFirst] = useState(null);
    const [MonthYearFirst, setMonthYearFirst] = useState(leftItem);

    return (
        <div className="month_year_handler">
            <div className={`top_handler_calc ${
                (hoverMonthYearFirst === rightItem || (!hoverMonthYearFirst && MonthYearFirst === rightItem)) ? "active_month" : ""
            }`}></div>
            <div
                className={`year ${MonthYearFirst === leftItem ? "active" : ""}`}
                onClick={() => {
                    setHoverMonthYearFirst(leftItem)
                    setMonthYearFirst(leftItem)
                }}
            >
                {leftItem}</div>
            <div
                className={`month ${MonthYearFirst === rightItem ? "active" : ""}`}
                onClick={() => {
                    setHoverMonthYearFirst(rightItem)
                    setMonthYearFirst(rightItem)
                }}
            >
                {rightItem}
            </div>
        </div>
    );
};

export default YearMonthHandler;