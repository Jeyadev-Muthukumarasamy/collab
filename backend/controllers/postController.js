const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
    const { userId, content } = req.body;
    try {
        const newPost = new Post({ userId, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'name profilePicture');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Like a post
exports.likePost = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.likes.includes(userId)) {
            post.likes = post.likes.filter((like) => like !== userId);
        } else {
            post.likes.push(userId);
        }
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Comment on a post
exports.commentOnPost = async (req, res) => {
    const { id } = req.params;
    const { userId, text } = req.body;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.comments.push({ userId, text });
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};