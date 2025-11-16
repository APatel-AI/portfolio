import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(projectsRef.current.children, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        stagger: 0.3,
        duration: 1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]

  return (
    <section className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <blockquote className="projects-quote">
            "As far as the customer is concerned, the interface is the product"
            <span className="quote-author"> — John Liu</span>
          </blockquote>
        </div>

        <div className="projects-content">
          <div className="section-label-vertical">SELECTED WORKS</div>
          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-placeholder">
                  {/* Placeholder for case study */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
