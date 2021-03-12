
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const userRegister = async (req, res, next) => {    
    try {
        const { user , pass } = req.body;

        const userData = await readFile('./user.json', 'utf8');
        const users = JSON.parse(userData);

        findUser = users.filter((item, index) => 
            item.user.toString() === user.toString()
        );
        
        if ( !(Object.keys(findUser).length === 0) ) {
            return res.status(409).json({ message: 'This username has already been taken' });
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            user: user,
            pass: pass,
        };

        users.push(newUser);
        await writeFile('./user.json', JSON.stringify(users));
            res.status(201).json({ message: 'Username ' + user + ' register complete' });
    } catch(err) {
        next(err)
    }
};

const userLogin = async (req, res, next) => {    
    try {
        const { user , pass } = req.body;

        const userData = await readFile('./user.json', 'utf8');
        const users = JSON.parse(userData);

        findUserPass = users.filter((item, index) => 
            item.user.toString() === user.toString() && item.pass.toString() === pass.toString()
        );
        
        if ( Object.keys(findUserPass).length === 0 ) {
            return res.res.status(401).json({ message: 'Wrong user and pass' });
        }

        res.status(200).json({ message: 'login successfully' });
    } catch(err) {
        next(err)
    }
};


module.exports = {
    userRegister,
    userLogin
}