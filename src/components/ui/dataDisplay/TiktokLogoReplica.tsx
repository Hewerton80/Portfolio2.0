import classNames from 'classnames'
import style from './TiktokLogoReplica.module.css'
interface TiktokLogoReplicaProps extends GlobalProps {
  char: string
}

function TiktokLogoReplica({ className, char, ...restProps }: TiktokLogoReplicaProps) {
  return (
    <span className={classNames('relative', className)} {...restProps}>
      <span className="z-10 text-primary">{char}</span>
      <span className={classNames('absolute z-20 left-2', 'text-secondary')}>{char}</span>
    </span>
  )
}

export default TiktokLogoReplica
