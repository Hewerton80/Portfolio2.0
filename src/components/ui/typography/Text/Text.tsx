import classNames from 'classnames'
import { MouseEvent, ReactNode, useId } from 'react'
import { isString } from '../../../../utils/isType'
interface TextProps extends GlobalProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  hasWordHoverEffect?: boolean
}

function Text({
  children,
  as = 'p',
  hasWordHoverEffect = false,
  className,
  ...restProps
}: TextProps) {
  const id = useId()
  const classnamesResult = classNames('relative', className)

  const handleMouseHover = (e: MouseEvent) => {
    const jelloHorizontalClassName = 'jello-horizontal'
    const target = e.currentTarget
    if (!target.classList.contains(jelloHorizontalClassName)) {
      target.classList.add(jelloHorizontalClassName)
      setTimeout(() => {
        target.classList.remove(jelloHorizontalClassName)
      }, 900)
    }
  }

  const getCustomChildren = (customChildren: ReactNode) => {
    if (!hasWordHoverEffect) {
      return customChildren
    } else if (isString(customChildren)) {
      return String(children)
        .split('')
        .map((letter, i) => (
          <span
            key={id + i + letter}
            className={classNames(
              'hover:text-primary ease-out duration-300'
              // letter.trim() && 'jello-horizontal'
            )}
            onMouseOver={(e) => letter.trim() && handleMouseHover(e)}
          >
            {letter}
          </span>
        ))
    }
    return children
  }

  const customChildren = getCustomChildren(children)

  if (as === 'h1') {
    return (
      <h1 className={classnamesResult} {...restProps}>
        {customChildren}
      </h1>
    )
  } else if (as === 'h2') {
    return (
      <h2 className={classnamesResult} {...restProps}>
        {customChildren}
      </h2>
    )
  } else if (as === 'h3') {
    return (
      <h3 className={classnamesResult} {...restProps}>
        {customChildren}
      </h3>
    )
  } else if (as === 'h4') {
    return (
      <h4 className={classnamesResult} {...restProps}>
        {customChildren}
      </h4>
    )
  } else if (as === 'h5') {
    return (
      <h5 className={classnamesResult} {...restProps}>
        {customChildren}
      </h5>
    )
  } else if (as === 'h6') {
    return (
      <h6 className={classnamesResult} {...restProps}>
        {customChildren}
      </h6>
    )
  } else if (as === 'p') {
    return (
      <p className={classnamesResult} {...restProps}>
        {customChildren}
      </p>
    )
  } else {
    return (
      <span className={classnamesResult} {...restProps}>
        {customChildren}
      </span>
    )
  }
}

export default Text
