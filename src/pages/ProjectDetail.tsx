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
      <article className="notebook-paper">
        <img
          src="/icons/paper.png"
          alt=""
          className="notebook-paper-bg"
          aria-hidden="true"
        />

        <div className="notebook-content">
          <h1 className="notebook-title">|{project.title.toLowerCase()}&gt;</h1>

          <p className="notebook-field">
            <span className="notebook-field-label">date:</span> {project.date}
          </p>

          <p className="notebook-field">
            <span className="notebook-field-label">summary:</span> {project.summary}
          </p>

          <p className="notebook-body">{project.body}</p>

          <Link to={`/projects/${categoryId}`} className="notebook-back-link">
            ← Back to {categoryId.replace(/-/g, ' ')} projects
          </Link>
        </div>
      </article>
    </div>
  )
}
