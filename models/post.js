import { Schema, model, models } from "mongoose";
const PostSchema = new Schema({
    prompt: {
        type: String,
        required: [true, 'Prompt is required!'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required!'],
    },
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})
const Post = models.Post || model("Post", PostSchema);
export default Post;