import classnames from 'classnames'

function NabBar({ className, ...restProps }: GlobalProps) {
  return (
    <nav
      className={classnames(
        'fixed left-0 top-0',
        'w-32.5 h-screen',
        ' bg-gray-900',
        className
      )}
      {...restProps}
    >
      <h1>NabBar</h1>
    </nav>
  )
}

export default NabBar
