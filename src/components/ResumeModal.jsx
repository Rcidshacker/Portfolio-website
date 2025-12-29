import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl h-[85vh] bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-background/50 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg">
                                    <FileText className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Resume</h3>
                                    <p className="text-sm text-gray-400">Ruchit Das - AI/ML Engineer</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="/resume.pdf"
                                    download="Ruchit_Das_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:opacity-90 transition-opacity"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="h-[calc(85vh-72px)] bg-gray-900">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-full"
                                title="Resume"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Export hook for easy usage
export const useResumeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return { isOpen, open, close };
};

export default ResumeModal;
