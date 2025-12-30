import React from 'react';
import InteractiveFolder, { itemVariants } from './InteractiveFolder';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const Certificates = () => {
    const certificates = [
        { id: 1, title: "Gen AI Academy", date: "2024", issuer: "Gen AI", path: "/certificates/Gen ai academy.jpg", type: "image", color: "from-purple-500 to-indigo-600" },
        { id: 2, title: "Analyzing Data with Excel", date: "2024", issuer: "IBM", path: "/certificates/Analyzing Data with Excel by IBM.pdf", type: "pdf", color: "from-green-500 to-emerald-700" },
        { id: 3, title: "Generative AI Fundamentals", date: "2024", issuer: "Microsoft", path: "/certificates/CertificateOfCompletion_What Is Generative AI.pdf", type: "pdf", color: "from-blue-500 to-cyan-600" },
        { id: 4, title: "Streamlining with Copilot", date: "2024", issuer: "Microsoft", path: "/certificates/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.pdf", type: "pdf", color: "from-blue-400 to-indigo-500" },
        { id: 5, title: "Prompt Engineering", date: "2024", issuer: "IBM", path: "/certificates/prompt emgineering by IBM.pdf", type: "pdf", color: "from-blue-600 to-blue-800" },
        { id: 6, title: "TCC AI Certification", date: "2024", issuer: "TCC", path: "/certificates/TCC_Ruchit_ai_dec013.pdf", type: "pdf", color: "from-red-500 to-orange-600" },
        { id: 7, title: "Design Workshop", date: "2024", issuer: "Workshop", path: "/certificates/Design workshop-86.pdf", type: "pdf", color: "from-pink-500 to-rose-600" },
        { id: 8, title: "Ethics in Generative AI", date: "2024", issuer: "Microsoft", path: "/certificates/CertificateOfCompletion_Ethics in the Age of Generative AI.pdf", type: "pdf", color: "from-gray-500 to-slate-700" },
    ];

    return (
        <InteractiveFolder
            title="Certificates"
            subTitle="Professional Certifications"
            count={certificates.length}
            color="bg-red-500"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                    <motion.a
                        href={cert.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        key={cert.id}
                        className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group block"
                    >
                        <div className={`aspect-video bg-gradient-to-br ${cert.color || 'from-gray-800 to-black'} rounded-lg mb-3 flex items-center justify-center overflow-hidden relative shadow-lg`}>
                            {cert.type === 'image' ? (
                                <img src={cert.path} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            ) : (
                                <div className="text-white/50 group-hover:text-white transition-colors flex flex-col items-center gap-2">
                                    <FileText size={32} />
                                    <span className="text-xs uppercase font-bold tracking-widest opacity-70">PDF Document</span>
                                </div>
                            )}

                            {/* Overlay Effect */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-white/10 transition-colors" />

                            {/* External Link Icon on Hover */}
                            <div className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                                <ExternalLink size={12} className="text-white" />
                            </div>
                        </div>
                        <h4 className="text-white font-semibold text-lg leading-tight mb-1 truncate">{cert.title}</h4>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span>{cert.issuer}</span>
                            <span>{cert.date}</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </InteractiveFolder>
    );
};

export default Certificates;
