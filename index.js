process.env["NTBA_FIX_350"] = 1;

import connectDB from "./config/db.js";

// Connect Databases
connectDB();

// Express setup
import express from 'express'

const app = express();
const port = process.env.PORT || 3333;

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Commands
import "./commands/channel.js";
import "./commands/utils.js";
import "./commands/callbacks.js";

import "./helper/addBotCommand.js";
