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

// Styled Component
// run คำสั่ง npm install --save @emotion/styled => แล้วใส่ import styled from '@emotion/styled' ไว้ในคำสั่ง JS ของเรา แล้วเขียน styled component ได้เลย
// เขียน styled componentแบบ ตัวแปรตัวแรกตัวใหญ่ = styled.ชนิด ``; (ใส่styleลงใน brakcet (alt 96))
// ตัวอย่าง const StyledButton = styled.button``;
// แล้วไปใส่ < ขื่อตัวแปรที่ประกาศ > ครอบตัวที่ต้องการใช้ style ; primary ไม่ต้องใส่ ={boolean} ก็ได้ default = true
// <StyledButton primary={true}>Edit</StyledButton>
// สามารถใส่ function ใน style ได้
// color: ${function(props) {(props.primary ? 'crimson' : 'cornflowerblue')}};

// Children Prop
// ใช้ style อันเดียวกับหลายๆอย่างใน html > ทำ syled compenent + children prop เพื่อง่ายต่อการใช้ซ้ำ 

// การเปลี่ยนหน้าเพจ => React Router DOM
// สร้างโฟลเดอร์เพจ (เพื่อสร้างเพจ Component) > สร้าง .js ใหม่ สร้าง Fn Compenent ในนั้น return ค่าเป็นหน้าเว็บที่เราต้องการ
// หน้าแรกของ App import ด้านล่าง และคำสั่งเพิ่มเติมตามด้านล่าง
// import { BrowserRouter , Switch , Route } from 'react-router-dom';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route path='/' component={HomePage}></Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
// import HomePage from './pages/HomePage' ; ทำการ import Fn Compent จากหน้าที่ต้องการ (อย่าลืม expoort ออกมาด้วย)
// * path == หน้าเว็บของเรา ถ้าใส่ path ตัว http://localhost/ ต้อง ตามนั้นด้วย เช่น path='./home' จะเข้าหน้าเว็บหลักด้วยการ localhost/home
// * อยากได้หน้าเว็บเพิ่ม > เพิ่ม <route> เข้าไปอีก ตามต้องการ

// ทำ link ย้ายไปหน้าอื่น
// import { useHistory } from 'react-router-dom'
// โดยกำหนดตัวแปร let history = useHistory() เพื่อเอา useHistory ที่เรา import เข้ามา มาใช้
// ใส่ onClick={handleAddPostClick} โดยตัวใน {} คือ Fn แล้วก็ไปเขียนฟังก์ชัน push path / ข้างล่างเข้าไปหลัง url
// function handleAddPostClick() {
//     history.push('/add-post-page')
//     console.log('test click ')
// }
// * การ push '/' จะกลับไปหน้าแรก (หน้าไหนก็ตาม ไปหน้า http://localhost:3000/)
// * เหมือนหน้าแรกเราเป็น ARR ; การ push '/path' อะไรก็ตาม เหมือนเราเอามันไปต่อใน ARRแรก แล้ว redirect ไปหน้า path นั้น ; ตัวค่า ARR หน้าแรกเป็นเหมือนเดิมตลอด
// * EXAMPLE หน้าแรก my-app/ == ARR[my-app/] ; push home => ไปหน้า my-app/home แล้วถ้า push contact ต่อ จะไปหน้า my-app/contact ( push เข้าไปหน้า ARRตัวแรก ; ARR[my-app/] )
// * ถ้า path HomePage ใน <route> เป็น '/' เฉยๆ ต้องไว้ข้างล่าง ไม่งั้นจะไป หน้า AddPostPage ไม่ได้





// Asynchronous Operation
// ฝึกดึงข้อมูลจาก sever > ใช้ Fn fetch()

// Fn useEffect เป็น Fn ของ React ถูกเรียกใช้แค่ 1 ครั้งเท่านั้น (ต้องใส่ [] ตรงที่เหมือนตำแหน่ง initailValue ด้วย)
// fetch return เป็น Promise ต้องใส่ await (ทำให้ต้องใส่ async ด้วย)
// เลยต้องใส่ Fn ซ้อน Fn เพื่อให้ใส่ async + await ได้
// await fetch ข้อมูลจาก sever > awit แปลงข้อมูลที่ได้จาก sever ด้วย json
// import useState แล้วสร่าง Fn useState > ใช้ useState แปลงข้อมูลที่ได้ นำออกมาแสดงบนหน้าเว็บ (json ได้ { [ { } ] } => แปลงด้วย useState เป็น [ { } ])
// State ของ post เป็น ARR ของ OBJ > จะเอาไปแสดงผลบนหน้าเว็บ

