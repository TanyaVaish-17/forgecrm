import { Bell, Search } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Topbar = ({ title }) => {
  const { user } = useAuth()

  return (
    <div className="h-16 bg-[#111827] border-b border-[#1f2937] flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Page Title */}
      <h1 className="text-white font-bold text-lg">{title}</h1>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#0a0f1e] border border-[#1f2937] text-white placeholder-[#4b5563] rounded-lg pl-9 pr-4 py-2 text-sm w-48 focus:outline-none focus:border-[#f59e0b] transition-colors"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-lg bg-[#0a0f1e] border border-[#1f2937] flex items-center justify-center text-[#9ca3af] hover:text-[#f59e0b] hover:border-[#f59e0b]/30 transition-all">
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f59e0b] rounded-full text-black text-[10px] font-bold flex items-center justify-center">
            3
          </span>
        </button>

        {/* Role Badge */}
        <div className="px-3 py-1.5 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20">
          <span className="text-[#f59e0b] text-xs font-semibold capitalize">{user?.role}</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar