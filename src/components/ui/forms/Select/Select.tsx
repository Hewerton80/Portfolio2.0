import classNames from 'classnames'
import { SelectHTMLAttributes } from 'react'

interface IselectOpstions {
  value: string
  label: string
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IselectOpstions[]
}

export function Select({ className, options, ...restProps }: SelectProps) {
  return (
    <select className={classNames(className)} {...restProps}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
