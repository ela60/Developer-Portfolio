'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { CodeIcon, ServerIcon, GraduationCapIcon, HeartIcon } from 'lucide-react'

const MotionCard = motion(Card)

export default function About() {
    const highlights = [
        {
            icon: CodeIcon,
            title: "Frontend Development",
            description: "Passionate about crafting responsive and interactive UIs using React.js, Tailwind CSS, and modern frameworks. Currently working on TypeScript, focusing on creating efficient user experiences.",
            gradient: "from-blue-500/10 to-cyan-500/10",
            iconColor: "text-cyan-400",
            borderHover: "hover:border-cyan-500/50",
        },
        {
            icon: ServerIcon,
            title: "Backend Development",
            description: "Experienced in MERN stack development, with a focus on building secure and scalable applications using Node.js, Express.js, and MongoDB. Committed to writing clean, efficient code.",
            gradient: "from-green-500/10 to-emerald-500/10",
            iconColor: "text-emerald-400",
            borderHover: "hover:border-emerald-500/50",
        },
        {
            icon: GraduationCapIcon,
            title: "Continuous Learning",
            description: "SQA certified in software testing. Active participant in tech events, winning the CSE-Fest in 2024. Constantly exploring AI, data science, and machine learning.",
            gradient: "from-purple-500/10 to-violet-500/10",
            iconColor: "text-violet-400",
            borderHover: "hover:border-violet-500/50",
        },
        {
            icon: HeartIcon,
            title: "Beyond Coding",
            description: "When not programming, I enjoy reading various types of books, staying active, and listening to Gojol. I believe in maintaining a healthy work-life balance while staying updated with the latest tech trends.",
            gradient: "from-pink-500/10 to-rose-500/10",
            iconColor: "text-rose-400",
            borderHover: "hover:border-rose-500/50",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className="min-h-screen bg-white text-black py-20 px-4 relative overflow-hidden dark:bg-black dark:text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] hidden dark:flex" />

            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-500/10 mb-4 inline-block">
                            About Me
                        </span>
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-primary to-secondary text-transparent bg-clip-text">
                        Ambia Khatun Ela
                    </h3>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl dark:bg-purple-900/10" />
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl dark:bg-pink-900/10" />
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed relative dark:text-gray-600">
                            I'm a Computer Science and Engineering student passionate about Fronted web development, 
                            specializing in the MERN stack. My journey began with a curiosity for problem-solving and 
                            has evolved into a deep love for creating interactive, user-friendly applications.
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                {" "}As a detail-oriented and solution-driven developer, I embrace challenges with enthusiasm.{" "}
                            </span>
                            Whether it's optimizing performance or exploring new technologies, I'm committed to continuous growth 
                            and excellence in software development.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-6 relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                    </div>

                    {highlights.map((highlight, index) => (
                        <MotionCard
                            key={index}
                            variants={itemVariants}
                            className={`relative overflow-hidden group border transition-all duration-500 hover:transform hover:scale-[1.02] ${highlight.borderHover} bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800`}
                        >
                            <div className="p-6 relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${highlight.gradient} mr-4`}>
                                        <highlight.icon className={`w-6 h-6 ${highlight.iconColor} dark:text-gray-100 text-gray-900`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                        {highlight.title}
                                    </h4>
                                </div>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    {highlight.description}
                                </p>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        </MotionCard>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    )
}