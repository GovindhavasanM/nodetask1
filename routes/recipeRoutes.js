const express = require("express");
const { getRecipe,getRecipeById, createRecipe,updateRecipe,deleteRecipe } = require("../controllers/recipeController");

const router = express.Router();

// get all recipes
router.get("/", getRecipe);
//get recipes by id
router.get('/:id',getRecipeById);
// create a new recipe
router.post("/", createRecipe);
//update a existing recipe
router.patch('/:id', updateRecipe);
//delete a recipe
router.delete('/:id', deleteRecipe);
module.exports = router;
