"use client"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail, Phone, MessageCircle, Linkedin, Github,
  Copy, CheckCheck, Sparkles, Send, Facebook
} from "lucide-react"

const ContactSection = () => {
  const form = useRef()
  const [copiedField, setCopiedField] = useState(null)

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const email = form.current.from_email.value
    const message = form.current.message.value

    if (!email || !message) {
      alert("Please fill in all the fields!")
      return
    }

    emailjs
      .sendForm(
        "service_h97h8il",
        "template_w8af4gl",
        form.current,
        "bYXVIuDz3ImmMrSJS"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text)
          alert("Message sent successfully!")
        },
        (error) => {
          console.error("Error sending email:", error.text)
          alert("Failed to send message. Please try again.")
        }
      )

    e.target.reset()
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "ambiaela7275@gmail.com",
      id: "email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+8801682239684",
      id: "phone"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+8801682239684",
      id: "whatsapp"
    }
  ]

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/labonno-ela-b158a5213/" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/ela60" },
    { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/labbono.tasnuva" }
  ]

  return (
    <section id="collab" className="relative min-h-screen bg-white dark:bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/30 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/30 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white backdrop-blur-sm border-0 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-secondary mr-2" />
              <span className="text-secondary">Get in Touch</span>
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-500">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Feel free to reach out. I'm always open to discussing new projects or opportunities.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <motion.div key={contact.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <Card className="group relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 dark:text-purple-400">{contact.icon}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{contact.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(contact.value, contact.id)}
                    className="rounded p-1 hover:bg-purple-500/10"
                  >
                    {copiedField === contact.id ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    )}
                  </motion.button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{contact.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-3 text-gray-700 hover:bg-purple-500/10 dark:text-white/80 dark:hover:bg-purple-500/20"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Email Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <Input
            name="from_email"
            type="email"
            placeholder="Your Email Address"
            required
            className="bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[150px] bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
