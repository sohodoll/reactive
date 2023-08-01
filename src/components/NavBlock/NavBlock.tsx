import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { ReactElement, cloneElement } from 'react'

type NavBlockProps = {
  svg: ReactElement
  text: string
  to: string
}

export const NavBlock = ({ svg, text, to }: NavBlockProps) => {
  const activeColor = '#FF7355'
  const defaultColor = '#87898F'

  return (
    <NavLink className={styles.navBlock} to={to}>
      {({ isActive }) => (
        <>
          {cloneElement(svg, {
            fill: isActive ? activeColor : defaultColor,
            className: isActive ? styles.activeSvg : '',
            style: { backgroundColor: isActive ? '#ffe3dd40' : '#FFF' },
          })}
          <p className={isActive ? styles.active : ''}>{text}</p>
        </>
      )}
    </NavLink>
  )
}
