"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Robbin
            </h3>
            <p className="text-center text-muted-foreground mt-2">Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground"
          >
            <p className="mb-4">&copy; {new Date().getFullYear()} Robbin. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span className="mr-2">Back to the top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

