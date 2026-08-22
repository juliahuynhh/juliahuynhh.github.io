import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { categoryId, projectSlug } = useParams()

  if (!categoryId || !projectSlug) {
    return <Navigate to="/projects" replace />
  }

  const project = getProject(categoryId, projectSlug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="page-container project-detail-page">
      <article className="project-detail">
        <h1 className="project-detail-title">|{project.title.toLowerCase()}&gt;</h1>

        <p className="project-detail-field">
          <span className="project-detail-field-label">date:</span> {project.date}
        </p>

        <p className="project-detail-field">
          <span className="project-detail-field-label">summary:</span> {project.summary}
        </p>

        <p className="project-detail-body">{project.body}</p>

        <Link to={`/projects/${categoryId}`} className="project-detail-back-link">
          ← Back to {categoryId.replace(/-/g, ' ')} projects
        </Link>
      </article>
    </div>
  )
}
