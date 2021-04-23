const Sequelize = require('sequelize');
const { DataTypes , Op } = require('sequelize');

const sequelize = new Sequelize('sequel_begin','root','admin1234',{
    host: 'localhost', dialect:'mysql'
}); 
// params เป็น ( ชื่อDatabase, userที่connect DB, password, { host, dialect } ) 
// * dialect คือ ภาษาที่ใช้ ( tool ) ที่ติดต่อกับ database

const Customer = sequelize.define('Customer', { // auto แปลงเป็นพหูพจน์ให้เรา เติม s es ให้ auto ตามหลักชื่อ table ต้องเป็นพหูพจน์
// // Column id ( เป็น PK ) ไม่ต้องสร้างก็ได้ sequelize สร้างให้อัติโนมัติได้
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: DataTypes.STRING,
        birthDate: {
            type: DataTypes.DATEONLY,
            field: 'birth_date'
        },
        // gender: DataTypes.STRING
    }, 
    {
        tableName: 'customs',
        timestamps: false
    } 
);
// define params > ชื่อ class หรือ Model ที่จะให้มันเป็น ( || ชื่อ table ) ,  
// {} OBJ ที่มี KEY แต่ละตัวเป็น Column ของตาราง โดย VALUE ของ แต่ละ KEY เป็น OBJ ที่บอกคุณสมบัติของ column นั้นๆ ; field:'ชื่อหัวตารางที่ต้องการ', 
// {} OBJ ที่ไว้กำหนด เช่น ชื่อของตาราง (tableName: '') , ไม่แสดงเวลา (timestamps: false)
// * ถ้า OBJ ที่บอกคุณสมบัติมีแค่ค่าเดียว สามารถไม่ต้องสร้างเป็นก้อน OBJ ได้

const createCustomer = async () => {
    const newCustomer = await Customer.create({ name: 'John', address: '190' });
    console.log(newCustomer.toJSON());  // ใชได้กับ OBJ เท่านั้น
    console.log(JSON.parse(JSON.stringify(newCustomer))); // ใช้ตอนทำคำสั่ง query เพราะ return เป็น ARR ***
};

const updateCustomer = async () => {
    const update = await Customer.update(
        { address: '222' }, 
        { where: { id: 2 } } // ถ้าไม่เจอ ไม่ Error return ARR affectedRow == 0 ; [ 0 ]
    );
    console.log(update); // return เป็น ARR affectedRow ที่ได้รับการเปลี่ยนค่า (ค่าใหม่ === ค่าเดิม === 0)
    console.log(JSON.parse(JSON.stringify(update)));
    // console.log(update.toJSON()); ใช้ไม่ได้ เพราะไม่ใช่ OBJ
};

// // ลองสร้าง Fn INSERT แบบ Instance ; แต่ sequelize ไม่แนะนำให้ทำท่านี้ ให้ใช้ Built-in Fn ของเเขาแทน
// const createInstanceCustomer = async () => {
//     const customer = new Customer();
//     customer.name = 'Anna';
//     customer.address = '100';
//     await customer.save();
// }
// // ท่าแนะนำของ sequelize > Built-in Fn
const createInstanceCustomer = async () => {
    const customer = Customer.build({ name: 'Michel', address: '16' }); // เป็น Built-in ของ sequelize *** ที่ไม่ต้องใส่ await 
    await customer.save();
}

const deleteCustomer = async () => {
    const deleted = await Customer.destroy({ where: { id: 7 } }); // WHERE: {} อะไรก็ ลบตรงนั้น ; ไม่ได้จำกัดแค่ table id ใส่ table name ก็ได้
    console.log(deleted); // return เป็น ARR affectedRow ที่ได้รับการลบ
    // console.log(deleted.toJSON()); ใช้ไม่ได้ เพราะไม่ใช่ OBJ
    console.log(JSON.parse(JSON.stringify(deleted))); 
};


// เขียน query
const selectCustomer = async () => {
    const customer = await Customer.findOne({ where: { id: 4 } }); // เป็น Built-in ของ sequelize ; ไม่เจอ return เป็น null
    console.log(JSON.parse(JSON.stringify(customer)));
    // console.log(customer.name + ' live at ' + customer.address);
};

const selectAllCustomer = async () => {
    const customers = await Customer.findAll({ 
        where: { id: 1 },
        attributes: ['id', ['name', 'nickName'], 'birthDate'] // ใส่ attributes > กำหนดหัวตารางที่เลือก (ปกติไม่กำหนดจะ SELECT *) ; ใส่ ['ค่าในตาราง','ชื่อที่อยากให้เป็น'] ; การเปลี่ยนชื่อให้ตารางเพื่อเอามาใช้ในแบบที่ต้องการ
    }); // เป็น Built-in ของ sequelize ; ไม่เจอ return เป็น null
    console.log(JSON.parse(JSON.stringify(customers)));
};

