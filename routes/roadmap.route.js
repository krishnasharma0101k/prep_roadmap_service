import express from "express"
import { generateRoadmap, getAllRoadmap, getRoadmapId } from "../controller/roadmap.controller.js"

const roadmapRouter = express.Router()

roadmapRouter.post("/generate", generateRoadmap)
roadmapRouter.get("/all", getAllRoadmap)
roadmapRouter.get("/:id", getRoadmapId)

export default roadmapRouter