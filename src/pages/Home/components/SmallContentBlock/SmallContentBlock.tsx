import { MediumIcon } from '../MediumIcon'
import styles from './styles.module.css'

type SmallContentBlockProps = {
  src: string
  alt: string
  content: string
  type: 'primary' | 'secondary'
}

export const SmallContentBLock = ({ src, alt, content, type }: SmallContentBlockProps) => {
  return (
    <article className={styles.smallContentBlock}>
      <MediumIcon src={src} alt={alt} type={type} />
      <p>{content}</p>
    </article>
  )
}
