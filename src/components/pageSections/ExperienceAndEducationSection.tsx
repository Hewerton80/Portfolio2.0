import classNames from 'classnames'
import { ReactNode } from 'react'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import { ExperienceEdicationStep, Stepper } from '../ui/dataDisplay'
import Text from '../ui/typography/Text'

interface ExperienceAndEducationSectionProps extends GlobalProps {}

export function ExperienceAndEducationSection() {
  return (
    <section className={classNames('flex', 'w-full h-fit', 'px-7.5 py-22.5')}>
      <div className="flex flex-col pl-12">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames(
            'text-7xl text-primary font-bold mb-16',
            getHtmlTagWrapperStyle('h2')
          )}
        >
          Education / Experience
        </Text>
        <Text
          as="h3"
          hasWordHoverEffect
          className={classNames(
            'text-4xl text-primary font-bold mb-16',
            getHtmlTagWrapperStyle('h3')
          )}
        >
          Experience
        </Text>
        <Stepper>
          {staticInfo.experiences.map((experience, index) => (
            <ExperienceEdicationStep
              key={experience.title + index}
              exepetienceEducation={experience}
            />
          ))}
        </Stepper>
      </div>
    </section>
  )
}
