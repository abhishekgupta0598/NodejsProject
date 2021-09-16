const express = require("express");
const Employee = require("./model");
const router = express.Router();

router.get("/", function (req, res) {
  Employee.findAll(function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.send(data);
    }
  });
});

router.get("/:id", function (req, res) {
  Employee.findById(req.params.id, function (err, data) {
    if (err) {
      console.log("error" + err);
      throw err;
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

router.post("/", function (req, res) {
  let new_employee = new Employee(req.body);
  Employee.create(new_employee, function (err, data) {
    if (err) {
      console.log("error", err);
      throw err;
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

router.put("/:id", function (req, res) {
  let new_employee = new Employee(req.body);
  Employee.update(req.params.id, new_employee, function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

router.delete("/:id", function (req, res) {
  Employee.delete(req.params.id, function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
