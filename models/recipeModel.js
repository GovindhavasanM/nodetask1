const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id:{
      type:Number,
      required:true,
      unique:true,
  },
  ingredients:{
    type:Object,
    required:true,
  },
  time: {
    type: String,
  },
});

// {"title":"task1","completed":false},{"title":"task2","completed":false}

const Recipe = mongoose.model("Recipe", recipeSchema);
// Task is a model, taskSchema is a schema, this will create a collection in mongodb

module.exports = Recipe;
// Schema = collection's structure(document)
// Model = collection
