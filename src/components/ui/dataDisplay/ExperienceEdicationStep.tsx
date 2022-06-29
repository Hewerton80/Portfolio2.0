/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { DateTime, Duration } from 'luxon'
import { ReactNode, useCallback } from 'react'
import { staticInfo } from '../../../utils/staticInfo'

interface StepperProps extends GlobalProps {}

interface ExperienceEdicationStepProps {
  exepetienceEducation: typeof staticInfo.experiences[0]
}
export function Stepper({ children, className }: StepperProps) {
  return (
    <div className={classNames('flex flex-col space-y-4', className)}>{children}</div>
  )
}

export function ExperienceEdicationStep({
  exepetienceEducation,
}: ExperienceEdicationStepProps) {
  // console.log(exepetienceEducation)

  const getDiff = useCallback(() => {
    const start = DateTime.fromISO(exepetienceEducation.startDate)
    const end = DateTime.fromISO(exepetienceEducation.endDate)
    const diffYears = end.diff(start, 'years')
    const diffMonths = end.diff(start, 'months')
    const years = Math.floor(diffYears.years)
    const months = Math.floor(diffMonths.months)
    if (years > 0) {
      return `${years} ano(s)`
    }
    return `${months} mese(s)`
  }, [exepetienceEducation])

  return (
    <div className="flex space-x-4">
      <span className="w-14 h-14 rounded-full overflow-hidden">
        <img
          className="w-14 h-14"
          src={exepetienceEducation.campanayUrlImg}
          alt={exepetienceEducation.title}
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
          {getDiff()}
        </span>
      </div>
    </div>
  )
}
