underscored: true ; 

npm i bcryptjs => const bcrypt = require('bcryptjs');
bcrypt.hash(password, saltRounds, function(err, hash) {
  // Store hash in database here
});
***  function(err, hash) เป็น Callback Fn > การทำงานช้ากว่า ไม่ต้องใส่





// TOKEN
ลง JWT npm i jsonwebtoken

const result = await bcrypt.compare(password, user.password);

// สร้าง payload ขึ้นมา ด้วยข้อมูลที่มีใน server 
**  ไม่ควรเก็บข้อมูลที่มีความสำคัญ ไว้ใน payload เช่น password เลขบัตรเครดิต
const payload = { 
    id: user.id, 
    firstName: user.firstName ? user.firstName : 'Hello Anonymous',
    lastName: user.lastName,
    username: user.username
};

// Fn sign ของ JWT รับ parameter 3 ตัว ( payload , 'keyลับกำหนดเอง', เวลาหมดอายุของtoken(เริ่มที่วินาที) )
const token = jwt.sign(payload, 'secretkey', { 
    // expiresIn: 60 * 60 * 24 * 30  // 30 วัน ค่าเริ่มเป็นวินาที
    expiresIn: 5  // 5 วิ
});

res.status(201).json({ token , message: 'login successful' })


app.use(authMiddleware); // อันนี้คือ ต้องเช็คทุก PATH
app.use('/users', authMiddleware,userRoutes); // ใส่แบบนี้เช็คแค่เวลาเข้าใน PATHนี้เท่านั้น
// ใส่ใน Fn METHOD ไฟล์ Route.js น่าจะดีกว่า > ใน Controller.js ดีสุด แล้วค่อย exports ออกไป

ข้อมูล User ต้องมีการป้องกันโดย เช็คTOKENก่อนว่าตรงไหม โดย ใส่Fn protect, getUser หลัง Fn METHOD get ในหน้า Routes.js
userRouter.get('',userController.protect, userController.getUser);


สร้าง userController.protect Fn อยู่ใน Controller 
Fn ทั้งก่อนนี้จะทำหน้าที่ ถอด req.headers.authorization ออกมา เอา token มา + secertkey แล้ว verify ตรวจสอบว่าตรงกับในระบบไหม แล้วไปเช็คว่า ที่ verify มี id (เพราะใส่ id ไว้แล้วตั้งแต่ตอน Fn Sign) ตรงกับ User ในระบบไหม แล้วคืนค่า user ออกมาไว้ใช้ในตัว Middleware ต่อไป

* Fn ในการเช็คว่าคุณคือใคร ตรงกับในระบบไหม ของ JWT Fn verify มี params 2 ตัว ( toekn, 'keyลับกำหนดเอง(ตรงกับที่กำหนดไว้ตอน Fnsign)' )





ย้ายตัว Error ออกไปจาก app.js ไปไว้ใน middlewares/error.js แล้วทำการใส่ error ที่จะแสดงเข้าไป ซึ่งตรงนี้สามารถกำหนด error ที่จะให้แสดงได้ โดยการใช้ If + dotenv
app.use((err, req, res, next) ... ) > app.use(errorMiddleware);





ใช้งาน .env
ลงแพ็คเกจ npm i dotenv
import .config เข้า app.js ; > require('dotenv').config(); ; มันจะทำการมองทุกอย่างใน .env เป็น OBJ เข้าถึงด้วยการ . เข้าไปได้
// เหมือนเป็นการ refactor code เอา code ซ้ำๆ ยัดเข้าไปใน .env แทน แล้วเจาะเข้าไปเอา > process.env.___
* ค่าใน process.env. เป็น String > ต้องใส่ + ข้างหน้า สำหรับค่าที่ต้องใส่เป็นตัวเลข




สร้าง Fn สำหรับเปลี่ยน password 
Route.js METHOD .patch แก้ไขแค่บาง flied เท่านั้น params เป็น ( PATHที่ต้องการ, ใส่ตัว protect ก่อน, แล้วค่อยเข้า changePassword ) > เป็นการบอกว่าต้องมี token มาด้วยตอนเข้า PATH ไม่งั้นเข้าไม่ได้ (รับ token ตอนlogin)
Controller.js body รับ ค่ามา 3 ค่า { oldPassword, password, confirmPassword } ; ทำการเช็ค bcrypt Fn compare (await) เปรียบเทียบ oldPassword(กรอกเข้ามา) กับ password(เจาะเข้าไปใหม่ด้วย findOne หรือ ให้ตัว protect ส่งมาให้ตั้งแต่แรก) ในระบบ ; 
แล้วทำการ bcrypt hash (await) newPassword แล้ว .save [ req.user.password = newHashedPassword; await req.user.save(); ]หรือ .update [ await User.update( { password: newHashedPassword }, { where: { id: req.user.id } } ) ] ค่าใหม่เข้าไปใน server





Passport
npm i passport
npm i passport-jwt
เป็นตัว Middleware ทำหน้าที่ Protect คล้ายๆกับตัว Fn protect ใน controller ที่เราสร้างขึ้นมา
สร้าง middleware/passport.js ขึ้นมา import passport-jwt เข้ามาใน [ const { Strategy, ExtractJwt } = require('passport-jwt') ] โดย Strategy คือรูปแบบ/กลยุทธฺของการ Authenticate ข้อมูล (JWT คือ 1 ในรูปแบบพวกนั้น) เช่น login ด้วย FB/ GG/ Twiter ก็เป็นรูปแบบนึงเช่นกัน
โดย new Strategy มี 2 params อันแรกคือ options ไว้ verify ตัว Token โดย options เป็นก้อน OBJ 2 ค่า ค่าแรกคือ secretOrKey: ค่าsecretKeyของเรา ค่าที่สองคือ jwtFromRequest เป็นการบอกว่า Authenticate เป็นแบบไหน จะได้แกะถูก ; ถ้าผ่าน => จะไปทำตัว params ที่เป็น Callback Fn ที่มี 2 params คือ payload: เป็น OBJ ตามที่กำหนดไว้ตอน login ว่าใช้อะไรมาสร้างบ้าง ; และ done เป็น Fn 2 params ค่าแรกเป็น null หรือ err ค่าที่สองเป็น false(เมื่อ err) หรือเป็นค่าที่จะส่งออกไป โดยค่านี้จะ modifier OBJ req ให้เราด้วย
[ const options = { secretOrKey: process.env.JWT_SECRET_KEY, jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() } ]
[ const JwtStrategy = new Strategy(options, async (payload, done) => { try { const user = await User.findOne( { where: { id: payload.id } } ); 
if (!user) return done(null, false); done(null, user);  } catch(err) { done(err, false); } } );
อย่าลืม Import User กับ passport เข้ามาใน passport.js เพื่อใช้งาน Fn FindOne ได้ และใช้งาน passport [ const { User } = require('../models'); ] [ const passport = require('passport'); ] 
เสร็จแล้วสั่งให้ use Fn [ passport.use('jwt', JwtStrategy); ] // กำหนดชื่อให้กับ Strategy ; ให้ชื่อ Strategy เป็น jwt

ใน app.js import เข้าไปใน app.js [ require('./middlewares/passport'); ] // การ Import แบบนี้คือจะเข้าไปรัน Fn ทั้งหมดในนั้นเลย (ไม่ต้องประกาศตัวแปร import/export)
Route import npm passport เข้ามา และชื่อของ Startegy ของ passport [ const passport = require('passport') ] ; [ const auntMiddleware = passport.authenticate('jwt', { session : false }) ] ; และแก้ไข userController.protect > auntMiddleware