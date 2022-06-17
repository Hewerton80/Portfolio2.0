import classNames from 'classnames'
import { ReactNode, useId } from 'react'
import { isString } from '../../../../utils/isType'

interface TextProps extends GlobalProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  hasWordHoverEffect?: boolean
}

function Text({ children, as = 'p', hasWordHoverEffect = false, className }: TextProps) {
  const id = useId()
  const classnamesResult = classNames('relative', className)

  const getCustomChildren = (customChildren: ReactNode) => {
    if (!hasWordHoverEffect) {
      return customChildren
    } else if (isString(customChildren)) {
      return String(children)
        .split('')
        .map((letter, i) => (
          <span
            className="hover:text-primary ease-out duration-300"
            key={id + i + letter}
          >
            {letter}
          </span>
        ))
    }
    return children
  }

  const customChildren = getCustomChildren(children)

  if (as === 'h1') {
    return <h1 className={classnamesResult}>{customChildren}</h1>
  } else if (as === 'h2') {
    return <h2 className={classnamesResult}>{customChildren}</h2>
  } else if (as === 'h3') {
    return <h3 className={classnamesResult}>{customChildren}</h3>
  } else if (as === 'h4') {
    return <h4 className={classnamesResult}>{customChildren}</h4>
  } else if (as === 'h5') {
    return <h5 className={classnamesResult}>{customChildren}</h5>
  } else if (as === 'h6') {
    return <h6 className={classnamesResult}>{customChildren}</h6>
  } else if (as === 'p') {
    return <p className={classnamesResult}>{customChildren}</p>
  } else {
    return <span className={classnamesResult}>{customChildren}</span>
  }
}

export default Text
