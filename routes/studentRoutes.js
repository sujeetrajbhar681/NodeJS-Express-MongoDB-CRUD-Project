const express = require("express");

const router = express.Router();

const studentController =
require("../controllers/studentController");

router.get(
  "/show",
  studentController.getStudents
);

router.post(
  "/add",
  studentController.addStudent
);

router.patch(
  "/update/:id",
  studentController.updateStudent
);

router.delete(
  "/delete/:id",
  studentController.deleteStudent
);

module.exports = router;