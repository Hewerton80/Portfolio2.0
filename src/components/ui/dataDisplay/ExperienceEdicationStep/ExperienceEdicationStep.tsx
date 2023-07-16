/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { differenceInYears, differenceInMonths, format } from 'date-fns'
import { useCallback } from 'react'
import { staticInfo } from '../../../../utils/staticInfo'
import style from './ExperienceEdicationStep.module.css'
interface StepperProps extends GlobalProps {}

interface ExperienceEdicationStepProps {
  exepetienceEducation: (typeof staticInfo.experiences)[0]
}

export function Stepper({ children, className }: StepperProps) {
  return <div className={classNames(style['stepper-root'], className)}>{children}</div>
}

export function ExperienceEdicationStep({
  exepetienceEducation,
}: ExperienceEdicationStepProps) {
  // console.log(exepetienceEducation)

  const getDiffDate = useCallback(() => {
    const startDate = new Date(exepetienceEducation.startDate)
    const endDate = exepetienceEducation.isCurrentWork
      ? new Date()
      : new Date(exepetienceEducation.endDate)
    // const diffDate = endDate.diff(startDate, 'minutes')
    const diffYears = differenceInYears(endDate, startDate)
    const diffMonths = differenceInMonths(endDate, startDate)

    if (diffYears > 0) {
      return `${diffYears} ano(s)`
    }
    return `${diffMonths} mese(s)`
  }, [exepetienceEducation])

  return (
    <div className={style['experience-step-root']}>
      <span className={style['experience-step-cicle']} />
      <span className="aspect-square min-w-[48px] w-12 h-12 mx-4 rounded-full overflow-hidden">
        <img
          className="aspect-square w-full h-full"
          src={exepetienceEducation.campanayUrlImg}
          alt={exepetienceEducation.title}
          loading="lazy"
          width={48}
          height={48}
        />
      </span>
      <div className="flex flex-col text-sm text- sm:text-base ">
        <strong className="line-clamp-1">{exepetienceEducation.title}</strong>
        <p>
          <span className="text-sm line-clamp-1">
            {exepetienceEducation.companyName} · {exepetienceEducation.employmentType}
          </span>
        </p>
        <span className="text-xs sm:text-sm text-gray-500 line-clamp-1">
          {format(new Date(exepetienceEducation.startDate), 'MMM yyyy')}
          {' - '}
          {exepetienceEducation.isCurrentWork
            ? 'Atualmente'
            : format(new Date(exepetienceEducation?.endDate!), 'MMM yyyy')}
          {' · '}
          {getDiffDate()}
        </span>
      </div>
    </div>
  )
}
