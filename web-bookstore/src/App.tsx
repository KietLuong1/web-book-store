import { SidebarCmp } from './components/Sidebar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Service from './pages/Import_Export'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

// Create a query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <SidebarCmp />
          <Routes>
            {/* Redirect to dashboard */}
            <Route path='/' element={<Navigate to='/dashboard' replace />} />

            {/* Menu item routes */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/service' element={<Service />} />
            <Route path='/transaction' element={<Transaction />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
