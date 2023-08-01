import styles from './styles.module.css'

type MiscBlockProps = {
  src: string
  alt: string
  text: string
}

export const MiscBlock = ({ src, alt, text }: MiscBlockProps) => {
  return (
    <div className={styles.miscBlock}>
      <img className={styles.icon} src={src} alt={alt} />
      <p>{text}</p>
    </div>
  )
}
