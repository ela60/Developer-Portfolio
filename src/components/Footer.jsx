import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/labonno-ela-b158a5213/",
      name: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ela60",
      name: "GitHub",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/LabonnoEla047",
      name: "Twitter",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-black py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-50" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/30 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/30 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ambia Khatun Ela
            </h3>
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5" />
              <span>ambiaela7275@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Khulna, Bangladesh</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (link) => (
                  <li
                    key={link}
                    className="hover:text-purple-600 transition-colors"
                  >
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Stay Updated
            </h4>
            <div className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status) setStatus(null);
                }}
                placeholder="Your email"
                className="flex-grow px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:opacity-90 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            {status === "success" && (
              <p className="mt-2 text-sm text-green-500">
                Subscribed successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-500">
                Please enter a valid email.
              </p>
            )}
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-12" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-gray-600 dark:text-gray-400 flex items-center">
            <span>© {currentYear} Ambia Ela. Crafted with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" />
            <span>All Rights Reserved</span>
          </div>
        </motion.div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-focus transition-colors duration-300 ease-in-out transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
