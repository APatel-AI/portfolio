import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const quoteRef = useRef(null)
  const pastRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section
      gsap.from(titleRef.current.children, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
      })

      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
      })

      gsap.from(pastRef.current.children, {
        scrollTrigger: {
          trigger: pastRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const pastExperiences = [
    {
      title: 'DUNKIN',
      role: 'Crew Member',
      description: 'Built bonds and led diverse teams by example and making great caramel macchiatos.',
    },
    {
      title: 'AMAZON',
      role: 'Warehouse Associate',
      description: 'Shared life experiences while delivering consistent results across multiple teams during peak season.',
    },
    {
      title: 'DISCOVERY PARTNERS INSTITUTE',
      role: 'Full-stack Software Developer Trainee',
      description: 'Completed and trained alongside a diversely skilled and talented set of inspiring individuals in experiencing the full software development life cycle from design, development, to production.',
    },
  ]

  return (
    <section className="about" ref={sectionRef}>
      <div className="container">
        <div>
          <div className="section-label-vertical">ABOUT ME</div>
          <div className="about-content">
          <div className="about-title" ref={titleRef}>
            <h2>
              <span className="title-light">WRITING MY</span>
              <span className="title-bold">NEXT CHAPTER</span>
            </h2>
          </div>

          <div className="about-quote" ref={quoteRef}>
            <p>
              "Yesterday is history, tomorrow is a mystery, but today is a gift.
              That's why they call is a present"
            </p>
            <span className="quote-author">— Master Oogway</span>
          </div>

          <div className="past-section">
            <h3 className="past-title">PAST</h3>
            <div className="past-experiences" ref={pastRef}>
              {pastExperiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="experience-role">{exp.role}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
