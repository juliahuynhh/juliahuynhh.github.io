import { Link, Navigate, useParams } from 'react-router-dom'
import { getCategoryById, projectCategories } from '../data/projects'
import './ProjectsCategory.css'

function ProjectsView({ categoryId }: { categoryId: string }) {
  const category = getCategoryById(categoryId)

  if (!category) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="page-container projects-page">
      <p className="topics-line">
        <span>Topics = {'{ '}</span>
        {projectCategories.map((topic, index) => (
          <span key={topic.id}>
            <Link
              to={`/projects/${topic.id}`}
              className={`topic-link${topic.id === category.id ? ' active' : ''}`}
              aria-current={topic.id === category.id ? 'page' : undefined}
            >
              | {topic.label} &gt;
            </Link>
            {index < projectCategories.length - 1 ? ', ' : ' '}
          </span>
        ))}
        <span>{'}'}</span>
      </p>

      <h2 className="projects-heading">&lt; {category.label} | Projects &gt;</h2>

      <ul className="projects-list">
        {category.projects.map((project) => (
          <li key={project.slug} className="projects-item">
            <Link
              to={`/projects/${category.id}/${project.slug}`}
              className="projects-item-link"
            >
              <p className="projects-item-title">
                <span className="projects-diamond" aria-hidden="true">
                  ⟡
                </span>
                <span>{project.title}</span>
              </p>
              <p className="projects-item-summary">{project.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProjectsCategory() {
  const { categoryId } = useParams()

  if (!categoryId) {
    return <Navigate to="/projects" replace />
  }

  return <ProjectsView categoryId={categoryId} />
}

export function ProjectsIndex() {
  return <ProjectsView categoryId="quantum" />
}
