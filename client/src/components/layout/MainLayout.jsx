import Sidebar from './Sidebar'
import Topbar from './Topbar'

const MainLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Topbar title={title} />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout