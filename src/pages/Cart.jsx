import { useDispatch, useSelector } from 'react-redux';
import { selectAmount, selectCart } from '../redux/cartSlice';
import { decreaseProductCount, fetchCart, increaseProductCount, removeFromCart } from '../redux/cartOps';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectAmount);
  const cart = useSelector(selectCart);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <div className='text-4xl'>
      <h2 className='font-bold underline mb-4 text-center text-5xl'>Cart</h2>
      <p className='px-4 py-4'>Total Amount: ${totalAmount}</p>
      <ul className='flex flex-col gap-4  items-center'>
        {cart.map(item => (
          <li
            className='px-4 grid grid-cols-[120px_3fr_2fr_1fr_1fr] text-xl items-center shadow-md rounded-sm border-2 border-black w-3/4'
            key={item.id}
          >
            <img width={100} src={item.thumbnail} />
            <p>{item.title}</p>
            <p>
              {item.price}x{item.count} ={item.price * item.count} $
            </p>
            <div className='flex gap-2 items-center'>
              <button className='btn' onClick={() => dispatch(decreaseProductCount(item))}>
                -
              </button>
              <span>{item.count}</span>
              <button className='btn' onClick={() => dispatch(increaseProductCount(item))}>
                +
              </button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item))} className='btn btn-error'>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
