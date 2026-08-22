import { projectCategories } from '../data/projects'
import ProjectFolder from './ProjectFolder'
import './ProjectsSection.css'

const landingCategories = projectCategories.filter((category) => category.id !== 'misc')

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-label">|major projects&gt;</h2>
      <div className="projects-grid">
        {landingCategories.map(({ id, label, image }) => (
          <ProjectFolder
            key={id}
            to={`/projects/${id}`}
            label={label}
            image={image}
          />
        ))}
      </div>
    </section>
  )
}
