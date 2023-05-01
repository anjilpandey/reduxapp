import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../Navbar'

const Home = () => {

    const [search, setSearch] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])

    const itemStore = useSelector(store => store.itemStore)
    const items = itemStore.items

    const filterProduct = () => {
        setFilteredProduct(items.filter(item => item.item_name.toLowerCase().match(search.toLowerCase())))
    }

    useEffect(() => {
        filterProduct()
    }, [])

    return (
        <>
            <Navbar />
            <div className='container-fluid py-3 bg-primary'>
                <input type="search" placeholder='Type here to search' className='form-control w-75 m-auto' 
                onChange={(e) => setSearch(e.target.value)} onKeyUp={filterProduct} />

            </div>
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        filteredProduct && filteredProduct.map((item, i) => {
                            return <Card item={item} key={i} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home