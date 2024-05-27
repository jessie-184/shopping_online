import React, { useEffect, useState } from 'react';
import './NewCollection.css';
// import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollection = () => {
    const [new_collection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/new_collection')
        .then((res) => res.json())
        .then((data => setNewCollection(data)));
    },[])

    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr size ='6px'/>
            <div className="collection">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
                })}
            </div>
        </div>
    )
}

export default NewCollection