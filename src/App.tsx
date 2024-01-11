import '@mantine/core/styles.css'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Suspense } from 'react'
import { Loading } from '@/components/atoms/Loading'
import { Router } from './Router'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </MantineProvider>
  )
}
