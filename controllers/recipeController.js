const { get } = require("mongoose");
const Recipe = require("../models/recipeModel");

// Get all recipes
const getRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//get recipes by id
const getRecipeById=async(req,res)=>{
    const ID=req.params.id;
    try{
        const recipe=await Recipe.findOne({id:ID});
        res.status(200).json(recipe);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const newrecipe = await Recipe.create(req.body); // req.body is the data sent in the request body
    res.status(201).json(newrecipe);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update a existing recipe
const updateRecipe = async (req, res) => {
    const ID=req.params.id;
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate( {id:ID}, req.body,{ new: true });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//delete an existing recipe
const deleteRecipe = async (req, res) => {
    const ID=req.params.id;
  try {
    await Recipe.findOneAndDelete({ id:ID});
    res.status(204).json({message:"recipe  deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getRecipe,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
