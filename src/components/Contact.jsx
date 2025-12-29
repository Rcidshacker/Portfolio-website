import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl px-4"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work <br /> <span className="text-accent">together.</span></h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Let's build something extraordinary.
                </p>

                <a href="mailto:ruchitdas36@gmail.com" className="inline-block px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105">
                    Get in touch
                </a>

                <div className="flex gap-8 mt-16 justify-center">
                    {[
                        { Icon: Github, href: "https://github.com/Rcidshacker" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/ruchit-das-3b6a8a252/" },
                        { Icon: Twitter, href: "https://x.com/RuchitDas" }
                    ].map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-4 border border-white/10 rounded-full hover:bg-white/5"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </motion.div>

            <footer className="mt-32 text-gray-600 text-sm">
                © 2025 Ruchit. All rights reserved. Made with Love & Code.
            </footer>
        </section>
    );
};
export default Contact;
