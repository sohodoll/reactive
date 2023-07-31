import { CSSProperties } from 'react'
import styles from './styles.module.css'

type LargeIconProps = {
  src: string
  alt: string
  style?: CSSProperties
  type: 'primary' | 'secondary'
}

export const LargeIcon = ({ src, alt, style, type }: LargeIconProps) => {
  return (
    <span className={`${styles.largeIcon} ${type === 'primary' ? styles.primary : styles.secondary}`}>
      <img src={src} alt={alt} style={style} />
    </span>
  )
}
