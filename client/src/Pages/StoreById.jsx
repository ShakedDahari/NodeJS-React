import React, { useContext } from "react";
import { StoreContext } from "../Context/storeContext";
import { useParams } from "react-router-dom";

export default function StoreById() {
  const { id } = useParams();
  const { stores } = useContext(StoreContext);
  let store = stores.filter(s => s.id == parseInt(id));

  if (store.length === 0) {
    return <div><h1>Store By Id</h1><p style={{color:"red"}}>Store Not Found</p></div>
  }

  return (
    <div>
      <h1>Store By Id</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {store.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.city}</td>
              <td>
                <ul>
                  {s.items.map((i) => (
                    <li key={i.id}>
                      <div>ID: {i.id}</div>
                      <div>Name: {i.name}</div>
                      <div>Regular Price: {i.regularPrice}</div>
                      <div>Sale Price: {i.salePrice}</div>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
