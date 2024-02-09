import { Layout, Typography} from 'antd';
import { useCrypto } from '../../context/crypto-context';
import AssetsTable from '../AssetsTable';
import PortfolioChart from '../PortfolioChart';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: 'white',
    backgroundColor: '#001529',
    padding: '1rem'
  };
  

export default function AppContent(){
  const {assets, crypto} = useCrypto()

  const cryptoPriceMap = crypto.reduce((acc, c) => {
    acc[c.id] = c.price
    return acc
  }, {})
  

  const sum = assets
  .map(asset => asset.amount * cryptoPriceMap[asset.id])
  .reduce((acc, v) => acc += v, 0)
  .toFixed(2)

    return( <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style = {{textAlign: 'left', color: 'white'}}>Portfolio {sum}$</Typography.Title>
      <PortfolioChart/>
  
    </Layout.Content>)
}