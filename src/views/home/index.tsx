import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Home = () => { 
  const navigate = useNavigate()
  const toPage = () => {
    navigate('/about')
  }
  return (<>
    <div className="h-10 py-2">
      <Button type="primary" onClick={toPage}>Home</Button>
      <div className='a'>12311222333</div>
    </div>
  </>)
}
export default Home