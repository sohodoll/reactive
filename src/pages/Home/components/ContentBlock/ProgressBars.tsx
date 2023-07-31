import styles from './styles.module.css'

type BarProps = {
  isActive: boolean
}

type ProgressBarsProps = {
  barCount: number
  progress: number
}

const Bar = ({ isActive }: BarProps) => {
  return <span className={`${styles.bar} ${isActive ? styles.activeBar : ''}`}></span>
}

export const ProgressBars = ({ barCount, progress }: ProgressBarsProps) => {
  const filledBars = Math.round((progress / 100) * barCount)
  console.log(filledBars)
  const bars = Array(barCount)
    .fill(0)
    .map((_, i) => <Bar key={i} isActive={i < filledBars} />)

  return <div className={styles.progressBars}>{bars}</div>
}
