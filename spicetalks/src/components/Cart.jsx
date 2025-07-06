import {useSelector} from 'react-redux'
import ItemsList from './ItemsList'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className='text-center'>
        <ItemsList items={cartItems}/>
    </div>
  )
}

export default Cart