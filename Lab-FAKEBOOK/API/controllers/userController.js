const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, sequelize } = require("../models");

exports.protect = async (req, res, next) => {
    try {
        let token = null;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        };

        if (!token) return res.status(401).json({ message: "you are unauthorized" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ where: { id: payload.id } });
        if(!user) return res.status(400).json({ message: "user not found"});
        req.user = user;
        next();
    } catch(err) {
        next(err);
    }
};

exports.getMe = (req, res, next) => { // ไม่ต้อง async เพราะ ดึงมาจาก protect
        res.status(200).json({ 
            user: {
                id: req.user.id,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                email: req.user.email,
                profileImg: req.user.profileImg,
                status: req.user.status,
                location: req.user.location,
            }
        });
};

exports.register = async (req, res, next) => {

    const transaction = await sequelize.transaction();

    try {
        const { email, password, confirmPassword, firstName, lastName } = req.body;

        if ( password !== confirmPassword ) return res.status(400).json({ message: "password not match"});

        const hashedPassword = await bcrypt.hash(password, +process.env.BCRYPT_SALT);
        const user = await User.create({
            email,
            firstName,
            lastName,
            password: hashedPassword
        },
        {
            transaction: transaction
        });
        const payload = { 
            id: user.id, 
            email: user.email, 
            firstName: user.firstName, 
            lastName: user.lastName 
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: +process.env.JWT_EXPIRES_IN });

        await transaction.commit();

        res.status(201).json({ token });
    } catch(err) {
        
        await transaction.rollback();

        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if(!user) return res.status(400).json({ message: "username or password incorrect" });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: "username or password incorrect" });

        const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: +process.env.JWT_EXPIRES_IN });
        res.status(200).json({ token });
    } catch(err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        // const { id } = req.params;
        const { firstName, lastName, status, location } = req.body;

        // Validate

        // req.user.firstName = firstName;
        // req.user.lastName = lastName;
        // req.user.status = status;
        // req.user.location = location;
        // await req.user.save();

        await User.update(
            { firstName: firstName, lastName: lastName, status: status, location:location },
            { where: { id: req.user.id } }
        );

        res.status(200).json({ msg: "update user success"});
    } catch(err) {
        next(err);
    }
}