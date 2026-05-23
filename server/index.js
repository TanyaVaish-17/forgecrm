import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRoutes)

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: '🔥 ForgeCRM API is running',
    timestamp: new Date().toISOString()
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})