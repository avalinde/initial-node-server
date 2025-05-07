// Start coding here: 
const express = require("express");
const router = express.Router();

const { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } = require("../controllers/authorsControllers");

//All routes start with "/api/Authors/"
router.get("/", getAllAuthors);

router.get("/:_id", getAuthor);

router.get("/create/new", createAuthor);

router.get("/update/:_id", updateAuthor);

router.get("/delete/:_id", deleteAuthor);

module.exports = router;