import classNames from 'classnames'
import style from './Button.module.css'

interface ButtonProps extends GlobalProps {
  onClick?: () => void
}

function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button className={classNames(style.root, className)} {...restProps}>
      <span className={style.root_button_content}>{children}</span>
    </button>
  )
}

export default Button
