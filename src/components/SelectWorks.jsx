import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SelectWorks.css'

gsap.registerPlugin(ScrollTrigger)

const SelectWorks = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const worksRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      // Animate work items
      gsap.from(worksRef.current.children, {
        scrollTrigger: {
          trigger: worksRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="select-works" ref={sectionRef}>
      <div className="container">
        <div className="section-label" ref={titleRef}>
          SELECT WORKS
        </div>

        <div>
          <div className="works-grid" ref={worksRef}>
            <div className="work-item">
              <div className="work-image">
                <div className="placeholder-image">
                  <span>Banking App UI</span>
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="placeholder-image">
                  <span>Mobile Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectWorks
