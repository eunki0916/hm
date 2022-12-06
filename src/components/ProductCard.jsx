//상품을 눌렀을때 ProductDetail페이지로 넘어가게
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/Product/${item.id}`);
  };

  return (
    <div className="productCard">
      <div className="img-container" onClick={showDetail}>
        <img src={item?.img} alt="" />
        <div className="item_box">
          {item?.choice === true ? (
            <div className="choice">사이버 먼데이 특가</div>
          ) : (
            ""
          )}
          {item?.new === true ? <div className="new">New</div> : ""}
        </div>
      </div>
      <div className="title">{item?.title}</div>
      <div className="price">{item?.price}</div>
    </div>
  );
};

export default ProductCard;
