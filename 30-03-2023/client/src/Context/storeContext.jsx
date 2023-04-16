import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export default function StoreContextProvider({children}){

    const [stores, setStores] = useState([]);

    const LoadStores = async () => {
        try {
          let res = await fetch('http://localhost:5000/api/store');
          let data = await res.json();
          console.table(data);
          setStores(data);
        } catch (error) {
          console.error(error);
        }
    }


    useEffect(() => {
      LoadStores();
    }, []);
    

    const value = {
        stores,
    }

    return(
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}