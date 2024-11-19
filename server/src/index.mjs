import express from "express";
import cors from "cors";
import routes from "./routes/index.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
});
