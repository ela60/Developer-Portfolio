'use client'

import { motion, useInView } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react'
import { useRef } from 'react'

const MotionCard = motion(Card)

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const educationDetails = [
        {
            degree: "Software Quality Assurance",
            institution: "Khulna University",
            period: "2024 - 2025",
            location: "Khulna, Bangladesh",
            description: "Pursuing in Software Quality Assurance, focusing on software testing methodologies, quality assurance processes,and best practices.",
            iconColor: "text-blue-500",
            gradientFrom: "from-blue-500/10",
            gradientTo: "to-cyan-500/10",
            achievements: [
                "In my organization, I am the first to be selected for this course",
                "Participated in various workshops and seminars",
                "Gained hands-on experience in software testing tools and techniques"
            ]
        },
        {
            degree: "Bachelor of Science in Computer Science & Engineering",
            institution: "Rajshahi University affiliated Imperial college of Engineering Bangladesh",
            period: "2020 - Present",
            location: "Khulna, Bangladesh",
            description: "Pursuing undergraduate studies in Computer Science & Engineering, focusing on advanced programming, software development, and cutting-edge technological innovations.",
            iconColor: "text-purple-500",
            gradientFrom: "from-purple-500/10",
            gradientTo: "to-pink-500/10",
            achievements: [
                "Project showcasing Champions ",
                "Project Ideathon Winner ",
                "Active in Competitive Programming"
            ]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.7
            }
        }
    }

    return (
        <section 
            ref={ref}
            className="min-h-screen bg-white text-black py-20 px-4 relative overflow-hidden dark:bg-black dark:text-white"
        >
            {/* Background Grid and Blur Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] hidden dark:flex" />
            
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-500/10 mb-4 inline-block">
                            Educational Journey
                        </span>
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-primary to-secondary text-transparent bg-clip-text">
                        My Academic Path
                    </h3>
                </motion.div>

                {/* Education Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {educationDetails.map((edu, index) => (
                        <MotionCard
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.12)"
                            }}
                            className={`relative overflow-hidden group border transition-all duration-500 
                                bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm 
                                border-gray-200 dark:border-gray-800 
                                hover:border-primary/50`}
                        >
                            <div className="p-6 relative z-10">
                                {/* Degree Icon and Title */}
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} mr-4`}>
                                        <GraduationCap className={`w-6 h-6 ${edu.iconColor} dark:text-white`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                        {edu.degree}
                                    </h4>
                                </div>

                                {/* Institution Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                                        <span>{edu.institution}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                                    {edu.description}
                                </p>

                                {/* Achievements */}
                                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <h5 className="text-lg font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                                        <Award className="w-5 h-5 mr-2 text-primary" />
                                        Key Achievements
                                    </h5>
                                    <ul className="space-y-1">
                                        {edu.achievements.map((achievement, idx) => (
                                            <li 
                                                key={idx} 
                                                className="flex items-center text-gray-600 dark:text-gray-400"
                                            >
                                                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                                                <span className="text-sm">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${edu.gradientFrom} ${edu.gradientTo} 
                                    opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />
                        </MotionCard>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}