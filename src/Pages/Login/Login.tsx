
import { Button, Card, Form, Input } from 'antd';
import { useState } from 'react'

import './Login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const onFinishFailed = (values: any) => {}
  const onFinish = (values: any) => {
    const { username, password } = values;
    if (username && password) {
      setLogin({ ...values })
      navigate('/menu')
    }
  }
  return (
    <section className="Login">
      <Card title="Login" style={{textAlign: 'center'}} >
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password />
          </Form.Item>
        
          <Form.Item wrapperCol={{span: 24}}>
            <Button type="primary" htmlType="submit" className="Login__button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  )
}
