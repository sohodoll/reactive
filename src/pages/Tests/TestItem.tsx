import styles from './styles.module.css'
import checkmark from 'assets/icons/check-circle.png'

export const TestItem = ({ num, isDone }: { num: number; isDone: boolean }) => {
  return (
    <article className={styles.testItemContainer}>
      <div className={styles.testItem}>
        <span className={styles.testItemNumWrapper}>
          {num}
          {isDone && <img src={checkmark} alt='check mark' />}
        </span>
      </div>
    </article>
  )
}
