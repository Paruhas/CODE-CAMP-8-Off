const { Op } = require("sequelize");
const { Post, Friend, User } = require("../models");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            where: { userId: req.user.id },
            order: [[ "createdAt", "DESC"]],
            attributes: [ "id", "text", "createdAt", "updatedAt" ]
        })
        res.status(200).json({ posts });
    } catch(err) {
        next(err);
    }
};

exports.getAllPostsIncludeFriend = async (req, res, next) => {
    try {
        // // คำสั่ง SQL ที่จะทำ
        // // แบบ ใช้ Op.or และนำไป reduce
        // // SELECT * FROM posts WHERE user_id = ownId OR user_id = friend1_id OR user_id = friend2_id OR ... ORDER BY created_at
        // // SELECT * FROM posts WHERE user_id IN (user_id, friend1_id, friend2_id,...) ORDER BY created_at
        // const friends = await Friend.findAll({ 
        //     where: {
        //         [Op.or]: [
        //             { requestTo: req.user.id, status: "FRIEND" },
        //             { requestFrom: req.user.id, status: "FRIEND" },
        //         ] 
        //     }
        // });

        // const friendIncludeMeId = friends.reduce((acc, item) => {
        //     if(!acc.includes(item.requestFrom)) acc.push(requestFrom);
        //     if(!acc.includes(item.requestTo)) acc.push(requestTo);
        // }, []);

        // const posts = await Post.findAll({
        //     where: { userId: req.user.id }
        // });


        //อีกท่า ไม่ต้องใช้ Op.or และ reduce
        const requestFriendFromIds = await Friend.findAll({ 
            where: {
                requestTo: req.user.id, status: "FRIEND" ,
            },
                attributes: ["requestFrom"]
            }
        );

        
        const requestFriendToIds = await Friend.findAll({ 
            where: {
                requestFrom: req.user.id, status: "FRIEND",
            },
            attributes: ["requestTo"]
            }
        );
        
        const toIds = requestFriendToIds.map(item => item.requestTo);
        const formIds = requestFriendFromIds.map(item => item.requestFrom);

        const friendIncludeMeId = [req.user.id, ...toIds, ...formIds];

        const posts = await Post.findAll({
            where: { userId: friendIncludeMeId },
            order: [[ "createdAt", "DESC" ]],
            include: {
                model: User,
                attributes: [ "id", "firstName", "lastName", "profileImg" ]    
            },
            attributes: [ "id", "text", "createdAt", "updatedAt" ]
        });

        res.status(200).json({ posts })
    } catch(err) {
        next(err);
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const { text } = req.body;
        const post = await Post.create({
            text,
            userId: req.user.id
        });
        res.status(200).json({ post });
    } catch(err) {
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findOne(
            { where: { id: req.params.id }}
        );

        if(!post) return res.status(400).json({ msg: "post not found" });
        if (post.userId !== req.user.id) return res.status(400).json({ msg: "cannot delete post that not your post" });

        await post.destroy()
        res.status(204).json();
    } catch(err) {
        next(err);
    }
};
