import PhotoFrame from './PhotoFrame'
import './PortfolioInfo.css'

const details = [
  { label: 'Major', value: 'Physics Honors @ UT Austin' },
  { label: 'Minor', value: 'Computer Science' },
  { label: 'Interests', value: 'Quantum Computing' },
]

export default function PortfolioInfo() {
  return (
    <section className="portfolio-info">
      <div className="portfolio-info-content">
        <h2 className="section-label">|Portfolio Information&gt;</h2>
        <dl className="portfolio-info-list">
          {details.map(({ label, value }) => (
            <div key={label} className="portfolio-info-item">
              <dt>{label}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <PhotoFrame label="Profile photo placeholder" className="photo-frame-landing" />
    </section>
  )
}
