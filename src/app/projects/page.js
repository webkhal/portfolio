"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiGithub, 
  FiExternalLink,
} from 'react-icons/fi';
import { 
  SiNextdotjs, 
  SiFirebase, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiStripe, 
  SiSanity,
  SiReact,
  SiFlutter,
  SiAgora
} from 'react-icons/si';

// Import your images
import project1Image from '../../../public/images/hero-1.webp';
import project2Image from '../../../public/images/hero-1.webp';
import project3Image from '../../../public/images/hero-1.webp';
import project4Image from '../../../public/images/hero-1.webp';

const ProjectsPage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const tagIcons = {
    'React': <SiReact className="text-blue-400 text-xs mr-1" />,
    'Next.js': <SiNextdotjs className="text-gray-100 text-xs mr-1" />,
    'i18n': <FiExternalLink className="text-green-400 text-xs mr-1" />,
    'Firebase': <SiFirebase className="text-yellow-400 text-xs mr-1" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400 text-xs mr-1" />,
    'Node.js': <SiNodedotjs className="text-green-500 text-xs mr-1" />,
    'MongoDB': <SiMongodb className="text-green-600 text-xs mr-1" />,
    'Stripe': <SiStripe className="text-purple-400 text-xs mr-1" />,
    'Sanity.io': <SiSanity className="text-pink-400 text-xs mr-1" />,
    'Flutter': <SiFlutter className="text-blue-400 text-xs mr-1" />,
    'Agora SDK': <SiAgora className="text-red-400 text-xs mr-1" />,
    'default': <FiExternalLink className="text-gray-300 text-xs mr-1" />
  };

  const projects = [
    {
      name: 'Social Media App',
      description: 'A social media mobile application developed using Flutter, Geist, Firebase Notifications and Hive.',
      image: project1Image,
      github: '#',
      tags: ['Flutter', 'Firebase', 'Hive'],
      features: ['Audio', 'Video', 'User', 'Geist']
    },
    {
      name: 'E-commerce App',
      description: 'An e-commerce web application developed using Roentje, Material UI, Reduce, and Stripe.',
      image: project2Image,
      github: '#',
      liveDemo: '#',
      tags: ['React', 'Stripe', 'Node.js'],
      features: ['Public', 'Mobile', 'Roentje', 'Reduce']
    },
    {
      name: 'Video Calling App',
      description: 'A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other faster to face.',
      image: project3Image,
      github: '#',
      tags: ['Flutter', 'Agora SDK'],
      features: ['Public', 'Mobile', 'Exact', 'Getty']
    },
    {
      name: 'Telugu Quran Web',
      description: 'A responsive web application for accessing the Quran in Telugu language with search functionality.',
      image: project4Image,
      github: 'https://github.com/arasmo/telugu-quran-web',
      tags: ['React', 'Next.js', 'i18n'],
      features: ['Search', 'Multi-language', 'Responsive']
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-['Raleway']">
     

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-10 mt-10 font-semibold ">Recent Works</h1>
          
          <div className="text-left max-w-2xl mx-auto mb-15">
            <p className="text-gray-600 mb-4">
              Over the past few years, I've had the opportunity to work on a variety of projects across different domains. 
              Each project has been a unique learning experience, helping me grow as a developer and problem solver.
            </p>
            <p className="text-gray-600">
              Below you'll find a selection of my most recent works. These projects showcase my skills in mobile and web development, 
              with technologies ranging from Flutter for cross-platform apps to modern React ecosystems for web applications.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-36 w-full">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-gray-800 mb-1">
                      {project.name}
                    </h2>
                    
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="flex items-center px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700"
                          >
                            {tagIcons[tag] || tagIcons['default']}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <ul className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700 text-xs">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1"></span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-gray-100">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiGithub className="text-xs" />
                      <span>Code</span>
                    </motion.a>

                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiExternalLink className="text-xs" />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;