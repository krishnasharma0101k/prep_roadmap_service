
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connectDB } from "./config/db.js"
import roadmapRouter from "./routes/roadmap.route.js"



dotenv.config()



const app = express()


app.use(express.json())



const port = process.env.PORT || 5004

app.use("/", roadmapRouter)





app.listen(port, () => {
    console.log(`Roadmap started on ${port}`);
    
    connectDB()
})
