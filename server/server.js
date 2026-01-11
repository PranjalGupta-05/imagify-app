import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/UserRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
const allowedOrigins = [
  'http://localhost:5173',
  'https://imagify-frontend-web-gdhfbpehdvf3deas.centralindia-01.azurewebsites.net'
];

app.use(cors({
  origin: true, 
  credentials: true
}));
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res)=> res.send("API Working"))

app.listen(PORT, ()=> console.log('Server running on port ' + PORT));
