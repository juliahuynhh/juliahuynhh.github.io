import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectFolder from '../components/ProjectFolder'
import ProjectStickyNote from '../components/ProjectStickyNote'
import { getCategoryById, projectCategories } from '../data/projects'
import './ProjectsCategory.css'

export default function ProjectsCategory() {
  const { categoryId } = useParams()

  if (!categoryId) {
    return <Navigate to="/projects" replace />
  }

  const category = getCategoryById(categoryId)

  if (!category) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="page-container projects-page">
      <h2 className="section-label">|{category.label}&gt;</h2>

      <div className="project-notes-grid">
        {category.projects.slice(0, 2).map((project) => (
          <ProjectStickyNote
            key={project.slug}
            to={`/projects/${category.id}/${project.slug}`}
            label={project.title}
          />
        ))}
      </div>

      <Link to="/projects" className="projects-back-link">
        ← Back to folders
      </Link>
    </div>
  )
}

export function ProjectsIndex() {
  return (
    <div className="page-container projects-page">
      <h2 className="section-label">|projects&gt;</h2>

      <div className="projects-folders-grid">
        {projectCategories.map(({ id, label, image }) => (
          <ProjectFolder
            key={id}
            to={`/projects/${id}`}
            label={label}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}
