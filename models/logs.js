const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: { type: Boolean, default: true },
});

const logs = mongoose.model("logs", logsSchema);

module.exports = logs;