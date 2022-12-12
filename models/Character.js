import mongoose from "mongoose";
//const { Schema, model } = mongoose;

const postSchema = mongoose.Schema({
  id: { type: Number, required: [true, "ID is required!"] },
  name: { type: String, required: [true, "Name is required!"] },
  location: { type: [String], required: [true, "Location is required!"] },
  elements: { type: [String], required: [true, "Element is required!"] },
  weakness: { type: [String], required: [true, "Weakness is required!"] },
  strength: { type: [String], required: [true, "Strength is required!"] },
  resistance: { type: [String], required: [true, "Resistance is required!"] },
  weapon: { type: [String], required: [true, "Weapon is required!"] },
  game: { type: String, required: [true, "Game Version is required!"] },
  description: { type: String, required: [true, "Description is required!"] },
  img_url: { type: String, required: [true, "Img URL is required!"] },
});

const Character = mongoose.model("Character", postSchema);

export default Character;
