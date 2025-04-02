"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaGithub, FaGraduationCap,
  FaUserCircle 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiFirebase 
} from "react-icons/si";

const AboutPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Profile data
    const profileInfo = {
        description: "Full-stack developer with expertise in building modern web applications. Passionate about creating efficient, scalable solutions with clean code and exceptional user experiences.",
        education: [
            { icon: <FaGraduationCap size={20} />, text: "BSc Computer Science - University of Tech (2022)" },
            { icon: <FaGraduationCap size={20} />, text: "Advanced Web Development - Code Academy (2023)" }
        ]
    };

    // Skills data
    const frontendSkills = [
        { icon: <FaHtml5 size={36} />, name: "HTML5" },
        { icon: <FaCss3Alt size={36} />, name: "CSS3" },
        { icon: <FaJs size={36} />, name: "JavaScript" },
        { icon: <FaReact size={36} />, name: "React" },
        { icon: <SiNextdotjs size={36} />, name: "Next.js" },
        { icon: <SiTailwindcss size={36} />, name: "Tailwind CSS" },
        { icon: <FaGitAlt size={36} />, name: "Git" }
    ];

    const backendSkills = [
        { icon: <FaNodeJs size={36} />, name: "Node.js" },
        { icon: <SiExpress size={36} />, name: "Express" },
        { icon: <FaDatabase size={36} />, name: "SQL" },
        { icon: <SiMongodb size={36} />, name: "MongoDB" },
        { icon: <SiFirebase size={36} />, name: "Firebase" },
        { icon: <FaGithub size={36} />, name: "GitHub" }
    ];

    return (
        <div className="min-h-screen w-full bg-gray-900">
            <div ref={ref} className="font-sans px-6 py-12 w-full max-w-4xl mx-auto text-white">
                {/* Profile Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <div className="flex items-start gap-4">
                            <FaUserCircle className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                            <div>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    {profileInfo.description}
                                </p>
                                <div className="space-y-3">
                                    {profileInfo.education.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                                            className="flex items-center gap-3 text-gray-300"
                                        >
                                            <span className="text-blue-400">{item.icon}</span>
                                            <span className="text-md">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
                    
                    <div className="flex flex-col lg:flex-row gap-6 w-full">
                        {/* Frontend Skills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg flex-1"
                        >
                            <h3 className="text-xl text-blue-400 mb-6 text-center">Frontend Development</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {frontendSkills.map((item, index) => (
                                    <SkillIcon 
                                        key={index}
                                        item={item} 
                                        index={index} 
                                        isInView={isInView} 
                                        delay={0.6 + index * 0.1} 
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend Skills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg flex-1"
                        >
                            <h3 className="text-xl text-blue-400 mb-6 text-center">Backend Development</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {backendSkills.map((item, index) => (
                                    <SkillIcon 
                                        key={index}
                                        item={item} 
                                        index={index} 
                                        isInView={isInView} 
                                        delay={0.8 + index * 0.1} 
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

const SkillIcon = ({ item, index, isInView, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay }}
        className="flex flex-col items-center w-[100px]"
        title={item.name}
    >
        <div className="text-blue-400 hover:text-white transition-colors duration-300">
            {item.icon}
        </div>
        <span className="text-sm mt-2 text-gray-400 text-center">{item.name}</span>
    </motion.div>
);

export default AboutPage;