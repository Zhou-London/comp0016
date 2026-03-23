import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import styles from '../App.module.css'
import Footer from './Footer'
import TopNav from './TopNav'

export default function SiteLayout() {
  return (
    <div className={styles.page}>
        <ScrollToTop />
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
