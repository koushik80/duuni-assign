const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  id: {
    type: String,
  },
  heading: {
    type: String,
  },
  date_posted: {
    type: String,
  },
  date_ends: {
    type: String,
  },
  municipality_name: {
    type: String,
  },
  company_name: {
    type: String,
  },
  descr: {
    type: String,
  },
  salary: {
    value_period: {
      type: String,
    },
    value_min: {
      type: Number,
    },
    value_max: {
      type: Number,
    },
  },
});

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;