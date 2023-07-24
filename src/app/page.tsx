import Image from 'next/image'
import Acceuil from '@/app/acceuil/Acceuil'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Acceuil/>
    </main>
  )
}
