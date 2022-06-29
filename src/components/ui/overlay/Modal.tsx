// import { HTMLAttributes, useEffect } from 'react'
import cn from 'classnames'
import styles from './Modal.module.css'
import { Card, CardProps } from '../layout/Card'
// import { getBodyElement } from '../../../utils/getBodyElement'
import { FaTimes } from 'react-icons/fa'

export interface ModalProps extends GlobalProps {
  show: boolean
  onClose?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export function Modal({
  children,
  className,
  show,
  size = 'md',
  onClose,
  ...rest
}: ModalProps) {
  // useEffect(() => {
  //   const bodyElement = getBodyElement()
  //   if (show) {
  //     bodyElement?.classList?.add('hidden_scroll')
  //   } else {
  //     bodyElement?.classList?.remove('hidden_scroll')
  //   }
  // }, [show])

  if (!show) {
    return <></>
  }

  return (
    <div className={cn(styles.root)}>
      <div className={cn(styles['wrapper-modal'])} onClick={() => onClose?.()}></div>
      <Card className={cn(styles.modal, styles[size], className)} {...rest}>
        {children}
        <span
          className="text-dark absolute top-5 right-6 cursor-pointer p-1"
          role="button"
          onClick={() => onClose?.()}
        >
          <FaTimes />
        </span>
      </Card>
    </div>
  )
}

export function ModalTitle({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('text-2xl font-bold flex px-7 pt-6', className)} {...rest}>
      <h5>{children}</h5>
    </div>
  )
}

export function ModalContent({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex flex-col px-7 py-6 overflow-auto', className)} {...rest}>
      {children}
    </div>
  )
}
