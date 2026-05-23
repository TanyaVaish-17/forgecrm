import { motion } from 'framer-motion'
import {
  TrendingUp, Users, Target, Award,
  ArrowUpRight, ArrowDownRight, Clock, Zap
} from 'lucide-react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import MainLayout from '../components/layout/MainLayout'

const revenueData = [
  { month: 'Jan', target: 400000, achieved: 320000 },
  { month: 'Feb', target: 420000, achieved: 390000 },
  { month: 'Mar', target: 450000, achieved: 470000 },
  { month: 'Apr', target: 480000, achieved: 440000 },
  { month: 'May', target: 500000, achieved: 520000 },
  { month: 'Jun', target: 520000, achieved: 490000 },
  { month: 'Jul', target: 550000, achieved: 580000 },
]

const productData = [
  { name: 'CNC Machines', value: 35, color: '#f59e0b' },
  { name: 'Industrial Parts', value: 28, color: '#3b82f6' },
  { name: 'Raw Materials', value: 22, color: '#10b981' },
  { name: 'Assembly Units', value: 15, color: '#8b5cf6' },
]

const funnelData = [
  { stage: 'Cold Prospects', count: 120, color: '#4b5563' },
  { stage: 'Contacted', count: 85, color: '#3b82f6' },
  { stage: 'Demo Done', count: 52, color: '#8b5cf6' },
  { stage: 'Quotation Sent', count: 34, color: '#f59e0b' },
  { stage: 'Negotiation', count: 18, color: '#f97316' },
  { stage: 'Closed Won', count: 12, color: '#10b981' },
]

const recentActivity = [
  { name: 'Rajesh Kumar', action: 'Closed deal with Tata Motors', time: '2 mins ago', type: 'won' },
  { name: 'Priya Sharma', action: 'Sent quotation to Mahindra Ltd', time: '15 mins ago', type: 'quote' },
  { name: 'Amit Singh', action: 'Scheduled demo with Bajaj Auto', time: '1 hour ago', type: 'demo' },
  { name: 'Neha Verma', action: 'Added new lead: Ashok Leyland', time: '2 hours ago', type: 'lead' },
  { name: 'Vikram Patel', action: 'Follow-up call with Hero MotoCorp', time: '3 hours ago', type: 'call' },
]

const kpiCards = [
  {
    title: 'Total Revenue',
    value: '₹52.4L',
    change: '+12.5%',
    positive: true,
    icon: TrendingUp,
    color: '#f59e0b',
    bg: '#f59e0b15',
    sub: 'vs last month'
  },
  {
    title: 'Active Leads',
    value: '284',
    change: '+8.2%',
    positive: true,
    icon: Target,
    color: '#3b82f6',
    bg: '#3b82f615',
    sub: 'across all stages'
  },
  {
    title: 'Team Members',
    value: '18',
    change: '+2',
    positive: true,
    icon: Users,
    color: '#10b981',
    bg: '#10b98115',
    sub: 'active BDAs'
  },
  {
    title: 'Avg Deal Time',
    value: '14d',
    change: '-2.3d',
    positive: true,
    icon: Clock,
    color: '#8b5cf6',
    bg: '#8b5cf615',
    sub: 'faster than last month'
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-3 text-sm">
        <p className="text-[#9ca3af] mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }} className="font-semibold">
            {p.name}: ₹{(p.value / 100000).toFixed(1)}L
          </p>
        ))}
      </div>
    )
  }
  return null
}

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="space-y-6">

        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#f59e0b]/20 to-[#111827] border border-[#f59e0b]/20 rounded-2xl p-5 flex items-center justify-between"
        >
          <div>
            <h2 className="text-white font-bold text-lg">Good morning! 👋</h2>
            <p className="text-[#9ca3af] text-sm mt-0.5">
              Here's what's happening with ForgeCRM today.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 px-4 py-2 rounded-lg">
            <Zap size={16} className="text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-semibold">12 follow-ups due today</span>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {kpiCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111827] border border-[#1f2937] rounded-xl p-5 hover:border-[#374151] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: card.bg }}
                >
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${card.positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {card.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {card.change}
                </div>
              </div>
              <p className="text-[#9ca3af] text-xs mb-1">{card.title}</p>
              <p className="text-white text-2xl font-black">{card.value}</p>
              <p className="text-[#4b5563] text-xs mt-1">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="xl:col-span-2 bg-[#111827] border border-[#1f2937] rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-white font-bold">Revenue Overview</h3>
                <p className="text-[#4b5563] text-xs mt-0.5">Target vs Achieved (2025)</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="text-[#9ca3af]">Achieved</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#374151]" />
                  <span className="text-[#9ca3af]">Target</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="achieved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="month" stroke="#4b5563" tick={{ fontSize: 12 }} />
                <YAxis stroke="#4b5563" tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${v / 100000}L`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="target" stroke="#374151" fill="none" strokeDasharray="4 4" name="Target" />
                <Area type="monotone" dataKey="achieved" stroke="#f59e0b" fill="url(#achieved)" strokeWidth={2} name="Achieved" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Product Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-5"
          >
            <h3 className="text-white font-bold mb-1">Product Mix</h3>
            <p className="text-[#4b5563] text-xs mb-4">Sales by product category</p>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={productData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                  {productData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {productData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[#9ca3af]">{item.name}</span>
                  </div>
                  <span className="text-white font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

          {/* Lead Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-5"
          >
            <h3 className="text-white font-bold mb-1">Lead Funnel</h3>
            <p className="text-[#4b5563] text-xs mb-4">Conversion across pipeline stages</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={funnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" horizontal={false} />
                <XAxis type="number" stroke="#4b5563" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="stage" stroke="#4b5563" tick={{ fontSize: 11 }} width={95} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {funnelData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-5"
          >
            <h3 className="text-white font-bold mb-1">Recent Activity</h3>
            <p className="text-[#4b5563] text-xs mb-4">Latest actions from your team</p>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0f1e] border border-[#1f2937]">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-black font-bold text-xs flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold">{item.name}</p>
                    <p className="text-[#9ca3af] text-xs truncate">{item.action}</p>
                  </div>
                  <span className="text-[#4b5563] text-xs whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </MainLayout>
  )
}

export default DashboardPage