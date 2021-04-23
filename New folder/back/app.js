require("dotenv").config();

const cors = require('cors');
const express = require("express");
const errorMiddleware = require("./middlewares/error");
const { sequelize, Product } = require("./models");


const multer = require('multer');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))



// // const upload = multer({ dest: "public/images" }) // FILE ที่อัพโหลดขึ้นมาเก็บไว้ที่ไหน (destination) แต่อ่านไฟล์ไม่ได้ อ่านไม่ออก



// // dest => storage ทำให้อ่านไฟล์ได้ config destination + filename ได้
// const storage = multer.diskStorage({  
//   destination: (req, file, cb) => { // กำหนดว่าไฟล์อัพโหลดไปที่ไหน 
//     console.log(file); // ได้ fieldname , originalName , encoding , mimetype
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => { // กำหนดชื่อใหม่ให้มันได้ // ไม่ควรชื่อซ้ำกัน กันการอัพโหลดชื่อซ้ำเข้ามาในระบบ ( ในตัวอย่าง generate จาก Date.now() ) 
//     cb(null, "product-" + Date.now() + "." + file.mimetype.split('/')[1])
//   }
// });



// // ไม่ filter file
// // const upload = multer({ storage: storage });

// // filter file
// const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
//   // console.log(file.mimetype.split('/')[1])
//     if (file.mimetype.split('/')[1] === "jpeg" 
//         || file.mimetype.split('/')[1] === "jpg" 
//         || file.mimetype.split('/')[1] === "png" ) {
//       cb (null, true);
//     } else {
//       cb (new Error("this file is not a photo"));
//     }
//   } 
// });



// // กั้นระหว่างทางเเพื่อทำการแปลง ไฟ์ที่อัพเข้ามา ไว้ตรงระหว่างทางเพราะ มันใช้ในการอัพโหลด อย่างเดียว ไม่ต้องทำแบบพวก json() ที่ต้องทำเกือบทุก PATH
// // single รับได้ภาพเดียว / array อัพได้หลายภาพ
// // path นี่จำ upload รูปเข้ามา โดยมี fieldname: 'image' แล้วส่งไปยัง req.obj สามารถนำรูปมาใช้ตอ่ได้
// app.post("/", upload.single('image'), async (req, res, next) => { // ตอนส่งมาต้องชื่อ "image" ด้วย
// // app.post("/", upload.array('image'), async (req, res, next) => {
//   // console.log(req.file);
//   // console.log(req.files);
//   await Product.create({ name: req.body.name, imgUrl: req.file.path }); // ถ้าเป็น array => req,files.path
//   // await Product.bulkCreate({ name: req.body.name, imgUrl: req.files.path }); // ทำไม่ได้ database ไม่ support
//   // const fieldname = req.file
//   // console.log(fieldname.path);
//   res.status(200).json({ message: "img uploaded" })
// });











// การ upload ภาพไปยัง clound storage 
// npm i cloudinary
const cloudinary = require("cloudinary").v2;
const fs = require("fs"); // ใช้สำหรับลบไฟล์ในโฟลเดอร์ local storage

// // ปิด ตรงนี้ ไปใช้ API Environment variable: ลงใน dotenv แทน
// cloudinary.config({ // copy มาจากใน dashboard ในเว็บ เป็นการ config แบบปกติ
//   cloud_name: 'dqns1bgvx', 
//   api_key: '937381117675363', 
//   api_secret: 'PWPdYo7L7Dw_2ZwPtfnnt7siKgY' 
// });

const storage = multer.diskStorage({  
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, "product-" + Date.now() + "." + file.mimetype.split('/')[1])
  }
});

const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
    if (file.mimetype.split('/')[1] === "jpeg" 
        || file.mimetype.split('/')[1] === "jpg" 
        || file.mimetype.split('/')[1] === "png" ) {
      cb (null, true);
    } else {
      cb (new Error("this file is not a photo"));
    }
  } 
});

app.post("/", upload.single('image'), async (req, res, next) => {
  // console.log(req.file.path)
  // const { path } = req.file
  // console.log(path)
  cloudinary.uploader.upload(req.file.path, async (err, result) => {
    // console.log(result)
    if (err) return next(err);
    const product = await Product.create({ name: req.body.name, imgUrl: result.secure_url }); // result สิ่งที่ cloudinary ส่งกลับมา จากการที่เราส่งภาพเข้าไป
    fs.unlinkSync(req.file.path); // ลบไฟล์ในโฟลเดอร์ local storage
    res.status(200).json({ message: "img uploaded" , product });
  });
});

cloudinary.uploader


app.use("/", (req, res, next) => {
  res.status(404).json({ message: "PATH NOT FOUND" });
});

app.use(errorMiddleware);

// sequelize.sync({ force: true }).then(() => console.log('DB sync'))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT: ${PORT}`));

