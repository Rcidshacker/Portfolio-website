import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "Reinforcement Learning", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "ChromaDB", level: 80 },
    { name: "Vector Databases", level: 85 },
    { name: "Knowledge Graphs", level: 75 },
    { name: "Generative AI", level: 95 },
    { name: "Python", level: 95 },
    { name: "TensorFlow", level: 80 },
    { name: "React", level: 70 },
    { name: "GSAP", level: 60 },
    { name: "LangGraph", level: 85 },
    { name: "DSPy", level: 80 }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative bg-black/50 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent uppercase tracking-widest font-bold text-sm">Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Technical<br />Arsenal.</h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <SkillPill key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

const SkillPill = ({ skill, index }) => {
    // Generate random float animation parameters for organic feel
    const randomDuration = 3 + Math.random() * 4;
    const randomY = 10 + Math.random() * 20;

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -randomY, 0] }}
            transition={{
                opacity: { delay: index * 0.05, duration: 0.5 },
                scale: { delay: index * 0.05, type: "spring", stiffness: 100 },
                y: { duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
            }}
            whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                borderColor: "rgba(249, 115, 22, 0.8)",
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)"
            }}
            className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 text-base md:text-lg font-medium cursor-pointer"
        >
            {skill.name}
        </motion.span>
    );
};

export default Skills;
