// พื้นฐานในการจัดการเว็บเพจของเรา
// DOM = Document OBJ Model
// มองทุกอย่างใน HTML เป็น OBJ ที่สามารถจัดการได้ ทุกอย่างอยู่ภายใต้ GLOBAL OBJ = OS ของเรา 

// BOM = Browser OBJ Model
// Navigator เช็คว่าผู้ใช้ มาจาก Browser / Platform(OS) ไหน
// Location บอก path ว่าเราอยู่ที URL อะไร แล้ว redirect ไป URL อะไร 
// location.assign('URL') redirect ไปยัง URL ที่กำหนด
// replace กด BACK ไม่ได้

// DOM (ส่วนใหญ่เขียนใน <script> = เป็นJS?)
// มองทุกอย่างให้เป็น OBJ (รวมถึง comment) ; สนใจสุดๆ คือ HTML TAG
// บอกว่าหน้าตาเว็บเป็นยังไง
// DOM มองออกเป็น Node 3 ตัว
// 1. element OBJ Node พวก tag และ element <= แก้ไขมากที่สุด สนใจมากสุด
// 2. text Node ข้อความ <= เข้าถึงผ่าน element Node แทนได้
// 3. comment Node พวกที่คอมเมนต์ไว้

// document.body คือ OBJ แทนตัว tag <body>
// เช่น document.body.style.background = 'สี'; คือเปลี่ยนสี bg ของ tag body

// Propertie Method ของDOM
// Node identification บอกเอลักษณ์ของ Node นั้นๆ ; nodeName บอกประเเภทของ Element ออกเป็นตัวพิมพ์ใหญ่ 
// เข้าถึง hierarchical structure โดยมองหมดทั้ง 3 Node
// พวกคำสั่งเข้าถึง => parentNode, nextSibling, previousSibling, firstChild, lastChild.

// การกด enter การกด space => Node ยังมองว่าเป็น text node

// การเข้าถึง DOM
// ขั้นต้น เข้าถึงไได้แค่ <body> = document.body ; <head> = document.head => เข้าถึง head และ body ได้ด้วย JS นี้
// ถ้าใส่ JS Node บน script ใน tag head เช่น alert document.body == Null
// head body เป็นลูกของ html หลาน(Descendants)ของทั้งคู่ คิอ element ทั้งหมดในพวกมัน
// childeNodes != Array
// Siblings คือระดับเดียวกัน 

// Element-only navigation
// ใช้ properties ที่มีคำว่า ...Element... อยู่ในคำด้วย
// loop ในการหาทั้งหมด
// for (let elem of document.body.children) {
//     alert(elem); // DIV, UL, DIV, SCRIPT
// }

// getElement*, querySelector*
// document.getElementById() ใช้ id ของ Element ในการค้นหา
// document.querySelectorAll() เอาทุกตัวที่ตรงกับที่กำหนด
// document.querySelector() เลือกแค่ตัวแรกสุด => มีค่า == document.querySelectorAll()[0]
// สามารถใช้เจาะเข้าไปข้างในลูกของมันเรื่อยๆได้ จากตัวแม่มัน โดยหาตัวใหญ่ก่อนแล้ว กำหนดตัวแปร แล้วใช้ ตัวแปรที่กำหนดจากการหาตัวใหญ่.querySelector ได้

// ข้อสังเกต มันมี s = return หลายตัว 
// elem.getElementsByTagName(tag) เอาตามชื่อ TAG ทั้งหมด return เป็น collection 
// elem.getElementsByClassName(className) เอาตามชื่อ Class ทั้งหมด return เป็น collection
// document.getElementsByName(name) เอาตามชื่อ name = '_' ทั้งหมด return เป็น collection ; ไม่ค่อยได้ใช้แล้ว

// อย่าตั้งชื่อ ID ด้วยตัวเอง ระวัง Error => ต้องใช้ \\ คั่นหน้าระหว่าง # กับ เลข

// EX01 2.14 03 ใน index.html










// Slide DOM 02

