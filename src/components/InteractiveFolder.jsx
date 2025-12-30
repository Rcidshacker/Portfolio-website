import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ChevronRight } from 'lucide-react';

export const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
};

const InteractiveFolder = ({ title, count, color = "bg-blue-500", children, subTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const folderRef = useRef(null);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && folderRef.current && !folderRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Dynamic classes based on state
    const containerClasses = isOpen
        ? 'col-span-1 md:col-span-2 row-span-2 bg-zinc-900 border-zinc-700 z-50 scale-100 ring-1 ring-white/10'
        : 'col-span-1 row-span-1 bg-zinc-800/80 hover:bg-zinc-800 cursor-pointer border-transparent hover:scale-[1.02] active:scale-[0.98]';

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    return (
        <motion.div
            layout
            ref={folderRef}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            onClick={() => !isOpen && setIsOpen(true)}
            className={`relative rounded-3xl border shadow-xl overflow-hidden ${containerClasses}`}
            initial={{ borderRadius: 24 }}
        >
            {/* Folder Tab Design */}
            <div className="absolute top-0 left-0 w-full h-12 bg-inherit z-0" />
            <div className={`absolute top-0 left-0 w-40 h-10 ${color} opacity-20 z-0 rounded-br-2xl`} />

            <motion.div layout="position" className="relative z-10 p-6 h-full flex flex-col">

                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                    <motion.div layout="position" className={`p-3 rounded-2xl ${color} bg-opacity-20 backdrop-blur-md`}>
                        <Folder className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
                    </motion.div>
                </div>

                {/* Title Section */}
                <div>
                    <motion.h3 layout="position" className="text-2xl font-bold text-white mb-1">
                        {title}
                    </motion.h3>
                    <motion.p layout="position" className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                        {subTitle || `${count} Items`}
                    </motion.p>
                </div>

                {/* Arrow indicator for closed state */}
                {!isOpen && (
                    <motion.div layout="position" className="absolute bottom-6 right-6 p-2 rounded-full bg-white/5">
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                )}

                {/* Content - Only visible when open */}
                <AnimatePresence mode="popLayout">
                    {isOpen && (
                        <motion.div
                            key="content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="mt-8 flex-grow overflow-y-auto custom-scrollbar pr-2"
                        >
                            <div className="h-px w-full bg-white/10 mb-6" />
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default InteractiveFolder;
