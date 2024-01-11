import { Outlet } from 'react-router-dom'
import { NavbarNested } from '@/components/organisms/Navbar'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export const DefaultLayout = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <NavbarNested />
        <div className="grow p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  )
}
