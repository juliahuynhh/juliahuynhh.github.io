import { Link } from 'react-router-dom'
import './ProjectStickyNote.css'

type ProjectStickyNoteProps = {
  to: string
  label: string
}

export default function ProjectStickyNote({ to, label }: ProjectStickyNoteProps) {
  return (
    <Link to={to} className="project-sticky-note" aria-label={label}>
      <span className="project-sticky-note-label">{label}</span>
    </Link>
  )
}
