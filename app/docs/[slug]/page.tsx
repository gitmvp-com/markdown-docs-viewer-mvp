import { getDocBySlug, getAllDocs } from '../../../lib/markdown'
import Sidebar from '../../../components/Sidebar'
import MarkdownContent from '../../../components/MarkdownContent'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const docs = await getAllDocs()
  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const docs = await getAllDocs()

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar docs={docs} currentSlug={slug} />
      <main style={{
        flex: 1,
        padding: '40px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <article>
          <h1 style={{ marginBottom: '24px' }}>{doc.title}</h1>
          <MarkdownContent content={doc.content} />
        </article>
      </main>
    </div>
  )
}
