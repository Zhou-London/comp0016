import { Outlet } from 'react-router-dom'
import styles from '../App.module.css'
import Footer from './Footer'
import TopNav from './TopNav'

export default function SiteLayout() {
  return (
    <div className={styles.page}>
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
