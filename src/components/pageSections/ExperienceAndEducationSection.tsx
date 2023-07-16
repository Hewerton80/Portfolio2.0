import classNames from 'classnames'
import { useContext, useEffect, useRef } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import useTranslate from '../../hooks/useTranslate'
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
  const { translate } = useTranslate()

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
      className={classNames('flex', 'w-full min-h-screen', 'px-7.5 py-22.5')}
      ref={sectionRef}
    >
      <div className="flex flex-col pl-12 space-y-16">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames('title-section', getHtmlTagWrapperStyle('h2'))}
        >
          {translate('experience')}
        </Text>
        <Text
          as="h3"
          hasWordHoverEffect
          className={classNames(
            'text-2xl sm:text-3xl md:text-4xl',
            'text-primary font-bold',
            getHtmlTagWrapperStyle('h3')
          )}
        >
          {translate('employments')}
        </Text>

        <Stepper>
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
            'text-2xl sm:text-3xl md:text-4xl',
            'text-primary font-bold',
            getHtmlTagWrapperStyle('h3')
          )}
        >
          {translate('education')}
        </Text>
        {/* <Stepper>
          {staticInfo.educations.map((education, index) => (
            <ExperienceEdicationStep
              key={education.title + index}
              exepetienceEducation={education}
            />
          ))}
        </Stepper> */}
      </div>
    </section>
  )
}

export default ExperienceAndEducationSection
