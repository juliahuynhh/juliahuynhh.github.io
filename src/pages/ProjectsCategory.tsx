import { Navigate, useParams } from 'react-router-dom'
import FolderTabs from '../components/FolderTabs'
import ProjectStickyNote from '../components/ProjectStickyNote'
import { defaultCategoryId, getCategoryById } from '../data/projects'
import './ProjectsCategory.css'

export default function ProjectsCategory() {
  const { categoryId } = useParams()

  if (!categoryId) {
    return <Navigate to={`/projects/${defaultCategoryId}`} replace />
  }

  const category = getCategoryById(categoryId)

  if (!category) {
    return <Navigate to={`/projects/${defaultCategoryId}`} replace />
  }

  return (
    <div className="page-container projects-page">
      <div className="folder-shell">
        <FolderTabs activeCategoryId={category.id} />

        <div className="folder-body">
          <div className="folder-body-inner">
            <h2 className="section-label folder-body-label">|projects&gt;</h2>

            <div className="project-notes-grid">
              {category.projects.map((project) => (
                <ProjectStickyNote
                  key={project.slug}
                  to={`/projects/${category.id}/${project.slug}`}
                  label={project.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsIndex() {
  return <Navigate to={`/projects/${defaultCategoryId}`} replace />
}
