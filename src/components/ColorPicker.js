import React, { useState, useEffect } from 'react';
import { slugify } from '../utils/slugify';
import { ChromePicker } from 'react-color';


export default function ColorPicker({
    colorValue,
    type,
    setColorValue
}) {
    const [modalVisible, setModalVisible] = useState(false);

    function valueChange(color) {
        setColorValue(color.hex);
        localStorage.setItem(slugify(type), color.hex);
    }

    useEffect(() => {
        const savedColor = localStorage.getItem(slugify(type));

        if (savedColor) {
            setColorValue(savedColor);
        }
    });

    return (
        <div className="picker">
            <div className="picker__inner">
                <label className="picker__label " htmlFor={`input-${slugify(type)}`}>
                    {type}:
                </label>
                <div className="picker__input-wrapper">
                    <input
                        id={`input-${slugify(type)}`}
                        type="text"
                        className="picker__input"
                        value={colorValue}
                        readOnly={true}
                    />
                    <span className="picker__color-indicator" style={{backgroundColor: colorValue}}></span>
                </div>
            </div>
            <button
                className="picker__toggle"
                onClick={() => {setModalVisible(true)}}
            >
                Kies een nieuwe kleur
            </button>
            { modalVisible && (
                <div className="picker__modal">
                    <div className="picker__modal__content">
                        <button
                            className="picker__modal-close"
                            onClick={() => {setModalVisible(false)}}
                        >
                            sluit&nbsp;x
                        </button>
                        <ChromePicker
                            className="picker__picker"
                            color={colorValue}
                            onChangeComplete={valueChange}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
