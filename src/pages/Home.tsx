import Hero from '../components/Hero'
import PortfolioInfo from '../components/PortfolioInfo'
import ProjectsSection from '../components/ProjectsSection'
import './Home.css'

export default function Home() {
  return (
    <div className="page-container home-page">
      <Hero />
      <PortfolioInfo />
      <ProjectsSection />
    </div>
  )
}
