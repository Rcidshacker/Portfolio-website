import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(title1Ref.current,
            { y: 100, opacity: 0, rotateX: -45 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1.5, delay: 0.2 }
        )
            .fromTo(title2Ref.current,
                { y: 100, opacity: 0, rotateX: -45 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.5 },
                "-=1.2"
            )
            .fromTo(descRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );

        // Mouse parallax effect with GSAP quickTo for performance
        const xTo = gsap.quickTo(containerRef.current, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(containerRef.current, "y", { duration: 0.8, ease: "power3" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xMode = (clientX / window.innerWidth - 0.5) * 30;
            const yMode = (clientY / window.innerHeight - 0.5) * 30;

            xTo(xMode);
            yTo(yMode);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, []);

    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden perspective-1000">
            <div ref={containerRef} className="z-10 text-center relative px-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 mix-blend-color-dodge uppercase">
                    <div className="overflow-hidden">
                        <div ref={title1Ref} className="bg-clip-text text-white drop-shadow-2xl">
                            AI/ML
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={title2Ref} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-yellow-500">
                            Engineer
                        </div>
                    </div>
                </h1>
                <div ref={descRef} className="mt-6 text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    <span className="text-accent">&lt;</span> Building Digital Universes <span className="text-accent">/&gt;</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="mt-12 flex gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-transform hover:scale-105 active:scale-95"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Background ambient mesh - very subtle */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] left-[30%] w-[200px] h-[200px] bg-primary/[0.03] rounded-full blur-[200px]" />
                <div className="absolute bottom-[30%] right-[30%] w-[250px] h-[250px] bg-accent/[0.03] rounded-full blur-[200px]" />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;
