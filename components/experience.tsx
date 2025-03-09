"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading development of enterprise-level applications, mentoring junior developers, and implementing best practices for code quality and performance.",
      achievements: [
        "Reduced application load time by 40% through code optimization",
        "Led a team of 5 developers to deliver a major project ahead of schedule",
        "Implemented CI/CD pipeline that reduced deployment time by 60%",
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed and maintained web applications for clients across various industries, focusing on responsive design and performance optimization.",
      achievements: [
        "Built a custom CMS that increased content management efficiency by 35%",
        "Integrated payment gateways for e-commerce platforms with 99.9% uptime",
        "Optimized database queries resulting in 50% faster data retrieval",
      ],
      skills: ["JavaScript", "React", "Express.js", "PostgreSQL", "Redis"],
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2018 - 2019",
      description:
        "Collaborated with designers and senior developers to create responsive websites and web applications for clients.",
      achievements: [
        "Developed 15+ responsive websites for various clients",
        "Implemented SEO best practices resulting in 30% increase in organic traffic",
        "Created reusable component library that improved development efficiency",
      ],
      skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "jQuery"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            My professional journey has equipped me with diverse skills and experiences in software development across
            different industries and technologies.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 md:transform md:-translate-x-1/2 w-1 bg-primary/30"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
          ></motion.div>

          {/* Clear fix for floated elements */}
          <div className="relative z-10 md:after:content-[''] md:after:table md:after:clear-both">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-12 md:mb-24 md:w-1/2 relative ${
                  index % 2 === 0 ? "md:float-left md:clear-left md:pr-12" : "md:float-right md:clear-right md:pl-12"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Badge variant="outline" className="text-sm py-1 px-3 bg-primary/10">
                      {exp.period}
                    </Badge>
                  </div>

                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </CardHeader>
                      <CardContent className="card-content">
                        <p className="mb-4 text-muted-foreground">{exp.description}</p>
                        <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                            >
                              <Badge variant="secondary">{skill}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className={`absolute top-2 w-6 h-6 rounded-full bg-primary ${
                    index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  } hidden md:block z-20`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute inset-1 bg-background rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

