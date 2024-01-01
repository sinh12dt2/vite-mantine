import { Link } from 'react-router-dom'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle'
import { Welcome } from '@/components/Welcome/Welcome'

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Link to="/sample">Sample</Link>
    </>
  )
}
