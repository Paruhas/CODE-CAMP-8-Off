require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorMiddleware = require("./middlewares/error");
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const friendRouter = require('./routes/friendRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/posts",postRouter);
app.use("/friends",friendRouter);
app.use("/",userRouter);


app.use("/", (req, res, next) => {
    res.status(404).json({msg: 'PATH NOT FOUND'});
});

app.use(errorMiddleware);

// const { sequelize } = require('./models');
// sequelize.sync({ force: true }).then(() => console.log('DB sync'))

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('SERVER RUNNING ON PORT: ' + port));