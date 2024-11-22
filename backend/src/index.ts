import { connectDB } from "./db";
import { server } from "./server";
import { config } from "dotenv";

config();

Promise.all([connectDB()])
  .then(() => {
    console.log("Server connected to Database successfully");
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server started on http://localhost:${process.env.PORT}`);
    });
  });
