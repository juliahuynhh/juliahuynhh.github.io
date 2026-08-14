import { Link } from 'react-router-dom'
import './ProjectsSection.css'

const projects = [
  {
    label: 'Quantum Projects',
    image: '/icons/folder-left.png',
    path: '/projects/quantum',
  },
  {
    label: 'Physics Projects',
    image: '/icons/folder-center.png',
    path: '/projects/physics',
  },
  {
    label: 'Computer Science Projects',
    image: '/icons/folder-right.png',
    path: '/projects/computer-science',
  },
]

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-label">|major projects&gt;</h2>
      <div className="projects-grid">
        {projects.map(({ label, image, path }) => (
          <Link key={path} to={path} className="project-folder" aria-label={label}>
            <img src={image} alt="" className="project-folder-image" />
          </Link>
        ))}
      </div>
    </section>
  )
}
