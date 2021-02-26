// https://github.com/napatwongchr/intro-to-react

// JS Review

// การเขียน Function

// function add(inputA, inputB) {
//      return inputA + inputB
// }
// รัน function ด้วยการ add() และใส่ ค่า argument เข้าไปด้วย => add (4, 10) ; argument คือค่าที่ส่งเข้าไปใน parameter ของ function
// let result = add(4, 10)
// หรือสามารถ ประกาศค่า a, b แยกไว้เลยก็ได้ แล้วแทนค่าตัวแปรเป็นการ Run Function ที่มีค่า a b ที่ประกาศ
// a = 4, b = 10
// result = add(a, b)
// otherResult = add(10, 10)
// จำ a จำ b ข้ามบรรทัด Function ไปก่อนแล้ว ไปที่ result ทำการ run function ที่มีค่า a = 4, b = 10 โดย assign ค่าเข้าไปใน function แล้วทำการรัน ทำให้ result = 14
// ต่อมาไปที่ otherResult ทำการ run function ที่มีค่า a = 10, b = 10 โดย assign ค่าเข้าไปใน function แล้วทำการรัน ทำให้ otherResult = 14
// JS ทำทีละบรรทัด ทำได้อย่างเดียวต่อ 1 ครั้ง ทำได้อย่างใดอย่างนึงในเวลานั้น เป็น == single thread 
// การวิ่งทีละบรรทัด asynchronous


// setTimeout เป็นตัวฟังก์ชันที่รับฟังก์ชันเข้าไปอีกที และ รับระยะเวลา
// ดีเลย์ การทำงานของฟังก์ชันที่ส่งเข้าไป ตามระยะเวลาที่ใส่ลงไป

// จาก ตัวอย่าง-01 ใน https://github.com/napatwongchr/intro-to-javascript/blob/main/lessons/14-1-asynchronous-javascript.md
// getFacebookPosts มันทำงานนานกว่าจะเสร็จ ทำให้ไม่รับนรรทัดอื่น

// แก้ไขได้ 2 วิธี
// 1. callback function => ถูกเรียกเมื่อ function อื่นเรียกใช้งานภายหลัง (ฟังก์ชันที่ถูกส่งเป็นพารามิเตอร์ของฟังก์ชันอื่นเพื่อเรียกใช้งานในภายหลัง) (เดี๋ยวค่อยมาเรียก)
// 2. promises

// แก้ไขด้วยการ setTimeout ของ function getFacebookPosts 
// setTimeout == callback function Model 
// 
// getF เชื่อมต่อเซิฟเวอเพื่อขอข้อมูลโพส ซึ่งไม่รู้ว่าทำงานเสร็จเมื่อไร
// ทำได้ทีละบรรทัด ทำได้แค่อย่างใดอย่างนึง => ทำงาน getF อยู่เลยไม่ไปทำบรรทัดอื่น
// 
// getF ไม่รู้ว่าทำงานเสร็จเมื่อไร
// รับ userID เข้าไป รับ callback Fn onFinish
// 
// execute Fn getF มี userID มี Fn posts เมื่อ setTimeout ใน getF ทำงานเสร็จ แสดง Fn posts


// ใช้ callback Fn ในการเรียง Fn ที่ไม่รู้ว่าจะทำงานเสร็จเมื่อไรหลายๆอัน
// ใส่ Fn ที่ต้องการให้ ทำงาน ต่อไป ไว้ใน callback Fn ก่อนหน้า => (อารมณ์ประมาณ Fn ซ้อนกันๆ เป็น Nesting) โดยจะรันจากบนสุดลงไปล่างสุด ทีละบรรทัด


// //Example - Callback
// let getUser = (userId, onFinished) => {
//     setTimeout(() => {
//         onFinished("user data");
//     }, 3000);
// };

// let getPosts = (user, onFinished) => {
//     setTimeout(() => {
//         onFinished("posts data");
//     }, 1000);
// };

// let getComments = (post, onFinished) => {
//     setTimeout(() => {
//         onFinished("comments data");
//     }, 1500);
// };

// getUser("user_1", function onFinished(userData) {
//     console.log("User data: ", userData);
//     getPosts(userData, function onFinished(postData) {
//         console.log("Posts data: ", postData);
//         getComments(postData, function onFinished(commentData) {
//             console.log("Comments data: ", commentData);
//         });
//     });
// });


