import { createContext, useState } from "react";


export const MainContext = createContext();

export const ContextProvider = (props) => {
  const [auth, setAuth] = useState({});
  const [nurseries, setNursery] = useState([]);
  const [plants, setPlant] = useState([]);
  const [users, setUser] = useState([]);
  const [categories, setCategory] = useState([]);
  const [orders, setOrder] = useState([]);
  const value = {
    auth, 
    setAuth,
    nurseries,
    setNursery,
    plants,
    setPlant,
    categories, 
    setCategory,
    users, 
    setUser,
    orders, 
    setOrder
  }
  return (
    <MainContext.Provider value={value}>
      {props.children}
    </MainContext.Provider>
  );
};

