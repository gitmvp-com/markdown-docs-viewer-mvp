import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export interface Doc {
  slug: string
  title: string
  content: string
  order: number
}

export async function getAllDocs(): Promise<Doc[]> {
  // Check if docs directory exists
  if (!fs.existsSync(docsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(docsDirectory)
  const allDocs = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(docsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        content,
        order: data.order || 999,
      }
    })

  return allDocs.sort((a, b) => a.order - b.order)
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      content,
      order: data.order || 999,
    }
  } catch (error) {
    return null
  }
}
