"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Image, BookOpen, ExternalLink, Github, ShoppingCart, MessageSquare, Zap } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Lift web",
      description:
        "A ride application landing website that tracks every step of the journey, helping users reach their destination at the perfect time. Uses automated scraping of Google Maps data in a legally acceptable way.",
      image: "/lift.png?height=400&width=600",
      category: "mobile",
      tags: ["Next.js", "Node.js", "React", "Tailwind"],
      icon: <MapPin className="h-10 w-10 text-primary" />,
      link: "#",
      github: "#",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "FidelLearn",
      description:
        "An AI-powered educational platform that helps students, teachers, school managers, and staff members connect socially at any time. Features personalized learning paths and communication tools.",
      image: "/fidellearn.png?height=400&width=600",
      category: "web",
      tags: ["React", "AI/ML", "Node.js", "MongoDB"],
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "#",
      github: "#",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 3,
      title: "Lift App (user)",
      description:
        "A ride application that tracks every step of the journey, helping users reach their destination at the perfect time. Uses automated scraping of Google Maps data in a legally acceptable way.",
      image: "/liftapp.webp?height=400&width=600",
      category: "web",
      tags: ["flutter", "Dart", "Sanity cms", "Google maps"],
      icon: <Image className="h-10 w-10 text-primary" />,
      link: "#",
      github: "#",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "E-Commerce SkemVerse",
      description:
        "A comprehensive e-commerce solution with product management, shopping cart, payment processing, and order tracking. Features a responsive design and admin dashboard.",
      image: "/ekverse.png?height=400&width=600",
      category: "web",
      tags: ["React", "Redux", "Express.js", "Stripe", "MongoDB"],
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      link: "#",
      github: "#",
      color: "from-pink-500 to-red-600",
    },
    {
      id: 5,
      title: "Lift Driver App",
      description:
        "A ride application for the driver that tracks every step of the journey, helping users reach their destination at the perfect time. Uses automated scraping of Google Maps data in a legally acceptable way.",
      image: "/liftdriver.webp?height=400&width=600",
      category: "web",
      tags: ["Flutter", "Socket.io", "Dart", "SanityCms", "Google maps"],
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      link: "#",
      github: "#",
      color: "from-red-500 to-orange-600",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
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
              Featured Projects
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-600 transform origin-left"></div>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg max-w-3xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of the projects I've worked on that showcase my skills and experience in developing innovative
            solutions to complex problems.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-background/80 backdrop-blur-sm border border-border">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-300"></div>

                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="rounded-full" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" /> View
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" /> Code
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <motion.div
                      className="flex justify-center mb-2"
                      animate={{
                        rotate: hoveredProject === project.id ? [0, 10, 0, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="p-3 rounded-full bg-primary/10">{project.icon}</div>
                    </motion.div>
                    <CardTitle className="text-xl text-center text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content">
                    <CardDescription className="text-center mb-4 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

