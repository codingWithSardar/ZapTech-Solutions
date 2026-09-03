import express from "express";
import cors from "cors";
import "dotenv/config"
import { projectRouter } from "./routes/projectRoutes.js";
import { technologyRouter } from "./routes/technologyRoutes.js";
import { clientRequirementRouter } from "./routes/clientRequirementRouter.js";
import { connectDB } from "./config/db.js";
import { connectCloudinary } from "./config/cloudinary.js";
import { adminRouter } from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        credentials: true,
    })
);

app.use(cookieParser())

app.use('/api/projects' , projectRouter)
app.use("/api/technology", technologyRouter);
app.use("/api/client", clientRequirementRouter);

app.use("/api/admin", adminRouter);

connectCloudinary()


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
})
