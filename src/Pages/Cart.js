import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'

const Cart = () => {

    const cartStore = useSelector(store => store.cartStore)
    const cartItems = cartStore.cart_items

    const dispatch = useDispatch()

    return (
        <>
            <Navbar />

            <h3 className='text-center text-decoration-underline' >Cart Items</h3>

            <div className='container'>
                {
                    cartItems && cartItems.length > 0 ?
                        <table className='table align-middle text-center border border-3 border-dark table-hover'>
                            <thead className=''>
                                <tr>
                                    <th>S.N</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, i) => {
                                        return <tr key={item.id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={item.product.item_image} style={{ height: "120px" }} />
                                            </td>
                                            <td>
                                                {item.product.item_name}
                                            </td>
                                            <td>{item.product.item_price}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => {
                                                    dispatch({ type: "REMOVE FROM CART", payload: item.id })
                                                    // dispatch({type:"REMOVE FROM CART", payload:item.product})
                                                }}>Remove Item</button>
                                            </td>
                                        </tr>
                                    })
                                }
                                <button className='btn btn-warning btn-md' onClick={() => {
                                    dispatch({ type: "EMPTY CART" })
                                }}>Empty Cart</button>


                            </tbody>
                        </table>
                        :
                        <div className='alert alert-danger'>
                            No items in cart
                        </div>
                }
            </div>

        </>
    )
}

export default Cart