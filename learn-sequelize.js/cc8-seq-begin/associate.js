const Sequelize = require('sequelize');
const { DataTypes, Op }= require('Sequelize');

const sequelize = new Sequelize('sequel_associate','root','admin1234',{
    host:'localhost', dialect:'mysql'
});



const Customer = sequelize.define(
    'Customer',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'customers',
        timestamps: false
    }
);

const Mobile = sequelize.define('Mobile', {
        phoneNumber: {
            type: DataTypes.STRING,
            field: 'phone_number'
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        tableName: 'mobiles',
        timestamps:false
    }
);

// การกำหนด คสพ. ของ Model
// customer has many moblie ; mobile just belong to customer
// เพิ่มค่าตางไหนยังไง อีกตารางที่มี คสพ. กันต้องมีด้วย
// * hasOne === คสพ. แบบ one to one FK จะไปอยู่ตารางไหนก็ได้ ; แต่ตัว sequelize จะใส่ให้ใน belongsTo ในกรณีก็จะใส่ใน Mobiles

Customer.hasMany(Mobile, {
    foreignKey: {
        name: 'customerId',
        allowNull: false,
        field: 'customer_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
Mobile.belongsTo(Customer, {
    foreignKey: {
        name: 'customerId',
        allowNull: false,
        field: 'customer_id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});

const bulkCreateCustomers = async () => {
    const customers = await Customer.bulkCreate([
        { name: 'John' },
        { name: 'Jim' },
        { name: 'Rob' },
        { name: 'Pete' },
        { name: 'Mike' },
        { name: 'Bob' }
    ]);
    console.log(JSON.parse(JSON.stringify(customers)));
};

const bulkCreateMobiles = async () => {
    const mobiles = await Mobile.bulkCreate([
        {
            phoneNumber: '0814356892',
            brand: 'Apple',
            model: 'iPhone 12',
            customerId: 1
        },
        {
            phoneNumber: null,
            brand: 'Apple',
            model: 'iPhone 8',
            customerId: 1
        },
        {
            phoneNumber: '0906210983',
            brand: 'Samsung',
            model: 'S2',
            customerId: 2
        },
        {
            phoneNumber: '0844389587',
            brand: 'Nokia',
            model: '3310',
            customerId: 3
        },
        {
            phoneNumber: '0867771222',
            brand: 'Huawei',
            model: 'GR5',
            customerId: 3
        },
        {
            phoneNumber: '0810901983',
            brand: 'Oppo',
            model: 'A5',
            customerId: 3
        },
        {
            phoneNumber: '0905136969',
            brand: 'Apple',
            model: 'iPhone Xs',
            customerId: 5
        }
    ]);
};

const getMobiles = async (id) => {
    // const mobile = await Mobile.findOne({ 
    //     where: { id }, 
    //     include: {
    //         model: Customer,
    //         attributes: ['name']
    //     } 
    const mobile = await Mobile.findAll({ 
        include: {
            model: Customer,
            attributes: ['name']
        } 
    });
    console.log(JSON.parse(JSON.stringify(mobile)));
};

const getCustomers = async () => {
    const customers = await Customer.findAll({
        include: {
            model: Mobile,
            attributes: ['phoneNumber','brand','model'],
            required: true // ทำให้เป็น INNER JOIN (แสดงแค่คนที่มีค่ากระทบในอีกตารางเท่านั้น)
        }
    });
    for (let customer of customers) {
        console.log(JSON.parse(JSON.stringify(customer)));
    }
    // console.log(JSON.parse(JSON.stringify(customers)));  
};


// getMobiles(1);
getCustomers();

// bulkCreateCustomers();
// bulkCreateMobiles();

// sequelize.sync({ force:true });