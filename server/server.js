import express from "express";
import { exec } from "child_process";
import cron from "node-cron";

const app = express();

app.use(express.static("./dist"));

cron.schedule("*/10 * * * *", () => {
  console.log("rebuilding");
  exec("yarn build");
});

const port = process.env.SERVER_PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
