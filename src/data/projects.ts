export type Project = {
  slug: string
  title: string
  date: string
  summary: string
  body: string
}

export type ProjectCategory = {
  id: string
  label: string
  projects: Project[]
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'quantum',
    label: 'Quantum',
    projects: [
      {
        slug: 'quantum-simulator',
        title: 'Quantum Simulator',
        date: 'Spring 2025',
        summary: 'A basic quantum circuit simulator built for coursework.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
      {
        slug: 'qubit-visualizer',
        title: 'Qubit Visualizer',
        date: 'Fall 2024',
        summary: 'Visualizing qubit states on the Bloch sphere.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
    ],
  },
  {
    id: 'physics',
    label: 'Physics',
    projects: [
      {
        slug: 'lab-data-analysis',
        title: 'Lab Data Analysis',
        date: 'Spring 2025',
        summary: 'Automating analysis for physics lab experiments.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
      {
        slug: 'mechanics-simulation',
        title: 'Mechanics Simulation',
        date: 'Fall 2024',
        summary: 'Simulating classical mechanics systems.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
    ],
  },
  {
    id: 'computer-science',
    label: 'Computer Science',
    projects: [
      {
        slug: 'portfolio-website',
        title: 'Portfolio Website',
        date: '2025',
        summary: 'This personal portfolio built with React and TypeScript.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
      {
        slug: 'data-structures-project',
        title: 'Data Structures Project',
        date: 'Fall 2024',
        summary: 'Course project implementing core data structures.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
    ],
  },
  {
    id: 'misc',
    label: 'MISC',
    projects: [
      {
        slug: 'creative-writing',
        title: 'Creative Writing',
        date: '2024',
        summary: 'A collection of personal writing samples.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
      {
        slug: 'misc-project-two',
        title: 'Misc Project Two',
        date: '2023',
        summary: 'Placeholder for a miscellaneous project.',
        body: 'blahhhhhh blahhhhhhhhhhhh with images blahhhhhhhhhh',
      },
    ],
  },
]

export function getCategoryById(categoryId: string) {
  return projectCategories.find((category) => category.id === categoryId)
}

export function getProject(categoryId: string, projectSlug: string) {
  const category = getCategoryById(categoryId)
  return category?.projects.find((project) => project.slug === projectSlug)
}

export const defaultCategoryId = projectCategories[0].id
