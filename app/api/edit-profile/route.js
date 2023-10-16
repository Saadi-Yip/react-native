// pages/api/edit-profile.js
import { connectToDB } from "@/lib/database";
import User from "@/models/user";
import multer from 'multer';  
import { createRouter, expressWrapper } from "next-connect";
const router = createRouter();
connectToDB(); 
const storage = multer.diskStorage({
  destination: 'public/uploads/', // Define your upload destination
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false
  }
}

export const PUT = router.use(expressWrapper(upload.single('image'))).put(async (req, res, next) => {
  try {

    const { id, name, email } = await req.body; // Parse the JSON request body
    console.log(req, name, email);

    if (!id || !name || !email) {
      return new Response(JSON.stringify("Incomplete data"), { status: 400 })
    }

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return new Response(JSON.stringify("User not Found!"), { status: 404 })
    }

    // Handle image upload (if provided)
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(401).json({ error: "Image upload error" });
      }

      if (req.file) {
        console.log(req.file);
        user.image = `/uploads/${req.file.originalname}`;
      }

      // Update the user's profile data
      user.name = name;
      user.email = email;

      await user.save();
      return new Response(JSON.stringify("User Updated!"), { status: 201 })
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), { status: 500 })
  }

});






