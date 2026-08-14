// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import AllPlanning from "./pages/AllPlanning/AllPlanning";
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import CreatePlanning from "./pages/CreatePlanning/CreatePlanning";

export default function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<AllPlanning />} />
          <Route path="/create" element={<CreatePlanning />} />
        </Routes>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