// ปัญหาของ callback Fn
// เรียงลำดับการทำงานยาก ; การทำงานแบบ asynchronous ขัดต่อการคิดของสมองมนุษย์
// เกิด Inversion of Control ; ให้การทำงานของฟังก์ชันส่วนนึงไปให้คนอื่นควบคุม => มั่นใจได้ไงว่าการ run จะ run แค่ครั้งเดียว



// Promise เกิดมาแก้ไขปัญหาของ callback Fn => ในการแก้ไขปัญหา Fn Block การทำงาน code อื่น
// คล้ายๆบิลรับสินค้า ตอนไปซื้อของใน Mc / KFC (สั่ง > รอเรียก > ไปรับผล(มีของ, ของหมด))


// //Example - Promise
// let getUser = (userId, onFinished) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('user data')
//         }, 3000)
//     })
// };

// let getPosts = (user, onFinished) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             // test Resolve / Reject ตรงนี้
//             resolve("posts data");
//             // reject("posts data");
//         }, 1000);
//     })
// };

// let getComments = (post, onFinished) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("comments data");
//         }, 1500);
//     })
// };

// let output = (data) => {
//     console.log('Data: ', data);
//     return data;
// }

// let getError = (error) => {
//     console.log('Error: ', error);
//     return error;
// }


// getUser()
//     .then(output)
//     .then(getPosts)
//     .then(output)
//     .then(getComments)
//     .then(function (comment) {
//         console.log('Data: ', comment)
//     })
//     .catch(getError)


// Promise เป็น OBJ พิเศษ JS เวลาประกาศต้องมี new นำหน้า Promise เสมอ
// Promise จะ Resolve ได้แค่ครั้งเดียว และ การันตีว่า ไม่ Resolve ก็ Reject
// .then เป็นฟังก์ชัน/Method ที่อยู่ใน Promise OBJ ที่รับ callback Fn ไปอีกที ; เรียกใช้งานเมื่อ resolve (ทำคำสั่งก่อนหน้าเสร็จแล้ว) ; getUser ถ้าทำงานเสร็จ then(ทำงานต่อ)
// Fn ที่ส่งเข้าไปใน Promise ประกอบแล้วทำให้ Fn มันทำงานได้

// reject แล้วจะหยุดการทำงานทันที ; กระโดดเข้า .catch (ถ้ามี)
// .catch เป็นฟังก์ชัน/Method ที่อยู่ใน Promise OBJ ที่รับ callback Fn ไปอีกที ; จะทำงานเมื่อมีการ reject เกิดขึ้นใน Promise



// ASYNC AND AWAIT 
// เป็น syntax ที่ทำให้เราเขียน และเข้าใจ Promise ง่ายขึ้น

// ASYNC ใส่ไว้ข้างหน้า function ไม่รู้ว่าทำงานเสร็จเมื่อไร => สามารถ .then หลังการ execute Fn นั้นได้ทันที (เป็น Promise ทันที หลังคืนค่าออกมา)
// ทำให้ function return Promise โดยไม่ต้องประกาศ return new Promise

// AWAIT 
// ให้ JS รอได้ผลลัพธ์จาก execute Fn Promise ก่อน ถึงจะไปทำงาน ที่บรรทัดต่อๆไป
// ใช้ได้ แค่ ภายใน Fn ที่มี ASYNC อยู่ข้างหน้าเท่านั้น 

// .catch ใน ASYNC / AWAIT 
// ใข้คำสั่ง " try ใน Fn async ก้อนใหญ่ ครอบ Data ที่ await {} catch(error) { console.log()} "
// try == ลองทำใน try {} ก่อน ถ้าเจอ Error จะสั่งให้ execute ก่อนหน้า Error แล้วโดดไปหลัง try {} ทันที

// throw ทำให้ทั้งโปรแกรมหยุดทำงาน คล้ายๆbreak

// exit(0) exit(1) => เป็น Fn Process ใน Node เป็นการหยุดการทำงานของโปรแกรม โดย 0 1 คือประเภทการexit ว่าจะexitแบบไหน

// // Example - ASYNC AWAIT

// // เขียนแบบ Declaration Fn
// // async function getUser() {
// //     return 'user data'
// // }

// // async function getPosts() {
// //     return 'posts data'
// // }

// // async function getComments() {
// //     return 'comments data'
// // }

// //เขียนแบบ Arrow
// const getUser = async () => {
//     return 'user data'
// }

// const getPosts = async () => {
//     // throw 'Error at getPosts' // test : try thrown => catch
//     return 'posts data'
// }

