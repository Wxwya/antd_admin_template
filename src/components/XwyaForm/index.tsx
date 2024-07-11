import { memo, useCallback, useState } from 'react'
import { Form, Input, Select, Checkbox, Radio, DatePicker, Cascader, Switch, InputNumber, Image, Upload, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import changeFilelist from '@/utils/changeFilelist'
const { RangePicker } = DatePicker

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
const XwyaForm = (props) => {
  const { itemlist, row = 1 } = props
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any[]>([])
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const onFinish = (values) => {
    console.log('验证', values)
    console.log(fileList)
  }

  const onCustomRequest = async ({ file,  onError }: any, urls: string,key:string) => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch(urls, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
      const data = await res.json()
      if (data.code === 200) {
        const newFilelist = [...fileList, changeFilelist(data.data.url, 'done')]
        setFileList(newFilelist)
        form.setFieldValue(key, newFilelist)
      } else {
        onError('上传失败')
      }
    } catch (err: any) {
      const url = await getBase64(file)
      const newFilelist =[...fileList, changeFilelist(url, 'error')]
      setFileList(newFilelist)
      form.setFieldValue(key, newFilelist)
    }
  }
  const onUploadChange = ({ file, fileList }: any) => {
    if (file.status === 'removed') {
      setFileList(fileList)
    }
  }
  const handlePreview = async (file) => {
    setPreviewImage(file.url);
    setPreviewOpen(true);
  };

  const getType = useCallback(
    (p: any) => {
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
        upload: (
            <Upload listType="picture-card" fileList={fileList} customRequest={(e) => onCustomRequest(e, p.content.urls,p.item.name)} onChange={onUploadChange}  onPreview={handlePreview}>
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
),
      }
      return typeObj[p.type]
    },
    [fileList]
  )
  return (
    <>
      <Form name="basic" form={form} onFinish={onFinish} initialValues={{ fileList: [], images: [] }} autoComplete="off">
        <div className="flex gap-4 flex-wrap">
          {itemlist.map((p, index) => (
            <Form.Item<FieldType> style={{ width: `calc(100% / ${row} - 10px)` }} {...p.item} key={index}>
              {getType(p)}
            </Form.Item>
          ))}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
      {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
    </>
  )
}

export default memo(XwyaForm)
