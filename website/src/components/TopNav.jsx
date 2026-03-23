import { NavLink } from 'react-router-dom'
import styles from '../App.module.css'

const navItems = [
  { to: '/home', label: 'Home' },
  { to: '/requirements', label: 'Requirements' },
  { to: '/research', label: 'Research' },
  { to: '/ui-design', label: 'UI Design' },
  { to: '/system-design', label: 'System Design' },
  { to: '/implementation', label: 'Implementation' },
  { to: '/testing', label: 'Testing' },
  { to: '/evaluation', label: 'Evaluation' },
  { to: '/blog', label: 'Blog' },
  { to: '/appendices', label: 'Appendices' },
]

export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/home" className={styles.navLogo}>
        <span className={styles.navLogoDot} />
        MotionInput Football
      </NavLink>
      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? styles.navLinkActive : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
