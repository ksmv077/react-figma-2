import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './Main.module.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles.container}>
    <Header />
    <MainContent />
  </div>
)
