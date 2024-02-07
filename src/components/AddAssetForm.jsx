import { useState } from "react"
import { Select, Space, Typography, Flex, Divider, Form, Input, InputNumber, Button,  DatePicker} from 'antd';
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
    const [coin, setCoin] = useState(null)
    const { crypto } = useCrypto()
    if (!coin) {
        return (
            <Select
                mode="multiple"
                style={{
                    width: '100%',
                }}

                onSelect={(v) => setCoin(crypto.find((c) => c.id == v))}


                placeholder='select coin'

                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} />{option.data.label}
                    </Space>
                )}
            />
        )
    }


    function onFinish() {
        console.log('finish', values)
    }
    return (

        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{

            }}
            onFinish={onFinish}
        >

            <Flex align="center">
                <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: 10 }} />
                <Typography.Title level={2} style={{ margin: 0 }}>({coin.symbol}) {coin.name}</Typography.Title>

            </Flex>
            <Divider />
            <Form.Item
                label="Amount"
                name="amiynt"
                rules={[
                    {
                        required: true,
                        type: 'number',
                        min: 0,
                        message: 'Please input amount!',
                    },
                ]}>
                <InputNumber style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
            >
                <InputNumber disabled style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item
                label="Date & Time"
                name="d_t"
            >
                 <DatePicker showTime />
            </Form.Item>

            <Form.Item
                label="Total"
                name="total"
            >
                <InputNumber disabled style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Asset
                </Button>
            </Form.Item>
        </Form>)
}