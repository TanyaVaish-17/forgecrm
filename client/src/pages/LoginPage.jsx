import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginAPI } from '../api/authApi'
import { motion } from 'framer-motion'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await loginAPI({ email, password })
      login(data)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-4">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xl">F</span>
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              Forge<span className="text-[#f59e0b]">CRM</span>
            </span>
          </div>
          <p className="text-[#9ca3af] text-sm mt-2">
            Sales Intelligence for Manufacturing
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-1">Welcome back</h2>
          <p className="text-[#9ca3af] text-sm mb-6">Sign in to your workspace</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-[#9ca3af] mb-1.5 block">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@forgecrm.com"
                required
                className="w-full bg-[#0a0f1e] border border-[#1f2937] text-white placeholder-[#4b5563] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-[#9ca3af] mb-1.5 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[#0a0f1e] border border-[#1f2937] text-white placeholder-[#4b5563] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f59e0b] hover:bg-[#d97706] disabled:opacity-50 text-black font-bold py-3 rounded-lg transition-colors text-sm mt-2"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#1f2937]">
            <p className="text-[#4b5563] text-xs text-center">
              Demo credentials — Admin: admin@forgecrm.com / admin123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage