import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export const Product = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img
          src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/08/giay-the-thao-mlb-chunky-liner-boston-red-sox-3asxca12n-43bgs-mau-nau-be-6306dd5522b33-25082022092421.jpg"
          alt=""
        />
      </div>
      <h4 className="product-title">
        Giày Thể Thao MLB Chunky Liner Boston Red Sox 3ASXCA12N-43BGS Màu Nâu Be
        Size 230
      </h4>
      <div className="product-prices-add">
        <h3 className="product-price">3.350.000 ₫</h3>
        <button className="product-button-add">
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};
