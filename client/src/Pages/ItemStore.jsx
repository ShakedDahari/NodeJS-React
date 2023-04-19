import React, { useContext } from 'react';
import { StoreContext } from '../Context/storeContext';
import { useParams } from 'react-router-dom';

export default function ItemStore() {
    const { store, item } = useParams();
    const { stores } = useContext(StoreContext); 

    if (stores.length === 0) {
      return <div>Loading...</div>;
    }

    let storeSelect = stores.filter(s => s.id == parseInt(store));

    if (storeSelect.length === 0) {
      return <div><h1>Item Store</h1><p style={{color:"red"}}>Store Not Found</p></div>
    }

    let product = storeSelect[0].items.filter(i => i.id == parseInt(item));

    if (product.length === 0) {
      return <div><h1>Item Store</h1><p style={{color:"red"}}>Item Not Found</p></div>
    }

  return (
    <div>
        <h1>Item Store</h1>       
         <div>
          {product.map((p) => (
            <p key={p.id}>
              Id: {p.id} <br />
             Name: {p.name} <br />
             Regular Price: {p.regularPrice} <br />
             Sale Price: {p.salePrice} <br />
            </p>
          ))}
         </div>
    </div>
  )

}