// DOM node แต่ละอน properties ต่างกัน
// elem.nodeType return เป็น Number => 1 = element node ; 3 = text node ; 9 = DOM Obj
// tagName มีเฉพาะ Element Node
// nodeName ใช้ได้กับ DOM Node ทั้งหมด
// innerHTML == ทั้งหมดในตัวแม่ รวมถึง TAG return เป็น String ; สามารถใช้แก้ไข/เปลี่ยนมันทั้งก้อนได้เลย ; ใส่ผิดรูปแบบ เช่น ลืมปิด tag มันก็จะซ่อมให้ด้วย
// outerHTML เหมือน inner แต่คืนค่า element แบบเต็ม
// innerTEXT == เอาแค่ข้อความในนั้น ไม่รวมตัว TAG

// การสร้าง/ลบ/แทรก Element ด้วย DOM Node Properties ดูใน index02.html
// สร้างด้วยคำสั่ง document.createElement('p') ในวงเล็บคือ ชื่อ TAG ; แล้วใช้ innerHTML กำหนดข้อความข้างใน pTag.innerHTML = 'insert TAG' 
// ใช้ elem.classname กำหนดค่าของ class pTag.className = 'alert' 
// ตัวแปรสำหรับแทรกตำแหน่ง
// before ; , after ;
// แทรกเข้าไป หน้า / หลัง ของ element ตั้วนั้น (ต้องระบุตัว element ที่เลิอกก่อน)
// append ; , prepend ;
// แทรกเข้าไป ลูกคนสุดท้าย / ลูกคนแรก ของ element ตัวนั้น (ต้องระบุตัว element ที่เลิอกก่อน)

// การลบออก ใช้ elem.remove()
// การแทรกแบบเขียนเป็น String ของรูปแบบที่ต้องการแทรกเลย ใช้ elem.insertAdjacentHTML(where, html) โดย where มี parameter ตามด้านล่าง
// beforebegin == ก่อนElem ; afterbegin == เข้าไปในจุดเริ่ม Elem ; beforeend == เข้าไปในจุดสุดท้าย Elem ; afterend == หลังElem ;

// การ clone Node
// true เอาข้างนอกด้วย false เอาแค่ข้างใน elem.(คำสั่งแทรก)(boolean)

// EX02 2.7 02 ใน index02.html
// การลบ กับทับค่า elem.innerHTML เหลือโครงไว้ ลบแค่ข้างใน ; elem.remove() ไม่เหลืออะไรเลย

// การเปลี่ยนค่า class ของ tag
// กำหนด document.querySelector() ให้มัน 
// 1. แล้วเอาไป .className เพื่อเปลี่ยนค่า class ของมัน => ไม่ดีต้องพิมพ์ใหม่ทั้งค่า
// 2. .classList แสดงรายชื่อ class ที่มีทั้งหมด แล้วเลือกว่าจะทำอะไร ด้วยคพสั่ง elem.classList.'เลือก'
//      2.1 .remove('ค่าที่จะเอาออก') ลบค่าออกไป
//      2.2 .add('ค่าที่ต้องการจะเพิ่ม') เพิ่มค่าเข้าไป
//      2.3 .toggle('ค่าที่ต้องการจะเพิ่ม') เปิดๆปิดๆค่านั้น (เช่นมีอยู่ => เอาออก ; ไม่มี => เอาเข้า) 









// Slide Event
// Event == เหตุการณ์ต่างๆ ที่เกิดขึ้น เช่น คลิกเมาส์ ดับเบิ้ลคลิก คลิกเมาส์ด้านขวา กดหรือปล่อยปุ่มบนคีย์บอร์ด กด submit form ซึ่งส่วนใหญ่จะเกิดขึ้นกับ DOM บน browser

// Mouse Event == event เกี่ยวกับเมาส์ 
// click เกิดเมื่อผู้ใช้ click ลงบน element
// contextmenu เกิดเมื่อผู้ใช้กด click ขวาลงบน element
// mouseover / mouseout เกิดเมื่อผู้ใช้เลื่อน mouse เข้ามา / ออกจาก element
// mousedown / mouseup เกิดเมื่อผู้ใช้ กด / ปล่อย ปุ่ม click บน element 

