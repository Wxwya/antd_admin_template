import { memo, useCallback } from 'react'
import { Form, Input, Select, Checkbox, Radio, DatePicker, Cascader, Switch, InputNumber, Image, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const XwyaForm = (props) => {
  const { itemlist,row=1 } = props
  const [form] = Form.useForm()
  const onFinish = () => {
    console.log('验证')
  }
  const onCustomRequest = (o:any) => { 
    console.log(o);
    
  }
  const getType = useCallback((p: any) => {
    p.content = p.content || {}
    const typeObj = {
      input: <Input {...p.content} />,
      select: <Select {...p.content} />,
      check: <Checkbox.Group {...p.content} />,
      radio: <Radio.Group {...p.content} />,
      date: <DatePicker {...p.content} />,
      range: <RangePicker {...p.content} />,
      casc: <Cascader {...p.content} />,
      switch: <Switch {...p.content} />,
      number: <InputNumber {...p.content} />,
      upload: (<Upload  listType="picture-card"  customRequest={onCustomRequest} showUploadList={false} >
       <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
      </Upload>)
    
    }
    return typeObj[p.type]
  } ,[]) 
  return (
    <>
      <Form name="basic" form={form} onFinish={onFinish} initialValues={{fileList:[],images:[]}} autoComplete="off">
        <div className="flex gap-4 flex-wrap">
          {itemlist.map((p,index) => (
            <Form.Item<FieldType> style={{width:`calc(100% / ${row} - 10px)`}} {...p.item} key={index} >
            {getType(p)}
           </Form.Item>
          ))}
         
        </div>
      </Form>
    </>
  )
}

export default memo(XwyaForm)
