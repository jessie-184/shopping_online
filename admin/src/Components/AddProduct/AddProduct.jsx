import React from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }


    const [productDetail, setProductDetail] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })
    const changeHandler = (e) => {
        setProductDetail({...productDetail, [e.target.name]:e.target.value})
    }

    const addProduct = async () => {
        let responseData;
        let product = productDetail;
        let formData = new FormData();

        formData.append('product', image);
        await fetch('http://localhost:4000/upload', {
             method: 'POST',
             headers: {
                Accept: 'application/json',
             },
             body: formData
        }).then((res) => res.json()).then((data) => {responseData=data});
        
        if(responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/add_product', {
                method: 'POST',
                headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((res) => res.json()).then((data) => {
                data.success?alert("Product Added!"):alert("Fail to Add Product!")
            })
        }
    }
    
    return (
    <div className='add-product'>
        <div className="add-item-field">
            <p>Product Title</p>
            <input value={productDetail.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
        </div>
        <div className='add-price'>
            <div className="add-item-field">
                <p>Price</p>
                <input value={productDetail.old_price} onChange={changeHandler}  type='text' name='old_price' placeholder='Type here' />
            </div>
            <div className="add-item-field">
                <p>Offer Price</p>
                <input value={productDetail.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
            </div>
        </div>
        <div className="add-item-field">
            <p>Product Category</p>
            <select value={productDetail.category} onChange={changeHandler} name='category' className='add-selector'>
                <option value='women'>Women</option>
                <option value='men'>Men</option>
                <option value='kid'>Kids</option>
            </select>
        </div>
        <div className="add-item-field">
            <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):upload_area} className='add-thumbnail' alt=''/>
            </label>
            <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        </div>
        <button onClick={() => {addProduct()}} className='add-btn'>ADD</button>
    </div>
  )
}

export default AddProduct