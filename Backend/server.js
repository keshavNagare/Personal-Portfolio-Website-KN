import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import saveContactRoute from './routes/Savecontact.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API Route
app.use("/api", saveContactRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
