import { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.css'

type SmallIconProps = {
  src: string
  alt: string
  children?: ReactNode
  style?: CSSProperties
}

export const SmallIcon = ({ src, alt, children, style }: SmallIconProps) => {
  return (
    <span className={styles.icon}>
      <img src={src} alt={alt} style={style} />
      <>{children}</>
    </span>
  )
}
