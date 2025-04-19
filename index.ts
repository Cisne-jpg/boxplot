import express from "express";
import boxplotRoutes from "./src/routes/boxplot";

const app = express();
app.use(express.json());

app.use("/api/boxplot", boxplotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
