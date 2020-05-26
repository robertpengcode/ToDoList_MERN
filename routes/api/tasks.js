const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Task = require("../../models/Task");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500);
    next(err);
  }
});

router.post(
  "/",
  [
    check("name", "Task name is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //console.log(req.body);
    const {
      name,
      category,
      description,
      important,
      dueDate,
      completed
    } = req.body;
    try {
      const task = new Task({
        name,
        category,
        description,
        important,
        dueDate,
        completed
      });
      //console.log(task);
      await task.save();
      res.send(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

router.put("/:id/done", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          completed: true
        }
      },
      { new: true }
    );
    return res.send(updateTask);
  } catch (err) {
    console.log("err put");
  }
});

router.put("/:id/undo", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          completed: false
        }
      },
      { new: true }
    );
    return res.send(updateTask);
  } catch (err) {
    console.log("err put");
  }
});

router.put("/:id/save", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          history: true
        }
      },
      { new: true }
    );
    return res.send(updateTask);
  } catch (err) {
    console.log("err put");
  }
});


router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ _id: id });
    res.json({ msg: "deleted!" });
  } catch (err) {
    console.log("err delte");
    //next(err)
  }
});
// sendStatus(204).
module.exports = router;
