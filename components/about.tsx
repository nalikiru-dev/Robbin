"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Server, Cpu, Layers, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with scalable architecture.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Design",
      description: "Designing efficient database schemas and implementing data storage solutions.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full Stack Solutions",
      description: "Delivering end-to-end web applications with seamless integration between all layers.",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "System Architecture",
      description: "Designing scalable and maintainable system architectures for complex applications.",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Implementing and managing cloud-based infrastructure for optimal performance and reliability.",
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Problem Solving",
      description: "Applying analytical thinking to solve complex technical challenges and optimize solutions.",
      gradient: "from-yellow-500 to-green-600",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Project Leadership",
      description: "Leading technical teams and projects from conception to successful deployment.",
      gradient: "from-green-500 to-teal-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-600 transform origin-left"></div>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg max-w-3xl mx-auto text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate software engineer with over 5 years of experience building innovative applications and
            solutions. My journey in software development has been driven by a desire to create technology that solves
            real-world problems and enhances user experiences.
          </motion.p>

          <motion.p
            className="text-lg max-w-3xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With expertise across the full stack and a focus on creating scalable, maintainable solutions, I bring a
            blend of technical skill and creative problem-solving to every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background overflow-hidden group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-300"></div>

                <CardContent className="p-6 text-center card-content relative z-10">
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      className="relative p-3 rounded-full bg-primary/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {service.icon}
                      <div className="absolute inset-0 rounded-full bg-primary opacity-10 animate-ping"></div>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

