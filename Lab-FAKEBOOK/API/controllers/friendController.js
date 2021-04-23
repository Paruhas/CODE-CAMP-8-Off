const { Friend , User } = require("../models");
const { Op } = require("sequelize");

exports.getAllFriends = async (req, res, next) => {
    try {
        const friends = await Friend.findAll({
            where: {
                [Op.or] : [ { requestTo: req.user.id }, { requestFrom: req.user.id } ],
                status: "FRIEND"
            },
            include: [
                {
                    model: User,
                    as: "RequestTo"
                },
                {
                    model: User,
                    as: "RequestFrom"
                }
            ]
        });

        const result = friends.map(item => {
            // แบบ ternary IF
            // const userId = item.requestTo === req.user.id ? item.RequestFrom.id : item.RequestTo.id // ตัวใหญ่อิงมาจาก include as ด้านบน
            // const firstName = item.requestTo === req.user.id ? item.RequestFrom.firstName : item.RequestTo.firstName
            // const lastName = item.requestTo === req.user.id ? item.RequestFrom.lastName : item.RequestTo.lastName

            // แบบ IF ปกติ
            let userId, firstName, lastName;
            if ( item.requestTo === req.user.id ) {
                userId = item.RequestFrom.id
                firstName = item.RequestFrom.firstName
                lastName = item.RequestFrom.lastName
            } else {
                userId = item.RequestTo.id
                firstName = item.RequestTo.firstName
                lastName = item.RequestTo.lastName
            }

            return {
                id: item.id,
                userId: userId,
                firstName: firstName,
                lastName: lastName
            };
        });

        res.status(200).json({ result })
    } catch(err) {
        next(err);
    }
};


exports.requestFriend = async (req, res, next) => {
    try {
        const { requestTo } = req.body;
        if (req.user.id === +requestTo) return res.status(400).json({msg: "cannot request yourself as friend"});
        // SELECT * FROM friends WHERE (request_to_id = requestTO AND request_from_id = req.user.id)
        // OR (request_to_id = req.user.id AND request_from_id = requestTO)
        const friend = await Friend.findOne({ where: {
                [Op.or]: [
                {
                    requestTo: requestTo,
                    requestFrom: req.user.id
                },
                {
                    requestTo: req.user.id,
                    requestFrom: requestTo
                }
            ]
        } 
    });
    if (friend) return res.status(400).json({ msg: "you cannot request this user as friend"});

    const requestFriend = await Friend.create({
       requestTo,
       requestFrom: req.user.id,
       status: "PENDING" 
    });
    res.status(201).json({ msg: "request has been set" });
    } catch(err) {
        next(err);
    }
};

exports.requestList = async (req, res, next) => {
    try {
        const friends = await Friend.findAll({
            where: {
                status: "PENDING",
                requestTo: req.user.id
            },
            include: {
                model: User,
                as: "RequestFrom",
                attributes: [ "id", "firstName", "lastName", "profileImg" ]
            },
            attributes: []
        });

        const result = friends.map(element => element.RequestFrom);
        res.status(200).json({ friendsList: result });
    } catch(err) {
        next(err);
    }
};

exports.updateFriendStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body; // รับ Status ที่ต้องการเปลี่ยนมาจาก BODY (ตาม ENUM ที่เรากำหนดเท่านั้น)
        
        // console.log(req.params.id) 
        // console.log(req.body)
        // console.log(id, req.user.id)

        const friend = await Friend.findOne({ where: { requestFrom: id, requestTo: req.user.id } });
        // console.log(friend)
        
        if(!friend) return res.status(400).json({ msg: "this user cannot update friend with this id" });
        friend.status = status;

        await friend.save();
        // await Friend.update({ status }, { where: { id } });
        res.status(200).json({ msg: "update friend success" });
    } catch(err) {
        next(err);
    }
};

exports.deleteFriend = async (req, res, next) => {
    try {
        const { id } = req.params;
        const friend = await Friend.findOne({ where: { id } });

        if( !friend ) return res.status(400).json({ msg: "this user is not your friend" });
        if( friend.status !== "FRIEND" ) return res.status(400).json({ msg: "this user is not your friend" });
        if(! ( friend.requestFrom === req.user.id && friend.requestTo === req.user.id ) ) {
            return res.status(400).json({ msg: "cannot delete other user's friends" });
        }

        await friend.destroy();
        res.status(204).json();
    } catch(err) {
        next(err);
    }
};
