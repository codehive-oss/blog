/* eslint-disable no-undef */
import express from "express";
import { exec } from "child_process";
import cron from "node-cron";
import * as fse from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

fse.copy("dist", "target", { overwrite: true });

app.use(express.static("./target"));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "/../dist/404.html"));
});

cron.schedule("*/10 * * * *", () => {
  console.log("rebuilding");
  exec("yarn build");
  fse.copy("dist", "target", { overwrite: true });
});

const port = process.env.SERVER_PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
