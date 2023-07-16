import classNames from 'classnames'
import { Slot } from '@radix-ui/react-slot'
import style from './Button.module.css'

interface ButtonProps extends GlobalProps {
  onClick?: () => void
  asChild?: boolean
}

function Button({ children, asChild, className, ...restProps }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={classNames(style.root, className)} {...restProps}>
      <span className={style.root_button_content}>{children}</span>
    </Comp>
  )
}

export default Button
