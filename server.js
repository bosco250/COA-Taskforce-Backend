import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/database/connectDb.js";
import { userRoute } from "./src/router/authRoute.js";
import transactionRouter from "./src/router/transactionRouter.js";
import budgetRouter from "./src/router/budgetRouter.js";
import cors from 'cors'

dotenv.config();
const app = express();

await connectDb();
app.use(express.json());
app.use(cors())


  app.use('/api',userRoute)
  app.use('/api',transactionRouter)
  app.use('/api',budgetRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
