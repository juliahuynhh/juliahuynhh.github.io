import './Home.css'

const experiences = [
  {
    role: 'UT Austin Computer Science - Data Structures & Algorithms Teaching Assistant',
    dates: '(August 2026 - Present)',
  },
  {
    role: 'UT Austin Quantum Collective - Director',
    dates: '(January 2026 - Present)',
  },
  {
    role: 'MIT Beaverworks Summer Institute Quantum Software - Teaching Assistant',
    dates: '(June - August 2026)',
  },
]

const featuredProjects = [
  {
    title: 'QBasic - A simple quantum programming language',
    summary:
      'Quantum programming language that allows for basic single and multi-qubit operations on quantum circuits and simulation with visualizations',
  },
  {
    title: 'Quantum Random Walk Graph Algorithm',
    summary:
      'Purely Python implementation using NumPy of a graph search algorithm based off quantum random walks on a 1D ring of nodes ',
  },
]

export default function Home() {
  return (
    <div className="page-container home-page">
      <div className="home-intro-block">
      <h1 className="home-title">Hi, I’m Julia Huynh.</h1>

      <img
        src="/icons/portrait.png"
        alt=""
        className="home-portrait home-portrait-light"
      />
      <img
        src="/icons/portrait-dark.png"
        alt=""
        className="home-portrait home-portrait-dark"
      />

      <p className="home-intro">
        <span className="home-intro-lead">
          I’m a junior Physics major, minoring in Computer Science at UT Austin.
        </span>{' '}
        My interests are in quantum software (compilers, programming languages,
        quantum machine learning, etc.). Outside of school, I’m trying out new
        cafes, baking, or listening to a podcast.
      </p>
      </div>

      <section className="home-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="home-heading">
          | Experience &gt;
        </h2>
        <ul className="home-list">
          {experiences.map(({ role, dates }) => (
            <li key={role} className="home-experience-item">
              <span className="home-item-label">
                <span className="home-diamond" aria-hidden="true">
                  ⟡
                </span>
                <span>{role}</span>
              </span>
              <span className="home-experience-dates">{dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="home-heading">
          | Featured Projects &gt;
        </h2>
        <ul className="home-list">
          {featuredProjects.map(({ title, summary }) => (
            <li key={title} className="home-project">
              <p className="home-project-title">
                <span className="home-diamond" aria-hidden="true">
                  ⟡
                </span>
                <span>{title}</span>
              </p>
              <p className="home-project-summary">{summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
