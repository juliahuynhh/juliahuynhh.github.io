import { Link, Navigate, useParams } from 'react-router-dom'
import { getCategoryById } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { categoryId, projectSlug } = useParams()
  const category = categoryId ? getCategoryById(categoryId) : undefined
  const project = category?.projects.find((item) => item.slug === projectSlug)

  if (!category || !project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="page-container project-detail-page">
      <h1 className="project-detail-title">
        &lt; {project.name} | {category.label} &gt;
      </h1>

      <p className="project-detail-blurb">{project.blurb}</p>
      <p className="project-detail-body">{project.body}</p>

      <Link to={`/projects/${category.id}`} className="project-detail-back-link">
        Back|{project.name}&gt;
      </Link>
    </div>
  )
}
