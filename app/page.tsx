import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import { getAllDocs } from '../lib/markdown'

export default async function Home() {
  const docs = await getAllDocs()

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar docs={docs} />
      <main style={{
        flex: 1,
        padding: '40px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1>Welcome to Documentation Viewer</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
          This is a simple MVP documentation viewer inspired by OutSystems docs-odc.
        </p>
        
        <div style={{ marginTop: '40px' }}>
          <h2>Getting Started</h2>
          <p>Select a documentation page from the sidebar to begin reading, or explore the sample documentation:</p>
          
          <ul style={{ marginTop: '20px' }}>
            {docs.slice(0, 5).map((doc) => (
              <li key={doc.slug} style={{ marginBottom: '12px' }}>
                <Link href={`/docs/${doc.slug}`} style={{
                  fontSize: '16px',
                  color: '#0070f3',
                  textDecoration: 'none'
                }}>
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ 
          marginTop: '60px', 
          padding: '20px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px' 
        }}>
          <h3>Features</h3>
          <ul>
            <li>📝 Markdown rendering with GitHub Flavored Markdown</li>
            <li>📚 Sidebar navigation</li>
            <li>🎨 Clean, readable interface</li>
            <li>⚡ Fast and responsive</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
