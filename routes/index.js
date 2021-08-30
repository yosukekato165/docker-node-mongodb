var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // {description: 'going to the}
  res.render("index", { title: "Todos", todos: [] });
});

module.exports = router;