// .map ARR ของ OBJ ตัวบน => เป็น ARR ของ HTML Element เพื่อแสดงผลได้
// จะ .map HTML ARR หลายๆตัว ต้อง ให้มีความ Uniqe ของข้อมูลด้วย (เช่นในตย.คือ id => key={post.id})

// * data.data คือ State ของ Posts
// * useState return [state, setState] เปลี่ยนแปลงค่าState ของ setPosts
// * State คือ ข้อมูลที่สามารถเปลี่ยนแปลงได้ ในหน้าเว็บ ; Post มีหลายชิ้น และในแต่ละตัวมีข้อมูลเยอะ เลยต้องเป็น [ { } ]
// * เรียกใช้ Fn useState => State ตั้งต้น = [ ] ต้อง fetch ข้อมูล post มาจาก sever => เก็บไว้ในตัวแปรที่ชื่อว่า DATA ; ทำการ set ตัว post ที่ได้กลับมาจาก sever => เข้าไปอยู่ใน state ที่ชื่อว่า post

// * ทบทวน UseState() และทวน code UseState() fetch และ .map หน้านี้
// * State == ข้อมูลที่สามารถเปลี่ยนแปลงได้บนหน้าเว็บ ; หน้าเว็บเปลี่ยนไปเมื่อทำ action นั้นๆ (renderใหท่?)
// * Post App สามารถ Add Edit Delete POST ได้ ; ข้อมูล Posts ที่สามารถ Add เข้ามาได้ ==> Post ข้อมูลที่ามารถเปลี่ยนแปลงได้
// * State ของเราจะเป็น [ { } ] (ARR ของ OBJ) ARR เพราะมีข้อมูลของชุดข้อมูลหลายๆชิ้น แล้วข้างในมีข้อมูลหลายๆชิ้นอีกที [ { title:..., content:... } ]
// * UseState เป็นฟังก์ชั้นที่ทำให้เราสร้าง State ได้ใน Component ของเรา 
// * State ตั้งต้นของเราจะเป็น ARR เปล่า เพราะไม่มีข้อมูลอะไรมาตั้งแต่แรก ; useState จะ return ARR Index 0 == state // Index 1 == Fn ที่เปลี่ยนแปลง state ตัว[0]
// * ใช้ ARR Destructering สร้างตัวแปรใหม่มา .map กับ ARR posts กับ setPosts ; setPosts สามารเปลี่ยนแปลงตัว state ของ Post ได้
// * ประมาณ จานอาหารที่เปลี่ยนแปลงอาหารข้างในได้
// * เข้า Homepage fetch ข้อมูล post มาจาก sever ; request ผ่าน API ; แกะข้อมูลของ post เก็บไว้ในตัวแปร DATA
// * DATA เป็น OBJ ที่ key==data value==ARR แยกได้ ARR => ต้อง access DATA.data ; ต้อง setPosts DATA.data ไปเปลี่ยนแปลง state เป็นค่าที่เรา fetch มา
// * data ต้องเป็น ARR เพราะข้อมูลเป็นหลายตัวๆใน (post มากกว่า 1 post) ; ARR ข้อดี คือ array.map access ข้อมูลได้

// * ข้อมูลที่ส่งกลับมา API ไม่จำเป็นต้องเป็น { [ { } ] } แต่ถ้าไม่เป็นแบบนี้จะเพิ่ม key อื่นอีกไม่ได้ (จากตัวอย่างเห็นแค่ key data : { [ ] })





// Error Handling
// ถ้าการ fetch เกิด Error ใน code ที่เราเอาไป fetch เราต้อง handle ได้ถ้ามันเกิดการ Error ขึ้น => 
// ใช้ try { } catch(error) เพื่อดักจับ Error => สร้าง useState สำหรับเมื่อเจอ fetch แล้ว code Error จะแสดงผลออกมาเป็นอีกแบบนึง
// {isError && <h1>Error!. Plz try again later!</h1>} ; ใส่ไว้ก่อน state.map ใน return Fn ของ Homepage


// * ถ้างง วงเล็บ ; ให้ใช้ตัว drop down ปิด จะดูโครงสร้างได้ง่ายขึ้น 





// หน้า ADD POST
// เป็นform กรอกข้อมูลได้ กดAddได้ => state == title , description
// ใส่ onChange={Fn handle} เพื่อให้คอยรับเมื่อ input มีการเปลี่ยนแปลง ; ให้เมื่อ user พิมพ์แล้วรับค่า

