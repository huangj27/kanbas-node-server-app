import express from 'express';
import Hello from "./hello.js"
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);

app.listen(process.env.PORT || 4000);