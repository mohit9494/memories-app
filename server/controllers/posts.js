import postMessage from "../models/postMessage.js"


export const getPosts = async (req, res) => {

    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json('Error: ' + error.message);
    }
}

export const createPost = async (req, res) => {

    try {
        const body = req.body;
        const newPost = new postMessage(body);
        await newPost.save();

        res.status(201).json('New Post is Created!! ' + newPost)
    } catch (error) {
        res.status(409).json('Error: ' + error.message);
    }

}