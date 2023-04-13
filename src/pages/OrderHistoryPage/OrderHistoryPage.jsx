import { checkToken } from '../../utilities/users-service';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    
  }
  
  return (
   <>
   </>
  );
}

