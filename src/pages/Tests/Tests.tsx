import { NavLink } from 'react-router-dom'
import { TestItem } from './TestItem'
import styles from './styles.module.css'
import leftArrow from 'assets/icons/arrow-left.png'

export const Tests = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={styles.link} to='/'>
          <img src={leftArrow} alt='left arrow' />
        </NavLink>
        <p>Learning</p>
      </header>
      <main className={styles.tests}>
        <h1 className={styles.title}>Tests</h1>
        <div className={styles.testItems}>
          {Array.from({ length: 28 }, (_, i) => (
            <TestItem num={i + 1} isDone={i + 1 === 8 ? true : false} key={i} />
          ))}
        </div>
      </main>
    </>
  )
}
