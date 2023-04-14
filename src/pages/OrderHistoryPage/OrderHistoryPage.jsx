import { checkToken } from '../../utilities/users-service';
import OrderDetail from '../../components/CartDetail/CartDetail';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    
  }
  
  return (
   <>
   </>
  );
}

