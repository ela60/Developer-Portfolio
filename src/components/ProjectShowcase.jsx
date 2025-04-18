import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, Github, Globe, ArrowUpRight } from "lucide-react"
import { BorderBeam } from "./magicui/border-beam"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProjectDetails from "./ProjectDetails"


const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedTech, setSelectedTech] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = [
    {
      id: 1,
      title: "Student Food Platform PlateMate",
      description:
        "A full-stack web application enabling students to order food from local home-cooks with comprehensive features.",
      image: "./platemates.png",
      tech: ["React", "Node.js", "Express", "Firebase", "MongoDB"],
      features: [
        "User authentication and authorization",
        "User profiles with order history",
        "Food search and filtering",
        "Meal planning feature",
        "Secure Stripe payment processing",
        "Admin dashboard",
      ],
      github: "https://github.com/samZero-0/University_Student_Food_Platform_Project",
      live: "https://platemate-3c7a2.web.app/",
      gradient: {
        light: "from-emerald-400 via-green-400 to-lime-400",
        dark: "from-emerald-500 via-green-500 to-lime-500",
      },
    },
    {
      id: 2,
      title: "StudyCollab",
      description:
        "A comprehensive platform for students to submit, view, and track assignments with an intuitive user interface.",
      image: "./studycollab.png",
      tech: [
        "React",
        "FramerMotion",
        "Three.js",
        "Firebase",
        "MongoDB",
        "TailwindCSS",
        "Shadcn",
        "Express",
        "Node.js",
        "JWT",
      ],
      features: [
        "Assignment submission and marking",
        "Submission history tracking",
        "Comprehensive grading system",
        "Student performance leaderboard",
        "Advanced assignment filtering",
        "Interactive 3D visualization",
      ],
      github:
        "https://github.com/Phanthom-Mekat/StudyCollab-Collaborative-Learning-Platform-11-client",
      live: "https://studycolab.netlify.app/",
      gradient: {
        light: "from-purple-400 via-blue-400 to-cyan-400",
        dark: "from-purple-500 via-blue-500 to-cyan-500",
      },
    },
    {
      id: 3,
      title: "Crowdcube: Crowd Funding Application",
      description:
        "An innovative crowdfunding platform enabling users to create, manage, and support diverse projects and causes.",
      image: "./crowdcube.png",
      tech: ["React", "Express", "MongoDB", "Node.js", "Redux", "TailwindCSS", "Firebase"],
      features: [
        "Robust user authentication",
        "Full CRUD campaign management",
        "Donation tracking system",
        "Detailed campaign insights",
        "Personal campaign dashboard",
        "Secure financial transactions",
      ],
      github: "https://github.com/Phanthom-Mekat/Crowdcube-A-Crowd-Funding-Application-10-client",
      live: "https://crowdcubes.netlify.app/",
      gradient: {
        light: "from-orange-400 via-red-400 to-pink-400",
        dark: "from-orange-500 via-red-500 to-pink-500",
      },
    },
  ]

  // Compute unique technologies across all projects
  const allTechnologies = [...new Set(projects.flatMap((project) => project.tech))]

  // Filter projects based on selected technologies
  useEffect(() => {
    const filtered =
      selectedTech.length === 0
        ? projects
        : projects.filter((project) => selectedTech.every((tech) => project.tech.includes(tech)))
    setFilteredProjects(filtered)
  }, [projects, selectedTech])

  // Initialize filtered projects on component mount
  useEffect(() => {
    setFilteredProjects(projects)
  }, [projects])

  // Toggle technology filter
  const toggleTechFilter = (tech) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const handleViewDetails = (project) => {
    setSelectedProject(project)
  }

  return (
    <section className="relative min-h-screen bg-white dark:bg-black py-24 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Glowing Orb Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/30 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/30 rounded-full filter blur-[120px]" />

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                "--angle": `${Math.random() * 360}deg`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <Badge className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white backdrop-blur-sm border-0 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-secondary mr-2" />
              <span className="text-secondary text-center text-sm font-medium">Project Showcase</span>
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-500"
          >
            Latest Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore my recent work showcasing innovative solutions and creative designs
          </motion.p>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTechnologies.map((tech) => (
            <Badge
              key={tech}
              onClick={() => toggleTechFilter(tech)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTech.includes(tech)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white"
              } hover:opacity-80`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence>
          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="relative overflow-hidden group bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <motion.h3
                        className={`text-3xl font-bold bg-gradient-to-r ${project.gradient.light} dark:${project.gradient.dark} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 text-gray-800 dark:text-white border-0 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                            <ArrowRight className="w-4 h-4 mr-2 text-gray-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700/80 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700/80 dark:text-white/80 hover:text-gray-100 dark:hover:text-white transition-colors btn btn-outline border-primary  "
                        >
                          <Globe className="w-5 h-5" />
                          <span>
                            Live Demo
                            <BorderBeam size={200} duration={15} delay={9} />
                          </span>
                        </a>
                        <Button onClick={() => handleViewDetails(project)} className="mt-4 " variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-lg aspect-video">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-r opacity-40 dark:opacity-50 transition-opacity duration-700 group-hover:opacity-60 dark:group-hover:opacity-70"
                          style={{
                            background: `linear-gradient(to right, ${project.gradient.dark.split(" ")[0].replace("from-", "")} 0%, transparent 100%)`,
                          }}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 dark:bg-black/20 dark:group-hover:bg-black/40 transition-colors duration-700" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute bottom-4 right-4"
                      >
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* No Projects Found State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-xl">No projects match the selected technologies</p>
          </motion.div>
        )}
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

export default ProjectShowcase

