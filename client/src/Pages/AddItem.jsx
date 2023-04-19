import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/storeContext";
import { useParams } from "react-router-dom";

export default function AddItem() {
  const { store } = useParams();

  const { stores } = useContext(StoreContext);

  const [itemId, setItemId] = useState();
  const [itemName, setItemName] = useState();
  const [itemRegPrice, setItemRegPrice] = useState();
  const [itemSalePrice, setItemSalePrice] = useState();
  const [items, setItems] = useState([]);

  if (stores.length === 0) {
    return <div>Loading...</div>;
  }

  const AddItemBtn = async () => {
    let s = await stores.filter((s) => s.id == parseInt(store));
    if (s.length === 0) {
      return ( 
      <div><h1>Add Item</h1><p style={{ color: "red" }}>Store Not Found</p></div>
      );
    }
    const newItem = {
        id: parseInt(itemId),
        name: itemName,
        regularPrice: itemRegPrice,
        salePrice: itemSalePrice,
    };
    setItems([...items, newItem]);
    await s[0].items.push(newItem);
    
    if (itemId && itemName && itemRegPrice && itemSalePrice) {
      alert("Item Added Successfully!");
    }
  };

  return (
    <div>
      <h1>Add Item</h1>
      Id: <input type="text" onChange={(e) => setItemId(e.target.value)}></input><br />
      Name: <input type="text" onChange={(e) => setItemName(e.target.value)}></input><br />
      Regular Price: <input type="number" onChange={(e) => setItemRegPrice(e.target.value)}/><br />
      Sale Price: <input type="number" onChange={(e) => setItemSalePrice(e.target.value)}/><br />
      <button onClick={AddItemBtn}>Add Item</button> <br /> <br />
    </div>
  );
}
