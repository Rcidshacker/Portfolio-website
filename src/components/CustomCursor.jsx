import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const spotlightRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const spotlight = spotlightRef.current;
        const dot = dotRef.current;
        if (!spotlight || !dot) return;

        let mouseX = 0;
        let mouseY = 0;
        let spotX = 0;
        let spotY = 0;

        const mouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows instantly
            dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
        };

        // Smooth spotlight follow
        const animate = () => {
            spotX += (mouseX - spotX) * 0.1;
            spotY += (mouseY - spotY) * 0.1;
            spotlight.style.transform = `translate3d(${spotX - 150}px, ${spotY - 150}px, 0)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", mouseMove, { passive: true });
        animate();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            {/* Spotlight Effect */}

            {/* Center Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block will-change-transform shadow-[0_0_10px_rgba(249,115,22,0.8)]"
            />
        </>
    );
};

export default CustomCursor;
