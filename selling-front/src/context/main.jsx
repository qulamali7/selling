import React from "react";
import BasketProvider from "./BasketContext";
import SearchProvider from "./SearchContext";
import WishlistProvider from "./WishlistContext";

const MainProvider = ({ children }) => {
  return (
    <>
      <BasketProvider>
        <SearchProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </SearchProvider>
      </BasketProvider>
    </>
  );
};

export default MainProvider;
