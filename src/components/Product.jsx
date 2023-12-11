import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart",{
      style:{
        background :' #6fc961 ',
        color: 'white',
      },
      position:'top-right'
    })
  }
  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from the Cart",{
      style:{
        background :'  #e94c4c  ',
        color: 'white',
      },
      position:'top-right'
    })
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300  ease-in hover:shadow-[0px_0px_29px_25px_#00000024] shadow-[0px_0px_4px_5px_#00000024] gap-3 p-4 mt-10 rounded-xl  '>
      <div className=''>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title.split("").slice(0,15).join("") + '...'}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[14px]'>{post.description.split(" ").slice(0,10).join(" ") + '...'}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full' />
      </div>
      <div className=' w-full mt-5 flex items-center justify-between '>
      <div >
        <p className=' text-green-600 font-semibold' >${post.price}</p>
      </div>
      {
        cart.some((p) => p.id == post.id)?(<button className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300' onClick={removeFromCart}>Remove Item</button>):(<button className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300' onClick={addToCart}>Add to Cart</button>)
      }
      </div>
    </div>
  )
}

export default Product