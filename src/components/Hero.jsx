import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cv from "../assets/Ela-Resume .pdf";
import {
  
  GithubIcon,
  MailIcon,
  LinkedinIcon,
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  Facebook,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import InteractiveHoverButton from "./ui/interactive-hover-button";

export default function Hero() {
  const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Docker",
    "Next.js",
    "PostgreSQL",
    "GraphQL",
    "Python",
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br space-y-5 
            from-gray-50 via-gray-100 to-indigo-100 
            dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 
            text-gray-900 dark:text-gray-50 
            px-4 py-12 md:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Grid Effect (dark mode only) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] hidden dark:flex" />

      {/* Glowing Orb Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/30 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 space-y-5 items-center relative">
        {/* Left Column */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="relative group">
            <div className="relative w-48 h-48 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 animate-pulse group-hover:animate-none transition-all duration-500"
                style={{ transform: "rotate(-45deg)", filter: "blur(24px)" }}
              />
              <img
                src="/profile-pic.jpg?height=192&width=192"
                alt="Profile"
                className="relative rounded-full object-cover w-full h-full border-2 border-indigo-500/50"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Ambia Khatun Ela</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl">
              <TypeAnimation
                sequence={[
                  "MERN-Stack Developer",
                  2000,
                  "Frontend Developer",
                  1700,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-400 dark:to-teal-400"
              />
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400">
              <CodeIcon
                size={16}
                className="w-4 h-4 text-indigo-500 dark:text-indigo-400"
              />
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/ela60",
                label: "Github",
              },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/labonno-ela-b158a5213/",
                label: "LinkedIn",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/labbono.tasnuva",
                label: "Facebook",
              },
              {
                icon: MailIcon,
                href: "mailto:ambiaela7275@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-indigo-500/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting Reality from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-400 dark:to-teal-400">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              MERN Stack Developer turning bold ideas into seamless digital
              experiences — from pixel-perfect interfaces to powerful backend
              systems. Engineer of end-to-end web solutions using the MERN
              stack, aligning user experience with robust technical
              architecture..
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-400 dark:to-teal-400">
                  +1
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                YEARS OF
                <br />
                EXPERIENCE
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <ServerIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-400 dark:to-teal-400">
                  +10
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                PROJECTS
                <br />
                COMPLETED
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <DatabaseIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-400 dark:to-teal-400">
                  +3
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                SATISFIED
                <br />
                CLIENTS
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <a href="#collab">
                <Button className="relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 btn border-none dark:from-indigo-500 dark:to-teal-500 dark:hover:from-indigo-600 dark:hover:to-teal-600 transition-colors">
                  <span className="relative z-10">Let's Collaborate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-teal-700 dark:from-indigo-600 dark:to-teal-600 transition-transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0" />
                  <div className="absolute inset-0 bg-black dark:bg-white transition-opacity group-hover:opacity-10 opacity-0" />
                </Button>
              </a>
              <a
                 href={cv}
                 download
                className=""
              >
                <InteractiveHoverButton
                  text="Resume"
                  className="outline bg-none rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