// const getComments = async () => {
//     return 'comments data'
// }

// async function main() {
//     try
//     {
//     let userData = await getUser()
//     console.log(userData)
//     let postsData = await getPosts()
//     console.log(postsData)
//     let commentsData = await getComments()
//     console.log(commentsData)
//     } catch(error) {
//         console.log('Error: ', error)
//     }
// }

// main()










// API == Application Programming Interface
// ช่องทางที่ทำให้เราสามารถ interact กับ software components ได้ 
// ทำให้เราใช้งานมันได้ โดยไม่ต้องรู้ว่ามันทำงานอะไรอยู่เบื้องหลัง (การทำงานเบื้องหลัง == implementation detail)
// มาตรฐานนึงนการให้ client side กับ sever side ติดต่อกันได้

// Endpoint URL เรียกใช้ API
// HTTP Method ตัวบอก Sever ว่าเราจะทำการ Request แบบไหน
//      GET == ขอข้อมูล ; POST == ขอสร้างข้อมูล โดยเราส่งให้ ; PUSH == ขอแก้ไข/อัพเดตข้อมูล ; DELETE == ขอลบข้อมูล 
// Headers, Body, Parameters == เป็นสิ่งที่สามารถส่งไปพร้อม ๆ กันกับการเรียกใช้ API
//      Headers == ตัวบอกข้อมูลเพิ่มเติมที่ติดต่อกันระหว่าง Client และ Sever (โดยปกติเราจะใช้ JSON)
//      Body == ส่งข้อมูลเพิ่มเติม ผ่านHTTP Method
//      Parameter == เป็นข้อมูลเพิ่มเติมในการขอข้อมูลด้วย GET
// Response มี HTTP status code
//      5 หมวดหมู่ใหญ่ ๆ ดังนี้ 
//      1xx : Informational เป็น Code ที่บอกว่า Request ของเรา OK แต่ ไม่ค่อยใช้กันในทั่วไป 
//      2xx : เป็น Code ที่บอกว่า Request สำเร็จ 200 OK - เป็นมาตรฐานในการบอกว่า Request สำเร็จ 201 CREATED - เป็นการบอกว่า Request เข้ามาสร้างข้อมูลนั้นสำเร็จ 
//      3xx : เป็นการ Redirect 301 Moved Permanently - เป็น Code ที่บอกว่า Request ที่จะเข้ามาในอนาคต ต้องเปลี่ยนไปเป็น Endpoint ใหม่ 
//      4xx : เป็น Code ที่บอกว่า Client มี Error 404 Not Found - Request ที่เข้ามาขอข้อมูลที่ไม่มีอยู่ในระบบ 
//      5xx : เป็น Code ที่บอกว่า Server Error 500 Internal Server Error - มีความผิดปกติเกี่ยวกับการทำงานของตัว Server

// Fn Fetch 
// JS request ขอข้อมูลจาก sever ด้วย Fn Fetch
// () parameter = endpoint
// ต้องใช้ Promise กับมัน ใส่ await หน้า Fn Fetch => แล้วสร้าง async Fn main() {} ครอบ await เพื่อให้ใช้งานได้
// สร้างตัวแปรรับค่า = await response.json() => console.log(ตัวแปรที่ตั้ง) เพื่อเอาข้อมูลออกมา

// // Example Fetch
// async function main() {
//     let response = await fetch('https://dog.ceo/api/breeds/list/all')
//     let data= await response.json()
//     console.log(data)
// }

// main()










// DOM

// // TEST extranal JS
// function greetingMsg() {
//     console.log('Hello, CC8');
// }
// greetingMsg()

// DOM
// นอกสุดแม่(parent) > ลูก(children) ; ลูก ของ แม่ เดียวกัน == พี่น้อง(sibling)
// Document == OBJ Build-in
// Event == สัญญาณบางอย่างเกิดขึ้น
// Event Handlers => addEventListener ให้มันคอยฟัง ถ้าเกิด (<อะไรขึ้น> , แล้วทำสิ่งนี้) ; addEventListener()
// 1 tag == 1 node











// React

// // การสร้าง element แบบปกติใน DOM
// const rootElement = document.getElementById("root");
// const element = document.createElement("h1");
// element.textContent = "Hello, React !";
// element.className = "hello-DOM-text";
// rootElement.append(element);
// // หาจุดที่เราต้องการจะแทรก => สร้าง tag element เปล่าขึ้นมา => ใส่ค่า tag element นั้น => กำหนด class ให้ tag element นั้น 
// // => แทรกเข้าไปด้วยทำสั่งเพิ่ม ตำแหน่งที่ต้องการ.คำสั่งแทรก(ตัวที่เราสร้างมา)

