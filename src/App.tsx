import SideMenu from './components/SideMenu'
import Dashboard from './pages/Dashboard'

const App = () => {

  return (
    <main className='bg-bg-primary flex h-screen font-primary text-text-primary'>
      <SideMenu/>
      <Dashboard/>
    </main>
  )
}

export default App


