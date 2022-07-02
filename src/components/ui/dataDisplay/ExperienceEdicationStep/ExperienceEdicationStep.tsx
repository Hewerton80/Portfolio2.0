/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useCallback } from 'react'
import { staticInfo } from '../../../../utils/staticInfo'
import style from './ExperienceEdicationStep.module.css'
interface StepperProps extends GlobalProps {}

interface ExperienceEdicationStepProps {
  exepetienceEducation: typeof staticInfo.experiences[0]
}

export function Stepper({ children, className }: StepperProps) {
  return <div className={classNames(style['stepper-root'], className)}>{children}</div>
}

export function ExperienceEdicationStep({
  exepetienceEducation,
}: ExperienceEdicationStepProps) {
  // console.log(exepetienceEducation)

  const getDiffDate = useCallback(() => {
    const startDate = DateTime.fromISO(exepetienceEducation.startDate)
    const endDate = DateTime.fromISO(exepetienceEducation.endDate)
    const diffDate = endDate.diff(startDate, 'days')
    const years = Math.floor(diffDate.as('years'))
    const months = Math.floor(diffDate.as('months'))
    if (years > 0) {
      return `${years} ano(s)`
    }
    return `${months} mese(s)`
  }, [exepetienceEducation])

  return (
    <div className={style['experience-step-root']}>
      <span className={style['experience-step-cicle']} />
      <span className="w-12 h-12 rounded-full overflow-hidden">
        <img
          className="w-12 h-12"
          src={exepetienceEducation.campanayUrlImg}
          alt={exepetienceEducation.title}
          loading="lazy"
        />
      </span>
      <div className="flex flex-col">
        <strong>{exepetienceEducation.title}</strong>
        <span className="text-sm">
          {exepetienceEducation.companyName} · {exepetienceEducation.employmentType}
        </span>
        <span className="text-sm text-gray-500">
          {DateTime.fromISO(exepetienceEducation.startDate).toFormat('MMM yyyy')}
          {' - '}
          {exepetienceEducation.isCurrentWork
            ? 'Atualmente'
            : DateTime.fromISO(exepetienceEducation?.endDate!).toFormat('MMM yyyy')}
          {' · '}
          {getDiffDate()}
        </span>
      </div>
    </div>
  )
}
