import { Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProjectsCategory, { ProjectsIndex } from './pages/ProjectsCategory'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:categoryId" element={<ProjectsCategory />} />
          <Route
            path="/projects/:categoryId/:projectSlug"
            element={<ProjectDetail />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}
