import { Link } from 'react-router-dom'
import './PlaceholderPage.css'

type PlaceholderPageProps = {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="page-container placeholder-page">
      <h1>{title}</h1>
      <p>Coming soon.</p>
      <Link to="/" className="placeholder-back-link">
        ← Back to home
      </Link>
    </div>
  )
}
