"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-3xl text-[#0A66C2]" />,
            url: "https://linkedin.com/in/yourusername",
            color: "bg-white",
            borderColor: "border-gray-200",
            hoverColor: "hover:bg-gray-50"
        },
        {
            name: "GitHub",
            icon: <FaGithub className="text-3xl text-gray-900" />,
            url: "https://github.com/yourusername",
            color: "bg-white",
            borderColor: "border-gray-200",
            hoverColor: "hover:bg-gray-50"
        },
        {
            name: "X (Twitter)",
            icon: <FaTwitter className="text-3xl text-black" />,
            url: "https://twitter.com/yourusername",
            color: "bg-white",
            borderColor: "border-gray-200",
            hoverColor: "hover:bg-gray-50"
        },
        {
            name: "Email",
            icon: <FaEnvelope className="text-3xl text-gray-700" />,
            url: "mailto:your.email@example.com",
            color: "bg-white",
            borderColor: "border-gray-200",
            hoverColor: "hover:bg-gray-50"
        },
        {
            name: "Your Platform",
            icon: <div className="text-3xl text-gray-400">+</div>,
            url: "#",
            color: "bg-white",
            borderColor: "border-gray-200 border-dashed",
            hoverColor: "hover:bg-gray-50"
        },
        {
            name: "Your Platform",
            icon: <div className="text-3xl text-gray-400">+</div>,
            url: "#",
            color: "bg-white",
            borderColor: "border-gray-200 border-dashed",
            hoverColor: "hover:bg-gray-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-4xl"
            >
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-10">
                        Get In Touch
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Connect with me through these platforms. I&apos;m always open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            variants={itemVariants}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.color} ${social.hoverColor} rounded-xl p-6 flex flex-col items-center justify-center shadow-md transition-all transform hover:scale-[1.02] border ${social.borderColor}`}
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-3">
                                {social.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{social.name}</h3>
                        </motion.a>
                    ))}
                </div>

                <motion.div 
                    variants={itemVariants}
                    className="mt-12 text-center text-gray-500"
                >
                    <p>Feel free to reach out through any of these platforms.</p>
                    <p className="mt-2 text-sm">I typically respond within 24 hours.</p>
                </motion.div>
            </motion.div>
        </div>
    );
}
