


import { errorHandler } from "../utils/error.js"
import Post from "../models/post.model.js"

export const create = async (req,res,next)=>{

    // check if the user is admin or not by his cookies ...

    if (!req.user.isAdmin){
        return next(errorHandler(403 , 'YOU ARE NOT ADMIN TO CREATE A POST '))
    }

    if (!req.body.title || !req.body.content){

        return next(errorHandler(400 , "PLEASE PROVIDE ALL REQUIRED FIELDS ..."))
        
    }

    const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, ''); 

    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id,
    });


    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost)
        
    } catch (error) {
         next(error)
    }

}


export const getposts = async (req, res, next) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 16;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const posts = await Post.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.slug && { slug: req.query.slug }),
        ...(req.query.postId && { _id: req.query.postId }),
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: 'i' } },
            { content: { $regex: req.query.searchTerm, $options: 'i' } },
          ],
        }),
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalPosts = await Post.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthPosts = await Post.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        posts,
        totalPosts,
        lastMonthPosts,
      });
    } catch (error) {
      next(error);
    }
  };
  


  export const deletepost = async(req,res,next)=>{

    if(!req.user.isAdmin || req.user.id !== req.params.userId){
        
      return next(errorHandler(403 , 'You Are Not Allowed To Delete This Post ..'))

    }

    try {
      await Post.findByIdAndDelete(req.params.postId);
      res.status(200).json('this post has been deleted')
      
    } catch (error) {
        next(error)
    }

  }


  export const updatepost = async (req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to update this post'));
    }
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            image: req.body.image,
          },
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      next(error);
    }
  };