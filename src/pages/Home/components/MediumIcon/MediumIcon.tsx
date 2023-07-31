import { CSSProperties } from 'react'
import styles from './styles.module.css'

type MediumIconProps = {
  src: string
  alt: string
  style?: CSSProperties
  type: 'primary' | 'secondary'
}

export const MediumIcon = ({ src, alt, style, type }: MediumIconProps) => {
  return (
    <span className={`${styles.mediumIcon} ${type === 'primary' ? styles.primary : styles.secondary}`}>
      <img src={src} alt={alt} style={style} />
    </span>
  )
}
