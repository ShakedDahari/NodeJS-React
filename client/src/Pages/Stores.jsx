import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/storeContext";

export default function Stores() {
  const { stores } = useContext(StoreContext);

  return (
    <div>
      <h1>Stores</h1>
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
          {stores.map((s) => (
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
