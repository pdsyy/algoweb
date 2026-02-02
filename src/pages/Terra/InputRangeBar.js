import React, {useState} from 'react';
import dollar_circle from "./images/dollar_circle.svg";

const InputRangeBar = ({SLIDER_MAX, startValue, inputIcon, value, setValue}) => {


    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const cleanNumber = (str) => {
        return str.replace(/\s/g, '');
    };

    const handleChange = (e) => {
        const rawValue = cleanNumber(e.target.value);

        if (rawValue !== '' && !/^\d+$/.test(rawValue)) return;

        const numValue = rawValue === '' ? 0 : parseInt(rawValue, 10);
        setValue(numValue);
    };

    const sliderValue = Math.min(value, SLIDER_MAX);
    const progress = (sliderValue / SLIDER_MAX) * 100;
    return (
        <>
            <div className="input_block">
                <div className="input_icon">
                    <img src={inputIcon} alt="icon" />
                </div>
                <input
                    type="text"
                    inputMode="numeric"
                    value={value === 0 ? "" : formatNumber(value)}
                    onChange={handleChange}
                    placeholder={startValue}
                    className = "start_summ"
                />
            </div>

            <div className="range_bar_start">
                <input
                    type="range"
                    min="0"
                    max={SLIDER_MAX}
                    value={sliderValue}
                    onChange={handleChange}
                    className="styled-slider"
                    style={{ backgroundSize: `${progress}% 100%` }}
                />
            </div>
        </>
    );
};

export default InputRangeBar;