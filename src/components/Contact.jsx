import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(linksRef.current.children, {
        scrollTrigger: {
          trigger: linksRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="contact" ref={sectionRef}>
      <div className="container">
        <div>
          <div className="section-label-vertical">CONTACT</div>
          <div className="contact-content">
          <div className="contact-title" ref={titleRef}>
            <h2>
              <span className="title-line">Say Hi,</span>
              <span className="title-line italic">Stranger!</span>
            </h2>
          </div>

          <div className="contact-links" ref={linksRef}>
            <a
              href="https://www.linkedin.com/in/arpan-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-text">LinkedIN</span>
              <span className="link-arrow">→</span>
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-text">Calendly</span>
              <span className="link-arrow">→</span>
            </a>
          </div>

          <footer className="footer">
            <p>&copy; 2025 Arpan Patel. All rights reserved.</p>
          </footer>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