// ใน Fn Handle(event) ; event OBJ ข้างในมี key==target และในtargetมี key==value
// * น่าจะประมาณ event = { target: {defaultValue: value,}, } ; โดย value คือค่าที่พิมพ์ (evnet การพิมพ์)
// * event อยู่แค่ใน browser เป็นตัวที่ติดมากับ browserอยูแล้ว => เราจะเอา value ของ title กับ description มา save ลงใน database

// สร้าง Fn รองรับการเปลี่ยนแปลง(พิมพ์) (event) และ ทำการเจาะ OBJ เข้าไปในค่า defaultvalue ของมัน เพื่อเอาค่ามา เช่น setTitle(event.target.value);
// เอา state มาใส่ในตัว value="_stateใส่ตรงนี้_" ของตัว <input> (เป็น pattern ที่ต้องทำตาม)
// save ข้อมูลลงใน database เป็น METHOD == POST
// กำหนด type='submit' ให้ปุ่ม เพื่อกดแล้ว submit ได้ => เปลี่ยน div เป็น form ครอบ input และปุ่ม
// ใส่ event.preventDefault() ป้องกัน การทำงานทั่วไปของ Browser เช่น ป้องกันการ refresh จากการกด submit button form
// ต่อ sever ด้วยการ fetch ; async ครอบนอก await fetch ; await fetch ทำตามกฎ API Document linkต้อง path /posts/ ; และ method: "POST"
// Method ||	Path   ||	Description  ||	Request Body
// POST	  ||  /posts/  ||	Create post	 || { title: "post title", "content": "post content" }
// body ต้องใส่ : JSON.stringify( Request Body ) ; ทำการแปลงเปลี่ยนข้อมูล OBJ > JSON แล้วส่งข้ามระบบเน็ตเวิค จาก FRONT >>> BACK
// แปลงให้เป็น String ในรูปแบบ JSON ก่อนส่งไปหลังบ้าน ; ส่งข้อมูลผ่านตัว body ; header แจ้งว่า จดหมายที่จะส่งอยู่ในรูปแบบ JSON
// เก็บ respone จากการ fetch ข้อมูลไว้ โดยกำหนดตัวแปรเก็บข้า = await fetch; 
// ให้กด Add แล้ว redirect ไปหน้าแรก => ด้วยการ import { useHistory } from 'react-router-dom' ; แล้ว กำหนด let history = useHistory();
// เขียน ให้เช็คเงื่อนไข ถ้า respone มัน OK > ให้ history.push ไปที่หน้าแรก 

// * history อยู่ในรูปแบบเหมือน ARR แต่มันคือ STACK คล้ายๆจานซ้อนกัน การกดเปลี่ยนหน้าไปเรื่อยๆก็เหมือนจานมาซ้อนกันเรื่อยๆ




// ทำการเปิด sever ด้วยคำสั่ง ' docker run -dit -p 8000:8000 --rm --name mypostapp napatwongchr/postapp ' 






// DELETE การลบ POST
// ใส่ Fn handle onClick ที่ปุ่ม delete เข้าถึงค่า value ของ id ของ post ทีสร้างด้วย useState ตอน update หน้า
// แล้วเขียน Fn async await fetch ; ทำตามกฎ API Document => DELETE linkต้อง path /posts/id ; และ method: "DELETE"
// ทำให้ DELETE แล้วหน้า refresh (re-render / fetch ข้อมูลใหม่) ให้กำหนดค่า let response = await fetch ; แล้วสร้างฟังก์ชัน if เช็คว่า response.ok (กดDELETE fetch ผ่าน) ให้ filter return เอาค่า ID ที่เราไม่ได้ลบกลับมา (เอาที่เราลบออก) 
// if (response.ok) { let newPosts = posts.filter( function ( post ) { return post.id !== postId; } ) ; setPosts ( newPosts ) ; } แล้วทำการ setPost ใหม่จาก filter นั้น

// EDIT การแก้ไข POST
// สร้างหน้าใหม่ SinglePostPage.js ; เพิ่ม pathและimport ใน App.js ; 
// ทำให้หน้า HomePage กด title แล้ว redirect ไปที่ SinglePostPage ได้
// ใส่ Fn onClick ให้ title ให้ไปหน้า SinglePostPage => OnClick Fn return history.push('/pathของเรา')
// อยากให้คลิก title แล้วไปหน้า SinglePostPage ของข้อมูลที่คลิ๊ก => ใช้ '/:postId' ต่อใน path App.js /และ "/' + post.id" ใน HomePage.js 
// SinglePostPage > state คือ title กับ content
// ใข้ import { useParams } from 'react-router-dom' > เพื่อใช้งาน Fn useParams ใน SinglePostPage

