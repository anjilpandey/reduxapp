import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const cartItem = useSelector(store => store.cartStore)
    const cartItems_length = cartItem.cart_items.length
    return (
        <>
            <ul className='d-flex justify-content-center list-unstyled bg-black m-0'>
                <Link to='/' className='text-decoration-none text-white'><li className='h3 pe-3 me-3 py-3'>Home</li></Link>
                <Link to='/cart' className='text-decoration-none text-white'><li className='h3 ps-3 ms-3 py-3 position-relative pe-2'>Cart
                    
                    <span class="position-absolute top-4 start-100 badge bg-danger">
                        {cartItems_length}
                    </span>
                
                </li></Link>

            </ul>

        </>
    )
}

export default Navbar