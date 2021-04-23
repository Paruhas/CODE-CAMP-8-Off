const { sequelize } = require("./cc8-lab-express-sequelize/models")

Sequelize === Model ใน MVC ( App > Route > Controller เรียกใช้ Model ทำกาารติดต่อกับ database )
* ORM ( Object Relational Mapping ) Map Row ให้เป็น OBJ ; Table เป็น class ; Column เป็น Key ; ข้อมูลในแต่ละ Row เป็น OBJ





สอนใช้งาน sequelize-cli
ลง package ใหม่ === npm i -g sequelize-cli
สร้างไฟล์ config ขึ้นมา (เป็นรูปแบบคล้ายตัว pool connection กับ database) === sequelize-cli init:config
สร้างไฟล์ที่รวมการ config ไฟล์อื่นๆในโฟลเดอร์ models เป็นเหมือนตัวกลางของ models ทั้งหมด index.js === sequelize-cli init:models
สร้างไฟล์ Customer.js ในโฟลเดอร์ models ; exports module ออกมา เป็น arrow Fn มี params 2 ตัวเป็น (sequelize, DataTypes) [] > รับ params 2 ตัวเข้ามา โดยไม่ต้อง import sequelize เข้ามา ; โดยใน Fn เป็นการ define Models ของ sequelize ปกติ แล้ว export ออกไปให้ index.js ใช ้ ; ทำให้เวลาเรียกใช้งาน แค่ import index.js ไป ก็สามารถใช้งานตัว Model อื่นๆได้เลย ไม่ต้อง import ตัวไฟล์โดยตรง/หรือimportหลายๆไฟล์ตอนใช้เยอะๆ ; ได้เป็น class OBJ ของ _.Model.Fn ที่เราจะใช้
ทำ routes controller ของ customer แล้ว export import ให้เรียบร้อย
import models index.js เข้าไปใน controller
* ละ index ก็ได้ default ของ codeer มันจะไปหา index.js เสมอ

*** 
!!! ไม่ควรทำ ควรทำด้วยการ map ดีๆ !!!
ใน app.js import models index.js เข้ามา แล้วใช้งาน Fn Sync ของ sequelize ; แต่จะ sync ไม่ได้ ติด ห้าม DROP table === sequelize-cli db:drop
สร้าง database ขึ้นมาใหม่ (ไม่มีtable) === sequelize-cli db:create ; แล้วทำการ .sync({ force: true }) 
***

FK ยังไม่ต้องใส่ใน define ตอนแรก ใส่ข้อมูลอื่นให้ครบก่อน
X hasMany Y > ข้อมูลของตาราง X มีอยู่ใน ตาราง Y หลาย ค่า / ใน Y มีค่า X อยู่เยอะมาก > ตามด้วยชื่อ Column (หัวตาราง) นั้นๆ (จากของ ตาราง  Y)
X belongsTo Y > ข้อมูลของตาราง X จะต้องดึงมาจาก ตาราง Y 1 ค่า > ตามด้วยชื่อ Column (หัวตาราง) นั้นๆ (จากของ ตาราง X)

เลือกmodelตารางมา JOIN ใส่ include: [ {model: ... , }, ... ] 
ใส่ attributes ในการ SELECT แค่หัวตาราง/ข้อมูลที่ต้องการ ,attributes: [Column1,Column2, ...] ; ใส่ต่อหลัง model ในก้อน {} ของ [] include ได้เหมือนกัน
transaction ควรทำเมื่อมีการ INSERT มากกว่า 1 command เพื่อป้องกันการเขียนลงไปใน DATABASE ก่อนที่จะเป็นตัวที่ Error / หรือการเชิ้อมต่อกับ Server ถูกตัดกลางคัน จะทำให้บันทึกไม่หมดทุกค่าที่เขียน ; เป็นการสั่งให้ทำแยกออกมาก่อน (ไม่ได้ทำใน DATABASE เลย) เมื่อทำจนเจอ .commit ถึงจะทำการบันทึกลง DATABASE ; เจอ .rollback จะเลิกทำทันที และลบสิ่งที่ทำมาไม่เสร็จทิ้งไป

sequelize ส่งค่า undefined ไปได้เลย Tool มันจัดการให้ อัตโนมัติ