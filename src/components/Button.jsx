import React from "react";

const Button = (props) => {
    // console.log(props)
    const { btnProp, handleInput } = props;

    if (btnProp) {
        let { color, bgColor, name, spanCol } = btnProp;
        return (
            <button
                className={`${color} ${bgColor} ${spanCol ? spanCol : "w-16"} rounded-full h-16 text-xl font-bold`}
                onClick={(e) => handleInput(e.target.innerText)}
            >
                {name}
            </button>
        );
    }
};

export default Button;
