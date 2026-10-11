export type Project = {
  slug: string
  name: string
  title: string
  date: string
  summary: string
  blurb: string
  body: string
}

export type ProjectCategory = {
  id: string
  label: string
  image: string
  projects: Project[]
}


const projectBlurb =
  '[project description in progress]'

const projectBody = 'project description in progress'.trim()

const folderImages = {
  left: '/icons/folder-left.png',
  center: '/icons/folder-center.png',
  right: '/icons/folder-right.png',
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'quantum',
    label: 'Quantum Computing',
    image: folderImages.left,
    projects: [
      {
        slug: 'qbasic',
        name: 'QBasic',
        title: 'QBasic - a simple quantum programming language',
        date: 'October 2026',
        summary: 'Quantum programming language that allows for basic quantum circuit preparation and simulation',
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'quantum-random-walk',
        name: 'Quantum Random Walk',
        title: 'Quantum Random Walk Graph Algorithm',
        date: 'February 2026',
        summary: 'Purely Python implementation using NumPy of a graph search algorithm based off quantum random walks on a 1D ring of nodes',
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'q-volution',
        name: 'Q-Volution',
        title: 'Q-Volution Quantum Harmonic Oscillator Algorithm (5th Place Honorable Mention)',
        date: 'February 2026',
        summary: 'Implementation of the Tao Xin (2020) algorithm for solving linear differential equations to simulate quantum harmonic oscillator energy',
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'qaoa-maxcut',
        name: 'QAOA MaxCut',
        title:
          'Quantum Approximation Optimization Algorithm for Solving Weighted & Unweighted MaxCut',
        date: 'March 2026',
        summary: 'Pure Python implementation of the QAOA algorithm for solving the weighted & unweighted MaxCut problem with visualizations',
        blurb: projectBlurb,
        body: projectBody,
      },
    ],
  },
  {
    id: 'physics',
    label: 'Physics',
    image: folderImages.center,
    projects: [
      {
        slug: 'interferometry',
        name: 'Interferometry',
        title: 'Interferometry-Based Pressure Sensor for Rocket Engine Simulations (Markert Lab)',
        date: 'August - November 2025',
        summary: 'A fast interferometry-based pressure sensor for sensitive measurements of an oscillating thin metal, with applications for measuring soundwaves in rocket engines ',
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'superconductor',
        name: 'Superconductor',
        title: 'Handmade SuperConducting (YBa2Cu3O7) Sample (Markert Lab)',
        date: 'March - April 2025',
        summary: 'Engineered a dark coldbox to isolate PET experiments from temperature & light noise, enhancing result quality',
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'pet scanner',
        name: 'pet scanner',
        title: 'Positron Emission Tomography (PET) Coldbox (Lang Lab)',
        date: 'October 2024',
        summary: 'Engineered a dark coldbox to isolate PET experiments from temperature & light noise, enhancing result quality',
        blurb: projectBlurb,
        body: projectBody,
      }
    ]
  },
  {
    id: 'computer-science',
    label: 'Computer Science',
    image: folderImages.right,
    projects: [],
  },
  {
    id: 'misc',
    label: 'Misc.',
    image: folderImages.left,
    projects: [],
  },
]

export function getCategoryById(categoryId: string) {
  return projectCategories.find((category) => category.id === categoryId)
}

export function getProject(categoryId: string, projectSlug: string) {
  const category = getCategoryById(categoryId)
  return category?.projects.find((project) => project.slug === projectSlug)
}
