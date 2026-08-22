import { Link } from 'react-router-dom'
import './ProjectFolder.css'

type ProjectFolderProps = {
  to: string
  label: string
  image: string
}

export default function ProjectFolder({ to, label, image }: ProjectFolderProps) {
  return (
    <Link to={to} className="project-folder" aria-label={label}>
      <img src={image} alt="" className="project-folder-image" />
      <span className="project-folder-label">{label}</span>
    </Link>
  )
}
