import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { useSelector } from 'react-redux';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  const  removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item removed from the Cart",{
      style:{
        background :'  #e94c4c  ',
        color: 'white',
      },
      position:'top-right'
    })
  }

  return (
    <div className='mt-5 w-full'>

      <div className='grid cart_item_controler gap-x-4 gap-y-4 grid-cols-2 justify-center  '>

        <div className='w-[80%]'>
          <img className=' object-contain w-full h-[300px]'  src={item.image} />
        </div>

        <div className='h-[70%]' >
          <h1 className=' font-semibold text-slate-800 text-lg'>{item.title}</h1>
          <p className=' text-slate-600 mt-6 text-[14px]'>{item.description.split(" ").slice(0,10).join(" ") + '...'}</p>
          <div className='flex price_550 justify-between mt-8'>
            <p className='  font-semibold text-green-600 text-2xl'>${item.price}</p>
            <div className=' bg-red-200 w-10 h-10 p-[7px] flex justify-center items-center transition duration-300 text-red-700 hover:bg-red-800 hover:text-white rounded-full'><MdDelete  className=' transition duration-300   text-5xl ' onClick={removeFromCart}/></div>
          </div>
        </div>

      </div>

      {
        cart.length > 1 ? <div className=' mt-4 h-[3px] w-full bg-gray-700'/> : <div/>
      }


      
    </div>
  )
}

export default CartItem