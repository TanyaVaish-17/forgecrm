import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
      <div className="text-[#f59e0b] text-xl animate-pulse">Loading ForgeCRM...</div>
    </div>
  )

  return user ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute