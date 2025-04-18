import React from "react"
import { motion } from "framer-motion"
import { X, Github, Globe, Calendar, User, Code, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const ProjectDetails = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`text-4xl font-bold bg-gradient-to-r ${project.gradient.light} dark:${project.gradient.dark} bg-clip-text text-transparent`}
          >
            {project.title}
          </h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Project Image */}
        <div className="relative mb-8">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-80 object-cover rounded-xl shadow-lg transform transition-transform hover:scale-[1.01]"
          />
          <div 
            className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
          >
            <p className="text-white text-lg font-medium">{project.description}</p>
          </div>
        </div>

        {/* Technologies and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="mr-3 text-blue-500" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-3 text-green-500" /> Project Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Started:</strong> January 2023 <br />
              <strong>Completed:</strong> March 2023
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <User className="mr-3 text-purple-500" /> Team
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Lead Developer:</strong> Jahidul Hossain Mekat <br />
              <strong>UI/UX Designer:</strong> Jahidul Hossain 
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <CheckCircle className="mr-3 text-emerald-500" /> Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <CheckCircle className="w-5 h-5 mr-3 text-emerald-500" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 italic">
              "One of the main challenges we faced was integrating real-time updates for collaborative features. We
              overcame this by implementing WebSocket technology and optimizing our database queries for faster response
              times."
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
              "w-full sm:w-auto",
              "inline-flex items-center justify-center",
              "px-6 py-3 rounded-lg",
              "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
              "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
              "transition-all duration-300",
              "border border-gray-200 dark:border-gray-700"
            )}
          >
            <Github className="mr-2 w-5 h-5" /> 
            View on GitHub
            <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
              "w-full sm:w-auto",
              "inline-flex items-center justify-center",
              "px-6 py-3 rounded-lg",
              "bg-blue-500 hover:bg-blue-600",
              "text-white",
              "transition-all duration-300",
              "border border-blue-600 hover:border-blue-700"
            )}
          >
            <Globe className="mr-2 w-5 h-5" /> 
            Live Demo
            <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetails