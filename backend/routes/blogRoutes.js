// routes/blogRoutes.js
import express from 'express';
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// Order: auth → multer → controller
blogRouter.post(
  '/add',
  auth,
  upload.single('image'), 
  addBlog
);
blogRouter.get(
    '/all',
    getAllBlogs
);
blogRouter.get(
    '/:blogId',
    getBlogById
);
blogRouter.post(
    '/delete',
    auth,
    deleteBlogById
);
blogRouter.post(
    '/toggle-publish',
    auth,
    togglePublish
);

export default blogRouter;
