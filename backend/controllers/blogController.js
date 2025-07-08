// controllers/blogController.js
import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
    try {
        // parse JSON payload
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !description || !category || !imageFile) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // read buffer
        const fileBuffer = fs.readFileSync(imageFile.path);

        // upload to ImageKit
        const uploadResult = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.filename,
            folder: '/blogs'
        });

        // generate optimized URL
        const optimizedImageURL = imagekit.url({
            path: uploadResult.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                { width: '1280' }
            ]
        });

        // save the blog, using optimizedImageURL
        const newBlog = await Blog.create({
            title,
            subTitle,
            description,
            category,
            image: optimizedImageURL,
            isPublished
        });

        res.json({ success: true, data: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true })
        res.json({ success: true, blogs })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" })
        }
        res.json({ success: true, blog })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({ success: true, message: 'Blog deleted successfully' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: 'Blog status updated' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const addComment = async (req, res) =>{
    try {
        const {blog, name, content} = req.body;
        await 
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}