const express= require('express');

const router= express.Router();
const Post = require('../models/Post');


//GET ALL USER POSTS
router.get('/get',async (req,res)=>{
    try {
        const get = await Post.find();
        res.json(get);
        console.log(get);
    } catch (error) {
        res.json({message : error});
    }
})

//POST USER DETILS
router.post('/post',async (req,res)=>{
    const post = new Post({
        fullname:req.body.fullname,
        username:req.body.username,
        password:req.body.password,
        emailID: req.body.emailID
    });
    
    try{
        const savedPost = await post.save();
        res.json(savedPost);
        console.log(savedPost);
    }catch(err){
      res.json({ message : err});
      console.log(err);
    }
    // console.log(req.body)
})

//GET SPECIFIC POSTS
router.get('/:postID',async (req,res)=>{
    try{
      const specific = await Post.findById({_id: req.params.postID});
      res.json(specific);
      console.log(specific);
    }catch(err){
        res.json({mesage : err});
    }
});

//DELETE SPECIFIC POSTS
router.delete('/:postID',async (req,res)=>{
    try{
    const removedPost = await Post.remove({_id: req.params.postID});
    res.json(removedPost);
    }catch(err){
        res.json({message : err});
    }
})

//UPDATE SPECIFIC POST
router.patch('/:postID',async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postID},
            { $set: {fullname:req.body.fullname,
                username:req.body.username,
                password:req.body.password,
                emailID: req.body.emailID}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message : err});
    }
});


module.exports = router