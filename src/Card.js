import React from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ item }) => {
    const dispatch=useDispatch()
    
    const addToCart=()=>{
        let c_item = {
            id: Date.now(),
            product : item
        }
        dispatch({type:"ADD TO CART", payload: c_item})
        toast.success(`${c_item.product.item_name} added to cart`)
    }

    return (
        <>
            <div className="col">
                <ToastContainer theme='colored' position='top-right'/>
                <div className="card">
                    <img src={item.item_image} className="card-img-top" alt="Smartphones" style={{ height: '300px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{item.item_name}</h5>
                        <h5 className="card-title">{item.item_price}</h5>
                        <div className='text-center'>
                            <button className='btn btn-warning btn-md' onClick={addToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card