/* eslint-disable react/prop-types */
import { Button, Form, Input, Upload, message } from "antd";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";

import { useFormConfig, useFormData } from "../hooks";

const { TextArea } = Input;

const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }

    return e?.fileList;
};

export default function Signup({ onClose }) {
    const formConfig = useFormConfig();
    const formData = useFormData();
    const [form] = Form.useForm();

    const handleUpload = file => {
        // Handle the file upload logic here
        console.log("Uploaded file:", file);
        message.success("File uploaded successfully!");
    };

    const createForm = formObject => {
        const { type, label, placeholder, uniqueName, isRequired } = formObject;
        switch (type) {
            case "text":
                return (
                    <Form.Item
                        label={label}
                        name={uniqueName}
                        rules={[
                            {
                                required: isRequired,
                                message: "Field is required"
                            }
                        ]}
                    >
                        <Input placeholder={placeholder} />
                    </Form.Item>
                );
            case "upload":
                return (
                    <Form.Item
                        name={uniqueName}
                        label={label}
                        getValueFromEvent={normFile}
                        rules={[
                            {
                                required: isRequired,
                                message: "upload is required"
                            }
                        ]}
                    >
                        <Upload name={uniqueName} action="/upload.do" listType="picture" beforeUpload={handleUpload}>
                            <Button icon={<UploadOutlined />}>{placeholder}</Button>
                        </Upload>
                    </Form.Item>
                );
            case "textarea":
                return (
                    <Form.Item label={label} name={uniqueName} required={isRequired}>
                        <TextArea rows={4} placeholder={placeholder} />
                    </Form.Item>
                );
            default:
                return <></>;
        }
    };

    const onFinish = values => {
        console.log("Success:", values);
    };
    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="border border-stone-300 h-full">
            <div className="flex justify-between items-center p-4 border border-b-stone-300">
                <div>Sign up page</div>
                <div className="cursor-pointer flex justify-between items-center" onClick={onClose}>
                    <CloseOutlined />
                </div>
            </div>
            <div className="p-4 border h-full">
                {Object.keys(formData).length > 0 && (
                    <Form
                        form={form}
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
                        initialValues={{ ...formData }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        {formConfig.map(createForm)}
                        <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                            <Button>Cancel</Button>
                            <Button type="primary" htmlType="submit" className="ml-2">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </div>
        </div>
    );
}
