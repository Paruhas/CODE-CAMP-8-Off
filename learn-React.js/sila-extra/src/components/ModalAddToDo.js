import React from 'react'
import { Modal , Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "antd/lib/form/Form"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function ModalAddToDo( { onAddTodo , isVisible , onCancel } ) {
    const [form] = useForm()
    return (
        <Modal
        title="Add New Todo"
        visible={isVisible}
        onOk={() => onAddTodo(form.getFieldsValue())}
        onCancel={onCancel}
      >
        <Form
      {...layout}
      name="addNewTodo"
      initialValues={{ remember: true }}
      onFinish={onAddTodo}
    //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Text"
        name="text"
        rules={[{ required: true, message: 'Please input your Task!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: 'Please input your Date!' }]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    )
}

export default ModalAddToDo
