import Link from 'next/link'

interface Doc {
  slug: string
  title: string
  order: number
}

interface SidebarProps {
  docs: Doc[]
  currentSlug?: string
}

export default function Sidebar({ docs, currentSlug }: SidebarProps) {
  return (
    <aside style={{
      width: '280px',
      borderRight: '1px solid #eee',
      padding: '40px 20px',
      backgroundColor: '#fafafa',
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto'
    }}>
      <div style={{ marginBottom: '32px' }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          textDecoration: 'none'
        }}>
          📚 Documentation
        </Link>
      </div>
      
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {docs.map((doc) => (
            <li key={doc.slug} style={{ marginBottom: '8px' }}>
              <Link
                href={`/docs/${doc.slug}`}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  color: currentSlug === doc.slug ? '#0070f3' : '#666',
                  backgroundColor: currentSlug === doc.slug ? '#e3f2fd' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: currentSlug === doc.slug ? '600' : '400',
                  transition: 'all 0.2s'
                }}
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
