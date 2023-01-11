/* eslint-disable no-undef */
import express from "express";
import { exec } from "child_process";
import cron from "node-cron";
import * as fs from "fs-extra";

const app = express();

fs.copy("dist", "target", { overwrite: true });
app.use(express.static("./target"));

cron.schedule("*/10 * * * *", () => {
  console.log("rebuilding");
  exec("yarn build");
  fs.copy("dist", "target", { overwrite: true });
});

const port = process.env.SERVER_PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
