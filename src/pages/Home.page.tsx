import { Link } from 'react-router-dom'
import { Group } from '@mantine/core'
import { ColorSchemeToggle } from '@/components/molecules/ColorSchemeToggle'
import { Welcome } from '@/components/molecules/Welcome'

export default function HomePage() {
  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <>
      <h1 className="text-3xl font-bold text-red-700 underline">Simple React Typescript Tailwind Sample</h1>
      <Welcome />
      <ColorSchemeToggle />
      <Group>
        <Link to="/sample">Sample</Link>
        <Link to="/sample2">Sample222222</Link>
        <Link to="/settings">Setting</Link>
      </Group>

      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="flex py-4">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
