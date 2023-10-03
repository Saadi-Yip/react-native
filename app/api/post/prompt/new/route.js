import Post from '@models/post';
import { connectToDB } from '@utils/database';
export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json(); 
    try {
        await connectToDB();
        const post = new Post({ userId, prompt, tag });
        await post.save();

         return new Response(JSON.stringify(post), { status: 201 })

    } catch (error) {
        console.error(error);
        return new Response("Failed to Create Post", { status: 500 })
    }
}