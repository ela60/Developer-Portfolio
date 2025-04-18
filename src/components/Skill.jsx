'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { GitBranch } from 'lucide-react'
import { SiBootstrap, SiCanva, SiCss3, SiExpress, SiFigma, SiFirebase, SiGithub, SiHtml5, SiHyperskill, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiSkillshare, SiTailwindcss, SiVite, SiVsco, SiVscodium, SiZap, SiHackthebox, SiGnubash, SiAdminer, SiAbbvie, SiCbc   } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { BorderBeam } from './magicui/border-beam'

const MotionCard = motion(Card)

export default function Skills() {
    const skills = {
        Frontend: [
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS', icon: SiCss3, color: '#1572B6' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Javascript', icon: SiJavascript, color: '#F7DF1E' },
            
        ],
        Backend: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
        ],
        Other: [
            { name: 'Git', icon: GitBranch, color: '#F05032' },
            { name: 'Python', icon: SiPython, color: '#007ACC' },
            { name: 'Java', icon: FaJava , color: '#00C4CC' },
            { name: 'C', icon:SiCbc, color: '#A8B9CC' },         
        { name: 'C++', icon: SiHackthebox, color: '#00599C' }, 
        { name: 'Assembly', icon: SiGnubash, color: '#6E4C13' },
            { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
        ]
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className="min-h-screen bg-gradient-to-br space-y-5 from-white via-gray-100 to-purple-100 dark:from-black dark:via-gray-900 dark:to-purple-950 text-black dark:text-white px-4 py-12 md:px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  hidden dark:flex" />
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]" />
            {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]" /> */}

            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-52 mx-auto items-center text-center gap-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <SiHyperskill className="w-4 inline-flex mr-2 h-4 text-primary" />
                    <span className="text-primary text-center  text-sm font-medium">Skill Showcase</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center text-black dark:text-white mb-16"
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-500">{category}</h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                            >
                                {items.map((skill) => (
                                    <MotionCard
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="group relative border-gray-200 hover:border-opacity-0 transition-all duration-300 dark:border-gray-800"
                                        style={{
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div className="relative z-10 p-4 flex flex-col items-center justify-center aspect-square">
                                            <div className="text-2xl mb-2">
                                                {skill.icon && (
                                                    <skill.icon
                                                        size={32}
                                                        className="transition-colors duration-300 dark:text-white"
                                                        style={{ color: skill.color }}
                                                    />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 group-hover:text-white  transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                         <BorderBeam size={200} duration={15} delay={9} />
                                    </MotionCard>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}