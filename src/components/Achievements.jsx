import React from 'react';
import InteractiveFolder, { itemVariants } from './InteractiveFolder';
import { Trophy, Star, Award, Medal, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "AI Conclave 2024",
            description: "Official Certification of Participation",
            path: "/achievements/RUCHIT DAS_AI CONCLAVE 2024_CERTIFICATE.pdf",
            icon: Trophy,
            color: "text-amber-400"
        },
        {
            id: 2,
            title: "ICC AI Achievement",
            description: "Recognition for AI Excellence",
            path: "/achievements/ICC_Ruchit_ai_dec013.pdf",
            icon: Star,
            color: "text-purple-400"
        },
        {
            id: 3,
            title: "Participation Certificate",
            description: "Active Event Participation",
            path: "/achievements/Certificate of Participation.pdf",
            icon: Award,
            color: "text-blue-400"
        },
        {
            id: 4,
            title: "Eyantra",
            description: "Certificate of Merit",
            path: "/achievements/certificate.pdf",
            icon: Medal,
            color: "text-green-400"
        },
    ];

    return (
        <InteractiveFolder
            title="Achievements"
            subTitle="Honors & Awards"
            count={achievements.length}
            color="bg-orange-500"
        >
            <div className="space-y-3">
                {achievements.map((item) => (
                    <motion.a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        key={item.id}
                        className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors group"
                    >
                        <div className={`p-3 rounded-full bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-bold">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Download size={16} className="text-gray-400" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </InteractiveFolder>
    );
};

export default Achievements;
