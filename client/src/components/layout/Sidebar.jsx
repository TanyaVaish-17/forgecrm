import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Kanban,
  Users,
  Trophy,
  FileText,
  Bell,
  Settings,
  LogOut,
  Flame
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Lead Pipeline', icon: Kanban, path: '/pipeline' },
  { label: 'Clients', icon: Users, path: '/clients' },
  { label: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
  { label: 'Quotations', icon: FileText, path: '/quotations' },
  { label: 'Notifications', icon: Bell, path: '/notifications' },
  { label: 'Settings', icon: Settings, path: '/settings' },
]

const Sidebar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#111827] border-r border-[#1f2937] flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[#1f2937]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#f59e0b] rounded-lg flex items-center justify-center">
            <Flame size={16} className="text-black" />
          </div>
          <span className="text-lg font-black text-white tracking-tight">
            Forge<span className="text-[#f59e0b]">CRM</span>
          </span>
        </div>
        <p className="text-[#4b5563] text-xs mt-1 ml-10">Manufacturing Sales</p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
              ${isActive
                ? 'bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20'
                : 'text-[#9ca3af] hover:text-white hover:bg-[#1f2937]'
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="px-3 py-4 border-t border-[#1f2937]">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#0a0f1e] mb-2">
          <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <p className="text-white text-sm font-medium truncate">{user?.name}</p>
            <p className="text-[#4b5563] text-xs capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9ca3af] hover:text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar