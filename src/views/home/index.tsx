import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import XwyaForm from '@/components/XwyaForm';
import { useMemo } from 'react';
const Home = () => { 
  const navigate = useNavigate()
  const toPage = () => {
    navigate('/info/about')
  }
  const itemlist = useMemo(() => (
    [{ type: "input", item: {label:"姓名",name:"name"},input:{} }]
  ),[])
  return (<>
    <div className="h-10 py-2">
      <Button type="primary" onClick={toPage}>Home</Button>
      <XwyaForm itemlist={itemlist} />
    </div>
  </>)
}
export default Home