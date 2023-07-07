/* eslint-disable react/prop-types */
import { CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function URLRenderer({ config, onClose }) {
    const { heading, label, uniqueName, isRequired, placeholder, subHeading } = config;

    const onFinish = values => {
        console.log("Success:", values);
    };
    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="border border-slate-300 h-full">
            <div className="flex justify-between items-center p-4 border border-b-stone-300">
                <div>{heading}</div>
                <div className="cursor-pointer flex justify-between items-center" onClick={onClose}>
                    <CloseOutlined />
                </div>
            </div>
            <section className="p-4">
                <div className="mb-2">{subHeading}</div>
                <Form
                    labelCol={{
                        span: 15
                    }}
                    wrapperCol={{
                        span: 20
                    }}
                    layout="vertical"
                    style={{
                        maxWidth: 600
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label={label} name={uniqueName} rules={[{ required: isRequired, message: "Please add a valid URL!", type: "url" }]}>
                        <Input placeholder={placeholder} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                        <Button>Cancel</Button>
                        <Button type="primary" htmlType="submit" className="ml-2">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
}
