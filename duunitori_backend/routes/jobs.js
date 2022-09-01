const express = require("express");
const router = express.Router();

//import models;
const Job = require("../models/job");

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort([["date_posted", -1]])
      .skip((req.query.pageNum - 1) * 10)
      .limit(25);

    if (jobs.length > 0) {
      return res.status(200).json(jobs);
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed");
  }
});
router.get("/latestEnding/asc", async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort([["date_ends", -1]])
      .skip((req.query.pageNum - 1) * 10)
      .limit(25);

    if (jobs.length > 0) {
      return res.status(200).json(jobs);
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed");
  }
});
router.get("/latestEnding/dsc", async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort([["date_ends", 1]])
      .skip((req.query.pageNum - 1) * 10)
      .limit(25);

    if (jobs.length > 0) {
      return res.status(200).json(jobs);
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed");
  }
});

// getting single job

router.get("/:job_id", async (req, res) => {
  Job.find({ id: req.params.job_id })
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      console.log(error);
      res.status(500).send("Failed");
    });
});

module.exports = router;