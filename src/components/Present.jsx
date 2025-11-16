import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Present.css'

gsap.registerPlugin(ScrollTrigger)

const Present = () => {
  const sectionRef = useRef(null)
  const presentRef = useRef(null)
  const futureRef = useRef(null)
  const experimentsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(presentRef.current.children, {
        scrollTrigger: {
          trigger: presentRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
      })

      gsap.from(futureRef.current, {
        scrollTrigger: {
          trigger: futureRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
      })

      gsap.from(experimentsRef.current.children, {
        scrollTrigger: {
          trigger: experimentsRef.current,
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

  return (
    <section className="present" ref={sectionRef}>
      <div className="container">
        <div className="present-section" ref={presentRef}>
          <h3 className="section-title">PRESENT</h3>

          <div className="present-card">
            <span className="card-label">Application Developer @</span>
            <h4>CANADIAN IMPERIAL BANK OF COMMERCE US</h4>
            <p>
              Solving problems and building a great digital banking experience
              amongst highly experienced, technical, and talented individuals.
            </p>
          </div>

          <div className="present-card">
            <span className="card-label">Senior @ASU online studying</span>
            <h4>HUMAN SYSTEMS ENGINEERING</h4>
            <p>Learning, designing, analyzing, repeat.</p>
          </div>
        </div>

        <div className="future-section" ref={futureRef}>
          <h3 className="future-title">
            FUTURE <span className="dots">• • •</span>
          </h3>
        </div>

        <div className="experiments-section" ref={experimentsRef}>
          <div>
            <div className="section-label-vertical">EXPERIMENTS</div>
            <div className="experiments-content">
              <h2 className="experiments-title">
                <span className="title-light">Continuous</span>
                <span className="title-bold">Learning</span>
              </h2>
              <p className="experiments-subtitle">I ALSO BUILD INDIE PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Present
