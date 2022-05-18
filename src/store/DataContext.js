import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const handleGetApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DataContext.Provider value={{ handleGetApi, data }}>
      {children}
    </DataContext.Provider>
  );
};