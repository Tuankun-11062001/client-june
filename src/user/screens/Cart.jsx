import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IoTrashOutline, IoTicketSharp } from "react-icons/io5";

export const Cart = () => {
  return (
    <div className="layout-app">
      <div className="cart">
        <div className="cart-list">
          <h3 className="cart-list-title">Your Cart</h3>
          <div className="cart-list-table">
            <div className="cart-list-head">
              <p className="cart-list-head-product">Product</p>
              <p className="cart-list-head-price">Price</p>
              <p className="cart-list-head-quality">Quality</p>
              <p className="cart-list-head-total">Total</p>
              <p className="cart-list-head-trash"></p>
            </div>
            <div className="cart-list-item">
              <div className="cart-list-item-product">
                <div className="cart-list-item-product-image">
                  <img src="" alt="" />
                </div>
                <p className="cart-list-item-product-name">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  doloribus maxime cupiditate reprehenderit quia amet ad velit
                </p>
              </div>
              <div className="cart-list-item-price">
                <p>300.000 đ</p>
              </div>
              <div className="cart-list-item-quality">
                <button className="cart-list-item-quality-button">
                  <BiLeftArrow />
                </button>
                <p className="cart-list-item-quality-number">1</p>
                <button className="cart-list-item-quality-button">
                  <BiRightArrow />
                </button>
              </div>
              <div className="cart-list-item-total">
                <p>300.000 đ</p>
              </div>
              <button className="cart-list-item-trash">
                <IoTrashOutline />
              </button>
            </div>
            <div className="cart-list-item">
              <div className="cart-list-item-product">
                <div className="cart-list-item-product-image">
                  <img src="" alt="" />
                </div>
                <p className="cart-list-item-product-name">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  doloribus maxime cupiditate reprehenderit quia amet ad velit
                </p>
              </div>
              <div className="cart-list-item-price">
                <p>300.000 đ</p>
              </div>
              <div className="cart-list-item-quality">
                <button className="cart-list-item-quality-button">
                  <BiLeftArrow />
                </button>
                <p className="cart-list-item-quality-number">1</p>
                <button className="cart-list-item-quality-button">
                  <BiRightArrow />
                </button>
              </div>
              <div className="cart-list-item-total">
                <p>300.000 đ</p>
              </div>
              <button className="cart-list-item-trash">
                <IoTrashOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-pay">
          <h3 className="cart-pay-title">Your Price</h3>
          <div className="cart-pay-voucher">
            <label>
              {" "}
              <IoTicketSharp /> Your voucher
            </label>
            <input placeholder="Wite your Voucher code" />
          </div>
          <h3 className="cart-pay-title-sub">Your Money</h3>
          <div className="cart-pay-money">
            <div className="cart-pay-group">
              <label>Total Products</label>
              <h3>300.000 đ</h3>
            </div>
            <div className="cart-pay-group">
              <label>Voucher</label>
              <h3>50.000 đ</h3>
            </div>
            <div className="cart-pay-group">
              <label>Total Final</label>
              <h2>250.000 đ</h2>
            </div>
          </div>
          <h3 className="cart-pay-title-sub">Your Infomation</h3>
          <div className="cart-pay-info">
            <div className="cart-pay-info-group">
              <label>Your Fullname</label>
              <input type="text" />
            </div>
            <div className="cart-pay-info-group">
              <label>Your Number Phone</label>
              <input type="number" />
            </div>
            <div className="cart-pay-info-group">
              <label>Your Address</label>
              <input type="text" />
            </div>
            <div className="cart-pay-info-group">
              <label>Your City</label>
              <input type="text" />
            </div>
            <div className="cart-pay-info-group">
              <label>Your Province</label>
              <input type="text" />
            </div>
          </div>
          <button className="cart-pay-button">Pay</button>
        </div>
      </div>
    </div>
  );
};