// * Params === Parameters > เป็น OBJ ของ parameter ที่ใส่ไว้ใน Url Path ของเรา (จากตัวอย่าง == postId)

// ใช้ import { useEffect } from "react" > เพื่อใช้งาน Fn useEffect ใน SinglePostPage

// * fetch ครั้งเดียว ใช้ useEffect() เป็น Fn import จาก react ; เก็บค่า value ของ key นั้น OBJ (เรา click title id อะไรมา คืนค่า post id ที่ click นั้น?)

// กำหนด Fn useState รับ post 1 post => [post, setPost] = userState({}) ให้เป็น OBJ เปล่าๆ เพราะ data.data เป็นข้อมูลที่ออกมาด้วย OBJ
// กำหนด setPost(data.data) เพื่อเอา State มาใช้ => เอาข้อมูล Post แล้วนำไป display ในหน้าเพจของเรา (สร้างตัว HTML Component มารับด้วย)





// การใช้ style ข้ามหน้า / ใช้หลายๆที ดึงจาก .js เดียว
// ทำให้ปุ่ม Add ในหน้า /add-post-page มี style เหมือนปุ่ม Add Post ใน home 
// สร้าง folder Component ใน src > สร้าง button.js ใน folder Component
// โยก Style ของตัวปุ่ม StyledButton Add Post > move > ไปที่ button.js 
// import styled เข้ามาจาก @emotion เพื่อใช้งาน Style CSS แบบ JS ได้ ; สร้าง Fn Button return เป็น <style>'_textของปุ่ม_'</style>
// export ออกมาแล้ว ; import ทุกที่ที่มีการใช้ ; เนื่องจากใช้หลายที่ text ต่างกัน => Fn Button(props) return เป็น <style>{props.children}</style>
// จะได้เปลี่ยน text ได้ เมื่อเขียน <Button>'_textของปุ่ม_'</Button> ; '_textของปุ่ม_' == Children ของ Button; อยู่ระหว่าง component <></> == Children

// ทำให้ใช้ Fn Handle / OnClick ทำงานได้ => ใส่ ' onClick={props.onClick} ' ในตัว Component button.js => ใส่ในตัว <button> แต่ละหน้าที่ export/import ไปใช้ด้วย
// แต่ถ้าเยอะเกินมันจะรก => ใช้การ destructoring ใส่เป็น {...props} แทน จะได้ทุกอย่างมาเลย ไม่ต้องเขียนทีละตัว





// Fn Component แบบปกติ
// อยากทำตัวนับเลข + , - , reset
// สร้างเพจ CounterPage.js ใน pages + export ออก ; แล้ว import CounterPage from ./pages/CounterPage และสร้าง router Path ใน App.js
// สร้าง Counter.js ในโฟลเดอร์ component import { useState } from 'react' สร้าง Fn Component เป็น HTML Component ที่มี Fn จากตัว useState [ {counter} , {OnClick 3 ตัว ที่เป็น Fn return setCounter + - 0} ]ที่รับค่ามาจาก [counter, setCounter] = useState(0)
// เสร็จแล้ว export ออก => import เข้า CounterPage.js

// Fn ใน Class Component (Fn Component แบบ Class Component)
// เริ่มเหมือน Fn Component แบบปกติ => สร้างหน้า CounterPage.js แล้ว export ออก ; App.js สร้าง route รองรับ และ import เข้า
// import ExtraCouter( หน้าที่จะไว้เขียน Class Component ) เข้า CounterPage
// สร้าง ExtraCouter ใน โฟลเดอร์ component ; ทำ Export ออกไว้ => ทำการ import React from 'react' สร้าง class Component ชื่อFn extends React.Component {}
// ทำการ  constructor(props) { super(props) , this.state = {counter:0} ) ; เขียนคืนค่าหน้าเว็บเป็น render () return (หน่าเว็บ) โดยหน้าเว็บHTML Component ใช้ตัว onClick={this.} ในทุกอันแทน
// เขียน Fn Handle > setState {this.setState(fn(state) { return { counter: state.counter +1 } } )}
// แต่ตรง handle Fn แต่ละตัว ต้องเขียนแบบ Arrow เพื่อให้ใช้งาน this ได้ (scope this จะกว้างขึ้นไปอีก 1 ชั้น ; ถ้าเขียน Fn Declaration จะหยุดแค่ตรง handle ไม่ไปถึง Class Component (Extracoutner extends) ทำให้ this == undefined) 

