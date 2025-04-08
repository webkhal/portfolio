"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Typed from "typed.js";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaGithub, FaGraduationCap,
  FaArrowRight, FaAws, FaLinux, 
  FaLinkedin, FaTwitter, FaArrowUp, FaBootstrap
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
SiFigma, SiJira, SiPostman, SiNginx,
  SiVercel, SiMysql, SiTypescript, SiPython, SiPrisma,
  SiMongoose
} from "react-icons/si";
import Image from 'next/image';
import blogImage from "../../../public/images/blog.png";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const typedRef = useRef(null);
  const scrollToTopRef = useRef(null);
  const typedInstance = useRef(null); // Store Typed instance in a ref
  const restartTimer = useRef(null); // Store timer in a ref

  useEffect(() => {
    // Initialize Typed.js
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["Khalid Ahmed Khan"],
      typeSpeed: 50,
      backSpeed: 0,
      showCursor: true,
      cursorChar: '|',
      onComplete: (self) => {
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
          cursor.classList.add('animate-pulse');
        }
        
        // Clear any existing timer
        if (restartTimer.current) clearTimeout(restartTimer.current);
        
        // Set new timer with safety checks
        restartTimer.current = setTimeout(() => {
          if (typedInstance.current) {
            try {
              self.reset().start();
            } catch (e) {
              console.warn("Typed.js restart error:", e);
            }
          }
        }, 5000);
      }
    });

    const handleScroll = () => {
      if (scrollToTopRef.current) {
        if (window.scrollY > 300) {
          scrollToTopRef.current.classList.remove('opacity-0', 'invisible');
          scrollToTopRef.current.classList.add('opacity-100');
        } else {
          scrollToTopRef.current.classList.add('opacity-0', 'invisible');
          scrollToTopRef.current.classList.remove('opacity-100');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup Typed.js
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
      
      // Cleanup timer
      if (restartTimer.current) {
        clearTimeout(restartTimer.current);
        restartTimer.current = null;
      }
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Profile data
  const profileInfo = {
    description:(
    <>
    <p className="text-gray-700 leading-relaxed mb-4 font-light">
      Certified Full Stack Developer specializing in modern web applications with a focus on performance, scalability, and user experience. I build efficient systems using JavaScript technologies across the entire stack.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4 font-light">
      With expertise in React, Node.js, and database management, I create clean, maintainable solutions. Currently expanding my skills into Python and AI/ML to develop more intelligent applications.
    </p>
    <p className="text-gray-700 leading-relaxed font-light">
    After a 7-month break due to injury, I returned with an internship, where I strengthened my skills in SDLC and project management. Currently expanding into Python for AI/ML applications.
    </p>
  </>
),
    education: [
      { icon: <FaGraduationCap size={20} />, text: "Certification in Full Stack Development - The Hacking School" },
      { icon: <FaGraduationCap size={20} />, text: "Bachelors in Computer Applications - Acharya Nagarjuna University" }
    ]
  };

  return (
    <div className="bg-white relative font-['Raleway']">
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Raleway:wght@300;400;500;600;700&display=swap');
        
        .caveat-name {
          font-family: 'Caveat', cursive;
          font-weight: 500;
          font-size: 2.75rem;
          line-height: 1;
        }
        
        @media (min-width: 768px) {
          .caveat-name {
            font-size: 3.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 py-6 bg-white">
        {['About', 'Services', 'Experiences', 'Skills', 'Projects', 'Contact', 'Payment'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-gray-800 hover:text-blue-600 text-sm font-medium tracking-wide"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 font-light leading-tight">
            Hi there, I am <br />
            <span className="text-blue-600 caveat-name">
              <span ref={typedRef} className="whitespace-nowrap" />
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-gray-600 text-sm md:text-base mt-2 font-normal tracking-wide"
            >
              Based in Hyderabad, India
            </motion.div>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Full Stack Developer', 'SDE'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium tracking-wide transition-colors duration-300 mb-10"
          >
            Let&apos;s Talk
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm mb-3 tracking-wider font-medium">FOLLOW ME HERE</p>
            <div className="flex justify-center space-x-5">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={ref} className="w-full py-16 px-4 bg-white">
        <div className="px-4 w-full max-w-4xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="p-8 border-t border-b border-gray-200">
              <h2 className="text-2xl text-gray-900 mb-6 font-semibold">ABOUT ME</h2>
              <div className="text-gray-700 leading-relaxed mb-6 font-light">
                {profileInfo.description}
              </div>
              <div className="space-y-3">
                {profileInfo.education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="flex items-start gap-3 text-gray-700 text-sm font-normal"
                  >
                    <span className="text-blue-500 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl text-gray-900 mb-8 border-b border-gray-200 pb-2 font-semibold">SKILLS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Programming</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-yellow-400"><FaJs size={20} /></span>
                    <span>JavaScript</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-600"><SiTypescript size={20} /></span>
                    <span>TypeScript</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-400"><SiPython size={20} /></span>
                    <span>Python</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.55 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-600"><SiMysql size={20} /></span>
                    <span>SQL</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-orange-500"><FaHtml5 size={20} /></span>
                    <span>HTML5</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.65 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-500"><FaCss3Alt size={20} /></span>
                    <span>CSS3</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-400"><SiTailwindcss size={20} /></span>
                    <span>Tailwind CSS</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.75 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-purple-500"><FaBootstrap size={20} /></span>
                    <span>Bootstrap</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-cyan-500"><FaReact size={20} /></span>
                    <span>React</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.85 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-black"><SiNextdotjs size={20} /></span>
                    <span>Next.js</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-green-600"><FaNodeJs size={20} /></span>
                    <span>Node.js</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.95 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-gray-800"><SiExpress size={20} /></span>
                    <span>Express.js</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-800"><SiPrisma size={20} /></span>
                    <span>Prisma</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.05 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-green-500"><SiMongoose size={20} /></span>
                    <span>Mongoose</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-gray-500"><FaDatabase size={20} /></span>
                    <span>Local Storage</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Database</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.15 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-green-500"><SiMongodb size={20} /></span>
                    <span>MongoDB</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-600"><SiMysql size={20} /></span>
                    <span>MySQL</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* DevOps */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">DevOps</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.25 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-orange-500"><FaAws size={20} /></span>
                    <span>AWS</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-orange-600"><FaGitAlt size={20} /></span>
                    <span>Git</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.35 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-green-500"><SiNginx size={20} /></span>
                    <span>Nginx</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-black"><SiVercel size={20} /></span>
                    <span>Vercel</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Miscellaneous */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Miscellaneous</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.45 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-yellow-500"><SiFigma size={20} /></span>
                    <span>Figma</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-blue-500"><SiJira size={20} /></span>
                    <span>Jira</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.55 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-orange-500"><SiPostman size={20} /></span>
                    <span>Postman</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <span className="text-black"><FaLinux size={20} /></span>
                    <span>Ubuntu</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-lg text-gray-800 mb-4 font-medium">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Problem Solving', 'Collaboration', 'Adaptability'].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.65 + index * 0.05 }}
                      className="flex items-center gap-3 text-gray-700 text-sm font-light"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-200 pt-8"
          >
            <h2 className="text-2xl text-gray-900 mb-6 font-semibold">BLOG</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6 font-light">
                  I share insights on full-stack development and creating seamless user experiences.
                </p>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium">
                  Read Blog <FaArrowRight size={14} />
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="w-full h-56 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={blogImage}
                    alt="Blog"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        ref={scrollToTopRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 opacity-0 invisible transition-opacity duration-300 z-50"
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
};

export default HeroSection;