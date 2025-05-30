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
  title: "AI-powered Course Creation and Learning Platform - EduGenie",
  description:
    "EduGenie is a full-stack educational platform built with Next.js that leverages AI to generate personalized courses, blogs, and chatbot interactions. It features a sleek, responsive UI and role-based dashboards for educators and learners.",
  image: "https://i.ibb.co/0yJQ4GWd/Screenshot-183.png",
  tech: ["Next.js", "Node.js", "Express", "Firebase", "MongoDB"],
  features: [
    " Course Creation with Gemini AI API",
    " Display All Generated Courses (Frontend + Backend Integration)",
    " Blog Page with AI-Generated Content",
    " AI Chatbot & User Profile Management",
    " Role-Based Dashboard (Educator & Student)",
    " Parallax & Animated Course Carousel with Filters",
    " Real Testimonials with Stats and Orbit Animation",
    " Email Contact Form with EmailJS Integration"
  ],
  github: "https://github.com/ela60/EduGenie-Educational-Platform.git",
  live: "https://genies-two.vercel.app/",
  gradient: {
    light: "from-emerald-400 via-green-400 to-lime-400",
    dark: "from-emerald-500 via-green-500 to-lime-500",
  },
},

  {
  id: 2,
  title: "AI-Driven Event Ticket Booking System",
  description:
    "A smart, AI-powered event ticket booking platform that leverages intelligent recommendations, dynamic pricing, and real-time seat availability to provide a seamless and secure user experience.",
  image: "https://i.ibb.co/8DQ53K86/Screenshot-182.png",
  tech: [
    "TypeScript", "Next.js", "Tailwind CSS", "ShadCN", "React Query",
    "React Hook Form", "NextAuth.js", "PostgreSQL", "Prisma",
    "Gemini API", "Stripe", "SendGrid", "PDFKit", "QR Code", "Google Maps API"
  ],
  features: [
    " AI-Based Event Recommendations",
    " Dynamic Ticket Pricing Based on Demand",
    " Secure Booking with Stripe + PDF/QR Tickets",
    " Admin & Organizer Dashboards",
    " AI Chatbot for 24/7 Support",
    " Fraud & Duplicate Booking Detection",
    " Fully Responsive & Accessible UI",
    " Wishlist, Reviews, Notifications, Referral System",
    " Dark Mode Toggle & Multi-language (Optional)"
  ],
  github: "https://github.com/ela60/AI-Driven-Event-Ticket-Booking-System.git",
  live: "https://bookhub-test.vercel.app/",
  gradient: {
    light: "from-emerald-400 via-green-400 to-lime-400",
    dark: "from-emerald-500 via-green-500 to-lime-500",
  },
},


    {
      id: 3,
      title: " Food Platform & Food Sharing PlateMate",
      description:
        "A platform to share food with others in the community. Users can post available food items for sharing, browse listings, and connect with others to help reduce food waste.",
      image: "https://i.ibb.co.com/Mx0kpVkd/food.png",
      tech: ["React", "Node.js", "Express", "Firebase", "MongoDB"],
      features: [
        "User authentication and authorization",
        "User profiles with order history",
        "Food search and filtering",
        "Meal planning feature",
        "Secure Stripe payment processing",
        "Admin dashboard",
      ],
      github: "https://github.com/ela60/Food-Sharing-Website-Client.git",
      live: "https://food-sharing-fde2a.web.app/",
      gradient: {
        light: "from-emerald-400 via-green-400 to-lime-400",
        dark: "from-emerald-500 via-green-500 to-lime-500",
      },
    },
    {
      id: 4,
      title: "TalkTrove",
      description:
        "ForumApp is an interactive platform that allows users to share their thoughts, engage in discussions, vote on posts, and comment on topics of interest. Whether you’re passionate about a subject or looking to join the conversation, ForumApp provides a space for community interaction.",
      image: "https://i.ibb.co.com/d4LmkqNV/DALL-E-2025-02-06-06-37-40-A-modern-social-media-dashboard-similar-to-Facebook-named-Talk-Trove-The.webp",
      tech: [
        "React",
        "FramerMotion",
        
        "Firebase",
        "MongoDB",
        "TailwindCSS",
        "Express",
        "Node.js",
        "JWT",
      ],
      features: [
        "🚀 An interactive social platform with admin and user dashboards, inspired by Facebook's UI.",
        
        "TalkTrove is a feature-rich social networking dashboard that allows users to post, like, comment, and connect in an intuitive Facebook-style interface. Admins have a separate panel to manage users, content, and platform settings efficiently.",
        
      ],
      github:
        "https://github.com/ela60/Created-ForumHub-or-Facebook-Website.git",
      live: "https://bistro-boss-2368b.web.app/",
      gradient: {
        light: "from-purple-400 via-blue-400 to-cyan-400",
        dark: "from-purple-500 via-blue-500 to-cyan-500",
      },
    },
    {
      id: 5,
      title: "SilverScreen Hub",
      description:
        "A movie database and recommendation platform where users can explore movies, add them to their favorite list, and get recommendations based on their preferences.",
      image: "https://i.ibb.co.com/5WNYr7nw/Screenshot-152.png",
      tech: ["React", "Express", "MongoDB", "Node.js", "TailwindCSS", "Firebase"],
      features: [
        "Robust user authentication",
        "Full CRUD campaign management",
        "Features include movie search, favorites list, movie details, and dynamic recommendations",
        "Detailed campaign insights",
        "Integrated third-party APIs for up-to-date movie information and ratings",
      ],
      github: "https://github.com/ela60/Movie-Portal-Client.git",
      live: "https://assignment-10-1d469.web.app/",
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