// State ใน Class ; สร้าง Fn Constructor ใช้ this.state.counter ( counter อยู่ใน OBJ ) ; *ไม่มี function keyword อยู่หน้า function ใน class*
// ในตัว <> ของ HTML Component ใส่เป็น {this.Fn}
// setState มาจาก class ExtraCounter extends React.Component เป็น Build-in Fn





// Component Lifecycles ; https://github.com/napatwongchr/intro-to-react/blob/main/lessons/lifecycle-methods.md
// Mounting : Component กำลังเอาไปแปะในตัว DOM
// Updating : Component มีการเปลียนแปลง State หรือ props เปลี่ยน => มีการ re-rendor ใหม่
// UnMounting : Component ถูกเอาออกไปจาก DOM

// shouldComponentUpdate() return เป็น boolean 
// componentDidMount() สามารถเอาไปประยุกต์กับการ fetch ข้อมูล / 
// componentDidUpdate() ประยุกต์คล้ายๆกับ DidMount ; ใช้เวลา request ข้อมูลจาก sever  ( ควร compare prevProps กับ props เสมอ ๆ ไม่งั้นจะติด Loop )
// componentWillUnmount() ไว้เวลามีคน request แล้วยกเลิกกลางคัน ดักไว้ แล้วสั่ง cancel request ได้




// EDIT (การบ้าน? step-by-step?)
// fetch ข้อมูล มาใส่ใน input > แก้ข้อมูลแล้วส่งกลับไปที่ sever
// สร้าง Page EDIT ; ใส่ Router Path ; ทำปุ่ม Edit > react-rounter-dom , history.push > link ไปปหน้า EDIT page ; เอาข้อมูลเดิม มาใส่ใน Input (คล้ายๆหน้า SinglePostPage)
// กด Update ต่อ sever update ข้อมูลเข้าไป interact กับ API ; redirect ไปหน้า home เห็นข้อมูลที่เปลี่ยนแปลงไป





// * useEffect มันคืออะไร

// React Hooks https://github.com/napatwongchr/intro-to-react/blob/main/lessons/hooks.md
// function ที่ทำให้เราใช้ Feature ของ React ได้ใน Fn Component
// State Hook == { useState } Fn ที่ทำให้เราใส่ state เข้าไปใน Function component ได้
// Effect Hook == { useEffect }
// side effect (from useEffect) ~ == call fetch ข้อมูลจาก sever ; sever ตอบให้ข้อมูลกลับมา แล้วนำไปใส่ใน state ของเรา
// มี side Effect ; เราต้อง control ได้ ว่ามันเปลี่ยนแปลง State อะไรของเราได้บ้าง จากการทำ Outside Process ของมัน
// useEffect() เป็น Fn ที่รับ Fn เข้าไปอีกทีนึง ; จะถูก run เมื่อ state เปลี่ยน / compenet มันมีการ render และ re-render
// ตรง ,[]) ที่เหมือน initailValue ของ Fn Reduce === ARR Dependency list มีอะไรที่อยากให้จับตาดูไหม
// EX. [] == run ครั้งเดียว ; [counter] == จะ run เมื่อ counter มีการเปลี่ยนแปลง
// useEffect สรุป เป็นการ sync side effect เข้ากับ state application ของเรา
// fn ที่ส่งเข้าไปใน useEffect จะ return fn อีกทีนึง === cleanup Fn
// * หน้า home useEffect รันครั้งเดียวจากการที่ต้องการให้ fetch แค่ครั้งเดียว ; ใส่ [] ไม่ track อะไรเลย เลย run ครั้งเดียว ; แต่ใน counter เรา track counter ทำให้ run หลายครั้ง



// counter component app มี state ; ต้องการ state ข้างใน [counter] => ออกมา display ข้างนอก [counter]
// เอา state ข้างใน component function() ออกมาวางข้างนอก => และส่งเป็น function(props) + ใส่ props. ให้กับทุกค่าข้างในที่ต้อง access (จากข้างนอก เพราะ useState ไปอยู่ข้างนอกแล้ว) ข้างนอก => ตัวข้างในจะสามารถ access ตัว counter / setCoutner นั้นได้

// เอาตัว const [counter, setCounter] = useState(0); move มาวางไว้ข้างนอก (วางไว้ที่หน้า Page นั้นๆที่ต้องการใช้) => แล้วใส่ {props.counter หรือ props.setCounter} ตรงที่ต้องใช้ค่านั้น === ข้างในไม่ต้องใช้ useState แล้ว access ผ่านตัว props เอา
// ข้างใน ใส่ functuon(props) ; และ ทุกตัวที่จะใช้ useState จากข้างนอก => ข้างในต้องใส่ props. ข้างหน้าทั้งหมด (ทั้ง counter และ setCounter)





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




































































