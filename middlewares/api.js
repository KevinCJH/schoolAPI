const express = require("express");
const connection = require("../helpers/connection");
const valuesForInsert = require("../helpers/valuesForInsert");
const valuesForSelect = require("../helpers/valuesForSelect");
const valuesForUpdate = require("../helpers/valuesForUpdate");
const arrayHelper = require("../helpers/array");
const stringHelper = require("../helpers/string");
const error = require("../helpers/error");

const router = express.Router();
const dbConfig = require("../databaseConfig");

const insert = require("../sqlCRUD/insert");
const selectGroup = require("../sqlCRUD/selectGroup");
const update = require("../sqlCRUD/update");
const select = require("../sqlCRUD/select");
const selectJoin = require("../sqlCRUD/selectJoin");

router.post("/register", async (req, res, next) => {
  const studentVal = req.body.students;
  const teacherVal = req.body.teacher;
  try {
    if (!teacherVal) {
      throw new error.ErrorHandler(
        400,
        "Missing value for 'teacher' in request body"
      );
    }
    if (!studentVal && !Array.isArray(studentVal)) {
      throw new error.ErrorHandler(
        400,
        "Missing value(s) for 'student' in request body"
      );
    }
    const insertVal = valuesForInsert.valuesForRegister(studentVal, teacherVal);
    const conn = await connection(dbConfig).catch(e => {});
    const result = await insert(
      conn,
      "register",
      ["teacherEmail", "studentEmail"],
      insertVal
    );

    if (result) {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/commonstudents", async (req, res, next) => {
  const teacherVal = req.query.teacher;
  try {
    if (!teacherVal) {
      throw new error.ErrorHandler(
        400,
        "Missing value for 'teacher' in request parameter"
      );
    }
    const count = arrayHelper.countArray(teacherVal);
    const inVal = valuesForSelect.valuesForCommonStud(teacherVal);
    const conn = await connection(dbConfig).catch(e => {});
    const students = await selectGroup(
      conn,
      "register",
      "studentEmail",
      "teacherEmail",
      inVal,
      count
    );

    if (students) {
      res.json({ students });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/suspend", async (req, res, next) => {
  const studentVal = req.body.student;
  try {
    if (!studentVal) {
      throw new error.ErrorHandler(
        400,
        "Missing value for 'student' in request body"
      );
    }
    const whereVal = valuesForUpdate.valuesForSuspend(studentVal);
    const conn = await connection(dbConfig).catch(e => {});
    const result = await update(conn, "student", "isSuspended = 1", whereVal);

    if (result) {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/retrievefornotifications", async (req, res, next) => {
  const teacherVal = req.body.teacher;
  const notifVal = req.body.notification;
  try {
    if (!teacherVal) {
      throw new error.ErrorHandler(
        400,
        "Missing value for 'teacher' in request body"
      );
    }
    if (!notifVal) {
      throw new error.ErrorHandler(
        400,
        "Missing value for 'notification' in request body"
      );
    }
    // Get students registered to teacher and not suspended
    const whereVal = valuesForSelect.valuesForNotification(teacherVal);
    const conn = await connection(dbConfig).catch(e => {});
    const dbEmail = await selectJoin(
      conn,
      "register",
      "student",
      "student.email",
      "student.email = register.studentEmail AND student.isSuspended = 0",
      whereVal
    );

    // Get students who are mentioned (if any) and not suspended
    const mentionEmail = stringHelper.extractMention(notifVal);
    if (mentionEmail) {
      const whereVal = valuesForSelect.valuesForMention(mentionEmail);
      const conn = await connection(dbConfig).catch(e => {});
      const mentionDBEmail = await select(conn, "student", "email", whereVal);

      recipients = arrayHelper.mergeRecipient(mentionDBEmail, dbEmail);
    } else {
      recipients = dbEmail.map(
        rowDataPacket => Object.assign({}, rowDataPacket).email
      );
    }

    if (recipients) {
      res.json({ recipients });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