// // การสร้าง element แบบ React
// // copy script React มาใส่ในไฟล์ของเราก่อน
// <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>

// // สร้างแค่ลูกตัวเดียว
// const rootElement = document.getElementById('root')
// const element = React.createElement(
//     'h1',
//     { className: 'hello-react-text'} ,
//     'Hello, React !'
// );
// ReactDOM.render(element, rootElement);
// // หาจุดที่เราต้องการจะแทรก => สร้าง element ขึ้นมาด้วย React.createElement ( "tag" , { attribute } , "ข้อความ" )
// //  => ReactDOM.render(element, จุดที่ต้องการให้elementเป็นลูก)

// // สร้างแม่และลูก
// const heading = React.createElement(
//     'h1',
//     { className: 'hello-react-text'} ,
//     'Hello, React !'
// );

// const element = React.createElement(
//     'div',
//     { className: 'container' },
//     heading
// );

// ReactDOM.render(element, rootElement);
// // หาจุดที่เราต้องการจะแทรก => สร้าง element ตัวแรก (heading == h1) แบบเดิม 
// // => สร้าง element ตัวที่สอง (element) ออกมา แต่ ตรงส่วนข้อความ ให้ใส่ค่า element ตัวแรกแทน (ตัวอย่างคือ heading)
// //  => ReactDOM.render(element, จุดที่ต้องการให้elementเป็นลูก) => จะได้ออกมาเป็น < root ครอบ [ element ครอบ ( heading ) ] >
// // (สร้างตัวข้างในก่อนแล้วค่อยตัวข้างนอก)

// multiple render slibing => ใช้อย่างอื่นช่วย React ใช้แค่สร้างได้แค่ 1 Sibling เท่านั้น

// สร้าง element ใหม่ โดยเขียนแบบ HTML ใน Script โดยใช้ JSX และ BABEL => copy Script ด้านล่าง => ใส่ type="text/babel" ให้ Script ที่ เราต้องการเขียน
// <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
// React จะไม่ใช้คำว่า class มันจะแดงเตือน => ให้ใช้ className แทน










// JSX 
// เหมือนเขียน HTML ปกติ และ ใช้งานความสามารถ Javascript ต่างๆได้เลย
// ประโยชน์ของ == อ่านง่าย, เขียนง่าย, เปลี่ยนแปลงง่าย, maintain code ง่าย, ป้องกัน injection attack (sercurity)
// ใช้ประยุกต์กับ JS ได้ง่าย เพราะสามารถใช้ความสามารถของ JS ได้ => เปลี่ยนแปลง DOM ที่เราสร้างขึ้นมาบน หน้าเว็บ
// JSX คือการ เอา HTML และ JS มารวมร่างกัน

// {} == ใส่ตัวแปรที่เราประกาศไว้ข้างบนได้ เพื่อ เปลี่ยน text ได้ตามตัวแปรนั้นๆ ; {} หรือครอบตรงvalue ของclass={} สามารถเปลี่ยน class จากการกำหนดตัวแปรได้
// // let newContainerClassName += ' hidden'; => ทำให้ class เพิ่มคำว่า hidden ทำให้ element นั้นถูกซ่อน

// ทำเป็นก้อน attribute OBJ ได้ เช่นตัวอย่าง ทำให้ text นั้น มี attribute เป็น class และมี Event ด้วย ( แปลง : => = ให้ด้วย)
// ตัวอย่างด้านล่าง ใส่ props space {...props} => เป็น class ของ element tag h2
// // let props = {
// //     className: 'hello-react-text',
// //     onClick: () => {
// //         console.log('Clicked')
// //     }
// // }
// // <h2 {...props}>Hello Prop {name}</h2>

