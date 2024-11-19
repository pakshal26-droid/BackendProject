import { configDotenv } from "dotenv";
import connectDB from "./db/index.js"; //importing connecting mongoDb  function
import { app } from "./app.js";

configDotenv({ path: "./env" }); //To load env files before anything and make it available to all files
connectDB() //returns a promise so using than and catch
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED", error);
  });
