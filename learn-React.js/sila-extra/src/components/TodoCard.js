import React from 'react'
import { Card , Button , Row , Col , Typography } from 'antd';
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

const { Text , Paragraph: P } = Typography;

function TodoCard({ todo }) {
    const { text , dueDate } = todo
    return (
            <Card>
                <Row justify='space-between'>
                    <Col>
                        <P>{text}</P>
                        <Text>{dueDate}</Text>
                    </Col>
                    {/* <Col>
                        <Button type='dashed'>Edit</Button>
                        <Button type='dashed' danger>Delete</Button>
                        <Button type='dashed' style={{ border: 'lightblue 1px solid' }}>Doing</Button>
                        <Button type='dashed' style={{ border: 'greenyellow  1px solid' }}>Done</Button>
                    </Col> */}
                     <Col>
                        <Button type="solid">
                            <FormOutlined />
                        </Button>
                        <Button type="solid" danger>
                            <DeleteOutlined />
                        </Button>
                        <Button>Doing</Button>
                        <Button>Done</Button>
                    </Col>
                </Row>
                
            </Card>
    )
}

export default TodoCard
