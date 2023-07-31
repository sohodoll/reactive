import { SmallIcon } from './components/SmallIcon'
import { ContentBlock } from './components'
import { SmallContentBLock } from './components/SmallContentBlock/SmallContentBlock'
import crown from 'assets/icons/crown.png'
import fire from 'assets/icons/fire.png'
import exam from 'assets/icons/l-exam.png'
import rocket from 'assets/icons/rocket-launch.png'
import tv from 'assets/icons/tv-play.png'
import sign from 'assets/icons/80.png'
import joystick from 'assets/icons/game-controller.png'
import styles from './styles.module.css'

export const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Ray Driving Theory</h1>
        <div className={styles.icons}>
          <SmallIcon src={crown} alt='crown icon' />
          <SmallIcon src={fire} alt='fire icon' children={<>13</>} style={{ marginLeft: '5px' }} />
        </div>
      </header>
      <main>
        <section className={styles.content}>
          <ContentBlock />
          <div className={styles.subContent}>
            <SmallContentBLock src={exam} alt='exam icon' content='DVSA Exam' type='primary' />
            <SmallContentBLock src={rocket} alt='rocket icon' content='Express mode' type='secondary' />
            <SmallContentBLock src={tv} alt='tv icon' content='Hazard perception' type='secondary' />
            <SmallContentBLock src={sign} alt='sign icon' content='Road signs' type='secondary' />
            <SmallContentBLock src={joystick} alt='joystick icon' content='Multiplayer Learning' type='secondary' />
          </div>
        </section>
      </main>
    </>
  )
}
