import React, { useRef, useState } from 'react';
import twoImage from '../../public/Images/two.jpg';
import threeImage from '../../public/Images/three.jpg';
import fourImage from '../../public/Images/four.jpg';

export function Test() {
    const carouselRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    const scrollLeft = () => {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        setScrollAmount(carouselRef.current.scrollLeft);
    };

    const scrollRight = () => {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        setScrollAmount(carouselRef.current.scrollLeft);
    };

    return (
        // <div>
            <div class="snap-x flex overflow-x-auto" ref={carouselRef}>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div class="snap-center w-full h-full">
                    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
            </div>
        // </div>
    );
}

export default Test;
