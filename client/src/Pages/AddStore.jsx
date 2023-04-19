import React, { useContext } from 'react';
import { StoreContext } from '../Context/storeContext';
import { useState } from 'react';

export default function AddStore() {

    const { stores, setStores } = useContext(StoreContext);

    const [id, setId] = useState(stores.length);   
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [items, setItems] = useState([]);
    
    const [itemId, setItemId] = useState();
    const [itemName, setItemName] = useState();
    const [itemRegPrice, setItemRegPrice] = useState();
    const [itemSalePrice, setItemSalePrice] = useState();
    
    if (stores.length === 0) {
        return <div>Loading...</div>;
    }    
    
    const AddStoreBtn = async () => {
        const newStore = {
            id: stores.length + 1,
            name: name,
            city: city,
            items: items
        };
        const newStores = [...stores, newStore];
        setStores(newStores);
        stores.push(newStores);
        if (name && city && items) {   
            alert('Store Added Successfully!');
        }
    }

    const AddItemBtn = async () => {
        const newItem = {
            id: itemId,
            name: itemName,
            regularPrice: itemRegPrice,
            salePrice: itemSalePrice
        };
        setItems([...items, newItem]);
        if (itemId && itemName && itemRegPrice && itemSalePrice) {
            alert('Item Added Successfully!');
        }
    }


  return (
    <div>
        <h1>Add Store</h1>
        Items: <br />
        Id: <input type='text' onChange={e => setItemId(e.target.value)}></input> <br />
        Name: <input type='text' onChange={e => setItemName(e.target.value)}></input> <br />
        Regular Price: <input type='number' onChange={e => setItemRegPrice(e.target.value)} /> <br />
        Sale Price: <input type='number' onChange={e => setItemSalePrice(e.target.value)}/> <br />
        <button onClick={AddItemBtn}>Add Item</button> <br /> <br />
        Store: <br />
        Name: <input type='text' onChange={e => setName(e.target.value)}></input> <br />
        City: <input type='text' onChange={e => setCity(e.target.value)}></input> <br />
        <button onClick={AddStoreBtn}>Add Store</button> <br /> <br />
    </div>
  )
}
