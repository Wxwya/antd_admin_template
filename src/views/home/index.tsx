import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import XwyaForm from '@/components/XwyaForm';
import { useMemo } from 'react';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Home = () => { 
  const navigate = useNavigate()
  const toPage = () => {
    navigate('/info/about')
  }
  const itemlist = useMemo(() => (
    [
      { type: "input", item: { label: "姓名", name: "name" }, content: {} },
      { type: "select", item: { label: "性别", name: "sex" }, content: { options: [{ value: 'jack', label: 'Jack' }, { value: 'lucy', label: 'Lucy' }], } },
      { type: "check", item: { label: "多选", name: "dx" }, content: { options: [{ value: 'jack', label: 'Jack' }, { value: 'lucy', label: 'Lucy' }], } },
      { type: "radio", item: { label: "单选", name: "dx1" }, content: { options: [{ value: 'jack', label: 'Jack' }, { value: 'lucy', label: 'Lucy' }], } },
      { type: 'date', item: { label: "日期1", name: "date1" }, content: {} },
      { type: 'range', item: { label: "日期2", name: "date2" }, content: {} },
      { type: 'casc', item: { label: "多级", name: "dj" }, content: { options } },
      { type: "switch", item: { label: "开关", name: "switch" }, content: {} },
      { type: "number", item: { label: "数字", name: "number" } },
      { type: "upload", item: { label: "图片上传", name: "images",valuePropName:"fileList",getValueFromEvent:normFile},content: {} }
    ]
  ),[])
  return (<>
    <div className="h-10 py-2">
      <Button type="primary" onClick={toPage}>Home</Button>
      <XwyaForm itemlist={itemlist} row={6} />
    </div>
  </>)
}
export default Home