import PhotoFrame from '../components/PhotoFrame'
import './About.css'

const sections = [
  {
    label: '|about me>',
    content: 'small paragraph about why i do what i do',
  },
  {
    label: '|experience>',
    content: 'blah blah blah blah',
  },
  {
    label: '|extracurriculars>',
    content: 'blah blah blah blah',
  },
  {
    label: '|skills>',
    content: 'blah blah blah blah',
  },
]

export default function About() {
  return (
    <div className="page-container about-page">
      <div className="about-layout">
        <div className="about-content">
          {sections.map(({ label, content }) => (
            <section key={label} className="about-section">
              <h2 className="section-label">{label}</h2>
              <p className="about-section-text">{content}</p>
            </section>
          ))}
        </div>

        <aside className="about-photo">
          <PhotoFrame
            label="About page photo placeholder"
            className="photo-frame-about"
          />
        </aside>
      </div>
    </div>
  )
}