// Keyboard Event
// keydown / keyup เกิดเมื่อผู้ใช้ กด / ปล่อย ปุ่มบน keyboard

// Form Event
// submit กดหรือปล่อยปุ่ม submit ใน form
// focus เมื่อกดลงบน element
// change เมื่อเปลี่ยนแปลงค่าใน element

// Event handlers การจัดการ event ที่เกิดขึ้นบน Browser
// 1. HTML-attribute ; เพิ่ม attribute on<ตามด้วยชื่อevent> (on<event>) ไปบน element เช่น click => onclick
// <input value="Click me" onclick="alert('Click!')" type="button">

// 2. DOM property ; เพิ่ม property on<event> เข้าไปใน DOM โดยให้ทำงานอะไรก็ใส่ elem(ที่เลือกแล้ว).on<event> = function {}
// document.querySelector().onclick = function {};

// 3. Event listener (ดีที่สุด)
// add event ให้กับ DOM OBJ ที่เราเลือกมา
// element.addEventListener(event, handler, [options]); 
// handler ควรเป็นฟังชันก์ ที่สร้างแยกมาแล้วจากข้างนอก
// event == อีเวนต์อะไรที่ให้ทำ ; handler == function handler ; option ไม่ใส่ก็ได้ == จำนวนการเล่น
// addEventListener ; add handlers functions กี่อันก็ได้ ไม่เหมือน 2 อันแรก
// สามารถยกเลิก handler function ได้ โดยใช้ removeEventListener ; 
// แต่ต้องประกาศฟังชัน์ข้างนอกแยกออกมา ไม่ใช่ทำใน fucntion ใน addEventListener => ไม่งั้นยกเลิก function ไม่ได้

// EX03 Lab1 (ขี้เกียจเขียนแยก เขียนในนี้แทน)

// submit ต้องอยู่ใน tag form ถึงจะ submit ได้
// button ใน form ต้อง type=submit เท่านั้นถึงจะใช้ในการส่งข้อมูลได้
// <form class="button" value="submit form" onclick="alert('Form is submitted')">
// <button>Submit</button>
// </form>

// EX03 Lab1
// 1. <input id="button" value="submit form" onclick="alert("Form is submitted")" type="button">
// 2. document.querySelector('button').onclick = function() { alert("Form is submitted") }
// 3. elem = document.querySelector('button')
// fucntion submit() { alert("Form is submitted") }
//      elem.addEventListener('submit', submit)

// EX03 Lab2
// elem.removeEventListener('submit', submit)

// Access the element  : this
// เข้าถึง property ของ element ที่ทำให้เกิด event นั้นได้
// ใส่ this ใน handler function เช่น on<event>='alert(this.innerHTML)'

// Event OBJ ตัวบอกข้อมูล ของeventนั้นๆ
// เมื่อเกิด on<event> ที่กำหนด ตัว function จะ สร้าง OBJ event ผ่าน handler function คืนมาให้เรา
// ทำได้โดยการแทนค่า handler function = function(event) แล้ว console.log(event)
// OBJ Event ที่สำคัญ Property Target => หาได้โดย console.log(event.target)
// .addEventListener('change', function(event) {console.log(event)}) => เมื่อมีการเปลี่ยน value (on<change>) จะ log event ออกมา
// e.target.name ไว้หาตัว input มันคืออะไร ; e.target.value ไว้หาตัว value ที่กรอกลงไป


// defaultPrevented: false ไม่มีการป้องกัน action พื้นฐานของ browser
// Browser default action
// action ที่เกิดอัติโนมัติของ browser ; ปิดได้โดยคำสั่ง event.preventDefault() ใส่ไปใน function ของ addEventListener
// ตัวอย่าง
// const atag = document.querySelector('a');
//   atag.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('Redirect to google is disabled');
// });

// EX04 Lab3 (ใน index02.html ก็มี)
// <form><button class='stop'>Submit</button></form>
// elem = document.querySelector('.stop')
// console.log(elem)
// elem.addEventListener('click' , (e) => {
//     e.preventDefault();
// } )
// เฉลย
// form = document.querySelector('from');
// form.addEventListener('Submit' , (e)=> {
//     e.preventDefault(); })

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