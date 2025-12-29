import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useResume } from '../App';

const Navbar = () => {
    const links = ['Home', 'Skills', 'Projects', 'Contact'];
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openResume } = useResume();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${scrolled
                ? "backdrop-blur-lg bg-background/80 border-white/5 py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    className="flex items-center gap-2 text-2xl font-bold font-sans tracking-tighter"
                    whileHover={{ scale: 1.05 }}
                >
                    <img src="/logo.svg" alt="Ruchit Logo" className="w-8 h-8" />
                    <div>
                        <span className="text-white">Ruchit</span>
                        <span className="text-accent">.</span>
                    </div>
                </motion.div>

                <div className="hidden md:flex items-center space-x-8">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wide relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <button
                        onClick={openResume}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:opacity-90 transition-opacity text-sm"
                    >
                        <FileText className="w-4 h-4" />
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Button Placeholder */}
                <div className="md:hidden text-white">
                    <button className="p-2">Menu</button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

