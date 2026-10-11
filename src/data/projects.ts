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

const longSummary =
  'short summary of the project in 1/2 lines. bflegosgvna ifhosifnsa g fisoffdslfnsdnjnosdfnidsifnfoisfnodfniddsfninofifuonfinfidfnsofnadfnonminsdfnsdfndifdfnfdndinidi fnsdifnosbdsuafsfnbsbdsuibfeh'

const shortSummary =
  'short summary of the project in 1/2 lines. bflegosgvna ifhosifnsa g fisoffdslfnsdnjnosdfnidsifnfoisfnodfniddsfninofifuonfinfidfnsofnad'

const projectBlurb =
  '[insert project description insert project description insert project description]'

const projectBody = 'insert project description '.repeat(42).trim()

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
        date: '',
        summary: longSummary,
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'quantum-random-walk',
        name: 'Quantum Random Walk',
        title: 'Quantum Random Walk Graph Algorithm',
        date: '',
        summary: shortSummary,
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'q-volution',
        name: 'Q-Volution',
        title: 'Q-Volution Quantum Harmonic Oscillator Algorithm (5th Place Honorable Mention)',
        date: '',
        summary: longSummary,
        blurb: projectBlurb,
        body: projectBody,
      },
      {
        slug: 'qaoa-maxcut',
        name: 'QAOA MaxCut',
        title:
          'Quantum Approximation Optimization Algorithm for Solving Weighted & Unweighted MaxCut',
        date: '',
        summary: shortSummary,
        blurb: projectBlurb,
        body: projectBody,
      },
    ],
  },
  {
    id: 'physics',
    label: 'Physics',
    image: folderImages.center,
    projects: [],
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
