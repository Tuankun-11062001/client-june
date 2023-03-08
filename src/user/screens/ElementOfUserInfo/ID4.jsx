import React from "react";
import { ProductBought } from "../../components/ProductBought";
export const ID4 = () => {
  return (
    <div className="id4">
      <h3 className="id4-title">Has Bought</h3>
      <ul className="id4-list">
        <li className="id4-item">
          <ProductBought />
        </li>
      </ul>
    </div>
  );
};
