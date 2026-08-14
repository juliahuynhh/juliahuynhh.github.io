import { Link } from 'react-router-dom'
import { projectCategories } from '../data/projects'
import './FolderTabs.css'

type FolderTabsProps = {
  activeCategoryId: string
}

export default function FolderTabs({ activeCategoryId }: FolderTabsProps) {
  return (
    <div className="folder-tabs" role="tablist" aria-label="Project categories">
      {projectCategories.map(({ id, label }) => {
        const isActive = id === activeCategoryId

        return (
          <Link
            key={id}
            to={`/projects/${id}`}
            role="tab"
            aria-selected={isActive}
            className={`folder-tab${isActive ? ' active' : ''}`}
          >
            <img
              src="/icons/folder-tab-other.png"
              alt=""
              className="folder-tab-bg"
              aria-hidden="true"
            />
            <span className="folder-tab-label">{label}</span>
          </Link>
        )
      })}
    </div>
  )
}
