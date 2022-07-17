import classNames from 'classnames'
import { SelectHTMLAttributes } from 'react'
import { MdLanguage } from 'react-icons/md'
import assets from '../../../../../assets.json'
interface IselectOpstions {
  value: string
  label: string
  selected?: boolean
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IselectOpstions[]
}

export function Select({ className, options, ...restProps }: SelectProps) {
  return (
    <div className={classNames('relative')}>
      <MdLanguage
        className={classNames(
          'absolute left-1 top-1/2 -translate-y-1/2',
          'text-primary',
          'pointer-events-none'
        )}
        color={assets.colors.primary}
      />
      <select
        className={classNames(
          'h-8 sm:h-10 pl-5',
          'text-primary outline-none',
          'border border-primary',
          'bg-transparent',

          className
        )}
        {...restProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} selected={option?.selected}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
