import img5 from "../../assets/Images/5.jpeg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/3.jpeg";
import img1 from "../../assets/Images/9.jpeg";
import img6 from "../../assets/Images/6.jpeg";
import img7 from "../../assets/Images/8.jpeg";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "../../assets/App.css";

/**
 *
 * @type {*[]}
 */

// declare images in an array
const images = [img5, img2, img3, img4, img1, img6, img7];
//gives a delay time
const delay = 2500;

export const FormGridFilm = () => {
    //use transform: translate 3D and keep tracking of the currently displayed index
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    // arrows directions
    function onArrowClick(direction) {
        resetTimeout();
        if (direction === "prev") {
            setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        } else if (direction === "next") {
            setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex ===  images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        // slideshow part
        <div className="w-full max-w-screen-desktop mx-auto my-0">
            <div className="my-4 p-4 bg-gray-900 rounded-md">
                <div className="grid grid-cols-7 gap-4 h-48 w-full bg-black rounded-md mx-auto mt-5 justify-between mt-4">
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className={`h-full w-full bg-cover bg-center rounded-md`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}

                </div>
            </div>

            {/*buttons (dots) that displays the currents image slided*/}
            <div className="text-center">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot mt-[15px] mb-0 mx-[7px] rounded-[50%] ${
                            index === idx ? "active bg-red" : ""
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    />
                ))}
                {/*left arrow*/}
                <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10">
                    <button className="text-2xl font-bold text-white hover:text-gray-300" onClick={() => onArrowClick("prev")}>
                        &lt;
                    </button>
                </div>
                {/*right arrow*/}
                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10">
                    <button className="text-2xl font-bold text-white hover:text-gray-300" onClick={() => onArrowClick("next")}>
                        &gt;
                    </button>
                </div>
            </div>

        </div>
    );
};