// Function Component 
// ใน React ต้องตัวแรกตัวใหญ่เสมอ
// ลดความซ้ำซ้อนในการเขียนข้อมูล => สร้าง Function Component ในการสร้างข้อมูลออกมา
// { Fn ({ argument/parameter Fn )} } ; ( ใช้ , ขั้นระหว่างค่า)
// ส่งข้อมูลออกมาจาก Function > 1 ตัวได้
// ใส่ <br> ไม่ได้ => ต้องใส่ <br /> เพราะ JSX อ่่าน tag ปกติไม่ได้ ; หรือทำ <div> ครอบ แยก tag ในแต่ละบรรทัด (block element)
// สามารถเรียกใช้ฟังก์ชันแบบ JSX (HTML?) ได้ => <Fn key='string' key={value}>
// props ที่ส่งเข้ามา ไม่สามารถ reassign(เปลียนแปลง) ค่าใหม่ใน Fn ได้ ( เป็น read-only แก้ไขไม่ได้ ) => Input == Output เสมอ
// การแยก Companent ต้องคำนึงถึงความสัมพันธ์ด้วย ถ้าสัมพันธ์กันก็ไม่ต้องแยกออกจากกัน










// Create React App
// code ที่แชร์กับคนอื่นๆ == "packages" หรือ "library" 
// เวลาเราสร้าง project ขึ้นมาเราจะ initialize npm ขึ้นมาก่อนใน project ของเราด้วยคำสั่ง npm init
// (npm init -y => จะ generate file package.json ให้)
// => จากนั้นติดตั้ง package ต่างๆ ใน project ด้วย npm install => npm จะทำการ save package ที่ติดตั้งไว้ใน file ที่ชื่อว่า packages.json
// (npm install <packageที่ต้องการ> ; <packageที่ต้องการ> ดูได้จาก npmjs.com)
// เมื่อเรา install เสร็จ จะมี node_modules ขึ้นมาใน Project โฟลเดอร์เป็นที่เก็บ code ของ package ที่ install มา !!(node_modules จะไม่ push ขึ้น git repro)
// => เนื่องจากเราไม่ push node_modules ขึ้นไปบน git repository เวลาเรา clone repository นั้น ๆ ลงมา เราจะต้อง npm install เพื่อติดตั้ง packages ที่เกี่ยวข้องใน project นั้น ๆ ก่อนเสมอ ซึ่งมันจะ install packages อะไรบ้างนั้น npm จะไปอ่าน package list จากไฟล์ packages.json ของเรา

// npx เป็นเครื่องมือที่ทำให้เราสามารถที่รัน package ของ node ขึ้นมาได้เลยทันที
// cmd => npx create-react-app my-app (อย่าลืม cd หา path ที่ต้องการก่อน) ; my-app คือขื่อโฟลเดอร์ที่จะสร้าง
// npm start ใน cd โฟลเดอร์ข้างบน

// Module Import & Export
// แยกไฟล์ code ของเรา Export ออกมา / Import เข้ามา => เพื่อง่ายต่อการดู มี 2 วิธี
// 1. Named Import & Export => Export ชื่อ Fn => Impert {ชื่อ Fn} from "PATH"
// 2. Module(default) Import & Export => Expoer default + ชื่อ Fn => Impert ชื่อ Fn from "PATH"










// React : State Concept
// สร้างด้วย React.useState
// import React, { useState } from 'react'; แล้วประกาศตัวแปร [value , key] = Fn(value)
// เปลี่ยนแปลง state => เปลี่ยนแปลงผ่านตัว setState เท่านั้น เปลี่ยนแปลงตัว state ตรงๆเลยไม่ได้





// Component Design
// แยกย่อย จาก ใหญ่ > เล็ก
// คิดถึง 3 อย่าง สิ่งนี้คืออะไร ทำอะไรได้บ้าง มีข้อมูลอะไรที่เกี่ยวข้องบาง(เปลี่ยนแปลงได้ไหม ได้==State)

// เขียน CSS ใน React App
// วิธีดั้งเดิม มี 2 วิธี => เขียน external เขียน className ให้ตัว element => import .css เขามาใน app.js
// อีกวิธี inline style => แต่ style={} ต้องเขียน Obj ใน Property style เช่น style={{color:"red",}}

// Emotion เราสามารถเขียน Styles ด้วย Emotion ได้หลายแบบ
// CSS in JS ด้วย Emotion
// https://emotion.sh/docs/introduction
// ลงด้วย 2 คำสั่ง ด้านล่าง
// npm install --save @emotion/react
// npm install --save-dev @emotion/babel-plugin
// ใส่คำสั่งไว้บนสุดของ App.js
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// The CSS Prop
// css ปกติเขียนยังไง css prop เขียนแบบนั้น
// ทำให้เขียน inline style แบบเดิมได้ => ไม่ต้องตั้งชื่อ class ; ฝังอยู่ในตัว inline เลย ดูได้ง่าย ; แต่รก
// วิธ๊เขียน css = {css` propety:value;  propety:value; `}

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 




































































