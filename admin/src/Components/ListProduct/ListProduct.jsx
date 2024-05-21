import React from 'react';
import './ListProduct.css';
import { useState } from 'react';
import { useEffect } from 'react';
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
    const [all_product, setAllProduct] = useState([]);
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/all_product')
        .then((res) => res.json())
        .then((data) => {setAllProduct(data)});
    }

    useEffect(() => {
        fetchInfo();
    },[])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/remove_product', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
    <div className='list-product'>
        <h1>List of All Products</h1>
        <div className='list-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="list-all-product">
            <hr />
            {all_product.map((product, i) => {
                return <>
                    <div key={i} className='list-format list-format-main'>
                        <img src={product.image} alt="" className="list-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => {remove_product(product.id)}} className='list-remove-icon' src={cross_icon} alt='' />
                    </div>
                    <hr />
                    </>
            })}
        </div>
    </div>
  )
}

export default ListProduct