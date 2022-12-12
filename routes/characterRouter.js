import express from "express";
import {
  createCharacter,
  getAllCharacters,
  getSingleCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characters.js";

const characterRouter = express.Router();

characterRouter.route("/").get(getAllCharacters);
characterRouter.route("/").post(createCharacter);
characterRouter
  .route("/:id")
  .get(getSingleCharacter)
  .put(updateCharacter)
  .delete(deleteCharacter);

export default characterRouter;
