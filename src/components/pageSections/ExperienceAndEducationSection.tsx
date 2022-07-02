import classNames from 'classnames'
import { useContext, useEffect, useRef } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import {
  ExperienceEdicationStep,
  Stepper,
} from '../ui/dataDisplay/ExperienceEdicationStep'
import Text from '../ui/typography/Text'

function ExperienceAndEducationSection() {
  const { setActiveUrl } = useContext(ActiveUrlContext)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setActiveUrl(IDS_SECTIONS.EXPERIENCE)
        }
      })
    }, {})
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [setActiveUrl])

  return (
    <section
      id={IDS_SECTIONS.EXPERIENCE}
      className={classNames('flex', 'w-full h-fit', 'px-7.5 py-22.5')}
      ref={sectionRef}
    >
      <div className="flex flex-col pl-12 space-y-16">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames(
            'text-7xl text-primary font-bold',
            getHtmlTagWrapperStyle('h2')
          )}
        >
          Experiência
        </Text>
        <Text
          as="h3"
          hasWordHoverEffect
          className={classNames(
            'text-4xl text-primary font-bold',
            getHtmlTagWrapperStyle('h3')
          )}
        >
          Experiência
        </Text>

        <Stepper className="">
          {staticInfo.experiences.map((experience, index) => (
            <ExperienceEdicationStep
              key={experience.title + index}
              exepetienceEducation={experience}
            />
          ))}
        </Stepper>
        <Text
          as="h3"
          hasWordHoverEffect
          className={classNames(
            'text-4xl text-primary font-bold',
            getHtmlTagWrapperStyle('h3')
          )}
        >
          Educação
        </Text>
        <Stepper>
          {staticInfo.educations.map((education, index) => (
            <ExperienceEdicationStep
              key={education.title + index}
              exepetienceEducation={education}
            />
          ))}
        </Stepper>
      </div>
    </section>
  )
}

export default ExperienceAndEducationSection
