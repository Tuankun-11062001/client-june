import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from "react";

export const InfomationDeliverCard = ({ close }) => {
  const [deliver, setDeliver] = useState(false);

  const handlerSeeDeliver = () => {
    setDeliver(!deliver);
  };
  return (
    <div className="info_deliver_card">
      <div className="info_deliver_card-container">
        <div className="info_deliver_card-head">
          <h2 className="info_deliver_card-head-title">Infomation Product</h2>
          <button className="info_deliver_card-head-button" onClick={close()}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="info_deliver_card-body">
          <div className="info_deliver_card-image">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1492bfe1-0bd0-4697-b20b-cb41ec5b4f6b/air-max-flyknit-racer-shoes-Q9lN71.png"
              alt=""
            />
          </div>
          <div className="info_deliver_card-detail">
            <h3 className="info_deliver_card-detail-title">
              Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black DC0774-016
              Màu Đỏ Đen Size 38
            </h3>
            {deliver ? (
              <div className="info_deliver_card-detail-deliver">
                <div className="info_deliver_card-detail-deliver-group active">
                  <AiFillCheckCircle />
                  <label>Check</label>
                </div>
                <span className="info_deliver_card-detail-deliver-line"></span>
                <div className="info_deliver_card-detail-deliver-group  active">
                  <MdDeliveryDining />
                  <label>Deliver</label>
                </div>
                <span className="info_deliver_card-detail-deliver-line"></span>
                <div className="info_deliver_card-detail-deliver-group">
                  <GiTakeMyMoney />
                  <label>Receive</label>
                </div>
              </div>
            ) : (
              <div className="info_deliver_card-detail-context">
                <div className="info_deliver_card-detail-group">
                  <label>Price :</label>
                  <p>
                    400.000 <span>đ</span>
                  </p>
                </div>
                <div className="info_deliver_card-detail-group">
                  <label>Size :</label>
                  <p>XL</p>
                </div>
                <div className="info_deliver_card-detail-group">
                  <label>Quality :</label>
                  <p>1</p>
                </div>
                <div className="info_deliver_card-detail-group">
                  <label>Color :</label>
                  <p>red-gray</p>
                </div>
                <div className="info_deliver_card-detail-group">
                  <label>detail :</label>
                  <p>
                    Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black
                    DC0774-016 Màu Đỏ Đen Size 38
                  </p>
                </div>
              </div>
            )}

            <div className="info_deliver_card-detail-button">
              <button onClick={handlerSeeDeliver}>
                {deliver ? "See information" : "See Deliver"}
              </button>
              <button>See More Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
