import { Component } from "react";
import {
  Row,
  Col,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";

class AntDForm extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <>
        <Row>
        <Col xs={24}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Col xs={24} type="flex" align="middle">
              <h4>AntD Forms</h4>
            </Col>

            
              <Form.Item label="Radio">
                <Radio.Group>
                  <Radio value="apple"> Apple </Radio>
                  <Radio value="pear"> Pear </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="TreeSelect">
                <TreeSelect
                  treeData={[
                    {
                      title: "Light",
                      value: "light",
                      children: [
                        {
                          title: "Bamboo",
                          value: "bamboo",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Cascader"
                name="Cascader"
                rules={[
                  {
                    required: true,
                    message: "Please input your Cascader!",
                  },
                ]}
              >
                <Cascader
                  options={[
                    {
                      value: "zhejiang",
                      label: "Zhejiang",
                      children: [
                        {
                          value: "hangzhou",
                          label: "Hangzhou",
                        },
                        {
                          value: "qwe",
                          label: "qwe",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item
                label="InputNumber"
                name="InputNumb"
                rules={[
                  {
                    required: true,
                    message: "Please input your Input Number!",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch />
              </Form.Item>

              <Form.Item
                label="Checkbox"
                name="Checkbox"
                valuePropName="checked"
              >
                <Checkbox>Checkbox</Checkbox>
              </Form.Item>

              <Form.Item
                label="First Name"
                name="fname"
                rules={[
                  {
                    required: true,
                    message: "Please input your firstName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
           
            {/* <Col xs={24} sm={12} md={10} lg={3} >XS=24, SM=12, MD=6, LG=6</Col>
            <Col xs={24} sm={12} md={10} lg={3} >XS=24, SM=12, MD=6, LG=6</Col> */}
          </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default AntDForm;
