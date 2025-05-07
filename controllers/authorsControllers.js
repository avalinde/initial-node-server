//Start coding here:
const siteData = require("../data/siteInventory");
const authorsInventory = require("../data/authorsInventory");

const getAllAuthors = async (request, response, next) => {
  const authors = authorsInventory;

  try {
    return response.status(200).json({
      success: {
        message:
          "This route points to the authors page with all of the authors",
      },
      data: { authors: authors },
      statusCode: 200,
    });
  } catch (error) {
    return response.status(400).json({
      error: { message: "Resource not found. Search again." },
      statusCode: 400,
    });
  }
};

const getAuthor = async (request, response, next) => {
  const { _id } = request.params;

  const foundAuthor = authorsInventory.find((author) => author._id === _id);

  try {
    return response.status(200).json({
      success: {
        message:
          "This route points to the authors page with one of the authors by the ID",
      },
      data: { author: foundAuthor },
      statusCode: 200,
    });
  } catch (error) {
    return response.status(400).json({
      error: { message: "Resource not found. Search again." },
      statusCode: 400,
    });
  }
};

const createAuthor = async (request, response, next) => {
  const { firstName, lastName, birthYear, bio } = request.body;

  const newAuthor = {
    firstName,
    lastName,
    birthYear,
    bio,
  };

  try {
    authorsInventory.push(newAuthor);

    return response(201).json({
      success: { message: "A new author is created" },
      data: { newAuthor },
    });
  } catch (error) {
    return response(400).json({
      error: { message: "Error when creating an author" },
    });
  }
};

const updateAuthor = async (request, response, next) => {
  const { _id } = request.params;
  const { firstName, lastName, birthYear, bio } = request.body;

  try {
    const updatedAuthor = {
      firstName,
      lastName,
      birthYear,
      bio,
    };
    const foundAuthorIndex = authors.find((author) => author._id === _id);
    authors[foundAuthorIndex] = newAuthor;
    return response(201).json({
      success: { message: "AN author is updated" },
      data: { newAuthor },
    });
  } catch (error) {
    return response(400).json({
      error: { message: "Error when updating an author" },
    });
  }
};

const deleteAuthor = async (request, response, next) => {};
module.exports = {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
