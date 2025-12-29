import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code2, Brain, BarChart3, Globe } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Local Clara Agent',
        category: 'Neuro-Symbolic AI',
        description: 'Advanced RAG agent with Hybrid Memory (Vector + KG) and self-correcting search using DSPy & LangGraph.',
        link: 'https://github.com/Rcidshacker/local-clara-agent',
        tech: ['Python', 'DSPy', 'LangGraph', 'Contextual Memory'],
        icon: Brain,
        color: 'from-red-600/20 to-orange-600/20'
    },
    {
        id: 2,
        title: 'FarmAI',
        category: 'AgriTech / Computer Vision',
        description: 'Pest management system using CNNs for disease detection and RL for spray scheduling.',
        link: 'https://github.com/Rcidshacker/FarmAI',
        tech: ['PyTorch', 'React', 'FastAPI', 'RL'],
        icon: Globe,
        color: 'from-emerald-500/20 to-lime-500/20'
    },
    {
        id: 3,
        title: 'Multi-AI Agent',
        category: 'Agentic Workflows',
        description: 'Orchestrated system of collaborative agents for autonomous content generation and research.',
        link: 'https://github.com/Rcidshacker/Multi-AI-Agent',
        tech: ['OpenAI API', 'Autogen', 'Python'],
        icon: Code2,
        color: 'from-orange-500/20 to-red-500/20'
    },
    {
        id: 4,
        title: 'MHA Algorithm',
        category: 'Algorithms / Optimization',
        description: 'A comprehensive toolbox for Metaheuristic Algorithms implemented in Python.',
        link: 'https://github.com/Achyut103040/MHA-Algorithm',
        tech: ['Python', 'Optimization', 'Algorithms'],
        icon: BarChart3,
        color: 'from-amber-500/20 to-yellow-500/20'
    },
];

const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[420px] bg-white/5 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col"
            onClick={() => window.open(project.link, '_blank')}
        >
            {/* Dynamic Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_50%)] transition-opacity duration-500 blur-xl" />

            <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/5 text-white group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-300">
                        <Icon size={24} />
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowUpRight size={20} className="text-white" />
                    </div>
                </div>

                <div className="flex-grow">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium group-hover:bg-white/10 group-hover:text-white transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative bg-black">
            {/* Background Mesh Gradients */}
            <div className="absolute top-[20%] left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent uppercase tracking-widest font-bold text-sm">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-2">Selected<br />Works.</h2>
                    </motion.div>
                    <motion.a
                        href="https://github.com/Rcidshacker"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 mt-8 md:mt-0"
                    >
                        <Github size={20} />
                        View All Projects
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a
                        href="https://github.com/Rcidshacker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-accent hover:text-white transition-colors"
                    >
                        <Github size={20} />
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Projects;
