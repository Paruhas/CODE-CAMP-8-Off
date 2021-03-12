import React , { useEffect, useState }from 'react'
import axios from 'axios'
import { Button , Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

function CardList() {

    
    const [data, setData] = useState(null) // ต้องให้ defaultValue == null เพราะเป็นเซ็ตว่างจะ เขียนตัวดักไม่ได้ ถ้าค่ายังไม่มา

    
    // //รับข้อมูลจากSever แบบ API function ปกติ
    // useEffect( function() {
    //     async function fetchData() {
    //         let isResponse = await fetch('https://60419fe27f50e000173aab4c.mockapi.io/todo' , {
    //             method:"GET"
    //         });
    //         let responseData = await isResponse.json()
    //         console.log(responseData);
    //         setData(responseData)
    //     }

    //     return fetchData()  
    // }, [])
    
    
    // รับข้อมูลจากSever แบบ import axios
    const fetchData = async () => {
        const isResponse = await axios.get('https://60419fe27f50e000173aab4c.mockapi.io/todo');
        setData(isResponse.data)
        console.log(isResponse.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (itemId) => {
        await axios.delete(`https://60419fe27f50e000173aab4c.mockapi.io/todo/${itemId}`);
        fetchData();
    };

    return (
        <div style={{display:'flex', flexFlow:'wrap'}}>
        {/* แบบ Destructuring */}
        {/* แบบ if ternary ปกติ => เช็คค่า data ว่ามาหรือยัง ถ้ายังไม่มา == null จะยังไม่ทำ .map ( ไม่ใส่ .map จะ error ) */}
            { ( data !== null ) ? 
                data.map(({ task , author , createdAt , id}) => (
                    <Card
                        title={task}
                        style={{ width: 300 }}
                        extra={<Button
                            icon={<DeleteOutlined />}
                            type='primary'
                            shape='circle'
                            onClick={() => handleDelete(id)}
                        ></Button>}
                    >
                        <p>Author: {author}</p>
                        <p>CreatedAt: {createdAt}</p>
                    </Card>
                ))
                : null
            }

        </div>
    )
}

export default CardList


// // แบบปกติ ไม่ destructuring ค่าที่รับมา
// {data?.map(item => (
//     <Card
//     title={item.task}
//     style={{ width: 300 }}
//     >
//         <p>Author: {item.author}</p>
//         <p>CreatedAt: {item.createdAt}</p>
//     </Card>
// ))}

// // แบบ Optional Chaining ไม่เขียน if ternary เพื่อตรวจสอบ ค่า data ที่จะเอามา map
//              {data?.map(({ task , author , createdAt }) => (
//                 <Card
//                     title={task}
//                     style={{ width: 300 }}
//                     extra={<Button
//                         icon={<DeleteOutlined />}
//                         type='primary'
//                         shape='circle'
//                     ></Button>}
//                 >
//                         <p>Author: {author}</p>
//                         <p>CreatedAt: {createdAt}</p>
//                     </Card>
//                 ))
//             } 


        