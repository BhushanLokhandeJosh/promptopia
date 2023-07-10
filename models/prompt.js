import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    //Creaters is going to be userTYpe in Database.
    type: Schema.Types.ObjectId,
    //Ref to User to have one to many relationship.
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

// check if modal exists if not then create a new one.
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