const selectCustomerPK = async () => {
    const customer = await Customer.findByPk(3); // เป็น Built-in ของ sequelize ; ไม่เจอ return เป็น null
    console.log(JSON.parse(JSON.stringify(customer)));
    // console.log(customer.name + ' live at ' + customer.address);
};

const selectAllCustomer2 = async () => {
    const customers = await Customer.findAll({ 
        // where: { id: 1 },
        // attributes: [[sequelize.fn('COUNT',sequelize.col('*')),'count']]
        // sequelize.fn ประกาศใช้ฟังก์ชันของ sequelize ในการนับจำนวน > นับ column ทั้งหมด ผลลอกมาเป็น 'value' โดยมีชื่อ KEY ว่า 'count'

        // where: { name: 'John' },
        // attributes: [ 'name', [sequelize.fn('COUNT',sequelize.col('id')),'total'] ], // ปกติไม่ใส่ === SELECT * ; ถ้าใส่ 

        // group: [ 'name' ], // === GROUP BY 
        // order: [ ['name','DESC'] ] // === ORDER BY ถ้าใส่กำหนดการเรียง ตรงขอบด้วย ARR แล้ว params 1 คือค่าที่จะเรียง params 2 คือ รูปแบบการเรียง

        // // การใช้ Op ( Operator Fn ) ต้อง Import เข้ามาก่อน แล้วใน where: {} ใส่ KEY เป็น ARR [Op._] ( _ แทนค่าของ Operator ของ sql/ภาษาติดต่อdbที่เราใช้ ) : ตามด้วย Value เป็น [ { ARR-OBJ } ] เงื่อนไขที่เราต้องการ
        // // OR
        // where: {
        //     [Op.or] : [
        //         { name: 'Michel' },
        //         { address: '100' },
        //         { id: 1 }
        //     ]
        // }
        // // IN > SELECT * FROM customers WHERE name IN ('John','Anna')
        // where: {
        //     // name : { [Op.in] : ['John','Anna'] }
        //     name : ['John','Anna'] // หรือแบบนี้ก็ได้ สั้นๆ
        // }
        // // LIKE ฿฿ startsWith
        // where: {
        //     name: {
        //         // [Op.like]: 'J%'
        //         [Op.startsWith]: 'J' // หรือทำแบบนี้ก็ได้
        //     }
        // }
        // // // gt === GREATER THAN ; gte === GREATER THAN EQUAL
        // where: {
        //     id: {
        //         [Op.gt]: 3 
        //     }
        // }
        // // WHERE id i <= 3 OR 'name' LIKE 'A%'
        // where: {
        //         [Op.or] : [
        //             {
        //                 id : {
        //                     [Op.lte]:3
        //                 },
        //                 name: {
        //                     [Op.like] : 'A&'
        //                 }
        //             }
        //         ]
        // },
        // // ใส่ LIMIT
        limit: 2,
        offset: 2,
        order: [ [ 'name' , 'DESC' ] ]
    }); 
    console.log(JSON.parse(JSON.stringify(customers)));
};



// createCustomer();
// updateCustomer();
// createInstanceCustomer();
// deleteCustomer();

// selectCustomer();
// selectAllCustomer();
// selectCustomerPK();
selectAllCustomer2();

// sequelize.sync({force: true}).then(() => console.log('DB sync'));
// // sync เป็น Promise > sync Model ที่เรามี เข้ากับตัว database ; force เป็น true > สั่งให้ DROP tables ทั้งหมดใน database แล้วสร้างมาใหม่
// //  * force: false == create table if NOT exits 


// // ไว้เช็คการต่อกับ database ; authenticate เป็น Promise
// // * ตอนนี้ Fn ยังไม่รอ ทำใส่ async await
// sequelize
//     .authenticate()
//     .then(() => console.log('DB connected'))
//     .catch(err => console.log(err));


// // // authenticate แบบใส่ async await
// // แบบใส่ Fn ครอบ แล้วใส่ async await
// const auth = async () => {
//         try {
//             await sequelize.authenticate();
//             console.log('DB connected')
//         } catch(err) {
//             console.log(err)
//         }
// };

// // ทำ Fn wrapper เพื่อใส่ async await
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('DB connected')
//     } catch(err) {
//         console.log(err)
//     }
// })();