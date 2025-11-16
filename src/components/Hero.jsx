import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const infoRef = useRef(null)
  const experienceRef = useRef(null)
  const quoteRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDaytime, setIsDaytime] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Animate elements in sequence
      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
      .from(infoRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      }, '-=0.5')
      .from(experienceRef.current.children, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')
      .from(quoteRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      const hour = now.getHours()
      setIsDaytime(hour >= 6 && hour < 18)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const experiences = [
    { years: '3', period: 'AM', role: 'Indie Developer' },
    { years: '8', period: 'AM', role: 'Application Developer', company: '@CIBC US' },
    { years: '4', period: 'PM', role: 'UI/UX Designer' },
    { years: '7', period: 'PM', role: 'Human Systems Engineering', company: '@ASU Online' },
  ]

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-header">
            <div className="profile">
              <div className="profile-avatar">
                <span>AP</span>
              </div>
              <div className="profile-info">
                <h3>Arpan Patel</h3>
                <p>AKA ARI :)</p>
              </div>
            </div>
          </div>

          <div className="hero-title" ref={titleRef}>
            <h1>
              <span className="title-line">UI/UX & PRODUCT</span>
              <span className="title-line highlight">DESIGNER</span>
              <span className="title-line highlight">DEVELOPER</span>
            </h1>
          </div>

          <div className="hero-info" ref={infoRef}>
            <div className="location">Based In Chicago, IL</div>
            <div className="time" id="live-time">
              <span className={`time-icon ${isDaytime ? 'sun' : 'moon'}`}>
                {isDaytime ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </span>
              {formatTime(currentTime)}
            </div>
          </div>

          <div className="experience-list" ref={experienceRef}>
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <span className="years">{exp.years}{exp.period}</span>
                <span className="role">
                  {exp.role}
                  {exp.company && <span className="company"> {exp.company}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
