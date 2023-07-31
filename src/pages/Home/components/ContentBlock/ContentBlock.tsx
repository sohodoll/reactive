import { LargeIcon } from '../../components'
import styles from './styles.module.css'
import cap from 'assets/icons/graduation-cap.png'
import rightArrow from 'assets/icons/chevron-circle-right.png'
import { ProgressBars } from './ProgressBars'

export const ContentBlock = () => {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.contentBlockUpper}>
        <LargeIcon src={cap} alt='exam icon' type='primary' />
        <div className={styles.titles}>
          <h2>Learning</h2>
          <p>Category B</p>
        </div>
        <img src={rightArrow} alt='right arrow' className={styles.arrow} />
      </div>
      <div className={styles.contentBlockBottom}>
        <p>112 questions out of 730 passed</p>
        <ProgressBars barCount={7} progress={28.5} />
      </div>
    </div>
  )
}
