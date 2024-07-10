import { memo, useCallback } from 'react'
import { Form, Input } from 'antd'
const XwyaForm = (props) => {
  const { itemlist } = props
  const [form] = Form.useForm()
  const onFinish = () => {
    console.log('验证')
  }
  const getType = useCallback((type: string) => { 
      switch (type) {
      case 'input':
        return <Input />
      default:
        return <Input />
    }
  } ,[]) 
  return (
    <>
      <Form name="basic" form={form} onFinish={onFinish} autoComplete="off">
        <div className="flex gap-4 flex-wrap">
          {itemlist.map((item) => (
             <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: '请输入!' }]}>
            {getType(item.type)}
           </Form.Item>
          ))}
         
        </div>
      </Form>
    </>
  )
}

export default memo(XwyaForm)
