import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const InfomationBoughtCard = ({ close }) => {
  return (
    <div className="info_bought_card">
      <div className="info_bought_card-container">
        <div className="info_bought_card-head">
          <h2 className="info_bought_card-head-title">
            Infomation Product Has Bought
          </h2>
          <button className="info_bought_card-head-button" onClick={close()}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="info_bought_card-body">
          <div className="info_bought_card-image">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1492bfe1-0bd0-4697-b20b-cb41ec5b4f6b/air-max-flyknit-racer-shoes-Q9lN71.png"
              alt=""
            />
          </div>
          <div className="info_bought_card-detail">
            <h3 className="info_bought_card-detail-title">
              Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black DC0774-016
              Màu Đỏ Đen Size 38
            </h3>
            <div className="info_bought_card-detail-context">
              <div className="info_bought_card-detail-group">
                <label>Price :</label>
                <p>
                  400.000 <span>đ</span>
                </p>
              </div>
              <div className="info_bought_card-detail-group">
                <label>Size :</label>
                <p>XL</p>
              </div>
              <div className="info_bought_card-detail-group">
                <label>Quality :</label>
                <p>1</p>
              </div>
              <div className="info_bought_card-detail-group">
                <label>Color :</label>
                <p>red-gray</p>
              </div>
              <div className="info_bought_card-detail-group">
                <label>Detail :</label>
                <p>
                  Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black
                  DC0774-016 Màu Đỏ Đen Size 38
                </p>
              </div>
              <div className="info_bought_card-detail-group">
                <label>Date :</label>
                <p>12 - 10 - 2022</p>
              </div>
            </div>
            <div className="info_bought_card-detail-button">
              <button>Add To Cart</button>
              <button>See More Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
