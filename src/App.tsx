import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './components/Footer'
import './App.css'

// Scroll to the #section in the URL after navigating, or to the top for a new page.
function ScrollManager() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash, key])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
