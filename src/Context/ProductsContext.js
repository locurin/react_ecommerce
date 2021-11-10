import React, { createContext, useState } from "react";
import { SHOP_DATA } from "../Shop/index";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
