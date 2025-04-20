import SideMenu from './components/SideMenu'
import Dashboard from './pages/Dashboard'

const App = () => {

  return (
    <main className='bg-bg-primary flex min-h-screen h-auto font-primary text-text-primary'>
      <SideMenu/>
      <Dashboard/>
    </main>
  )
}

export default App


