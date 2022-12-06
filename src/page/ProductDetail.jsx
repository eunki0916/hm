/* 
==useParams==
-리액트 라우터에서 제공하는 커스텀 hook
-useParams 가 리턴하는 객체에는 현재 경로의 파라미터들이 저장되어 있음
-동적 경로 생성시 경로에서 사용하는 동적인 값을 파라미터라 하고, 이런 파라미터들을 모은것을 Params 라 하며, useParams 를 통해 Params 객체를 가져올 수 있음
-경로 파라미터 지정은 route 컴포넌트의 path prop에서 :(콜론) 뒤에다가 원하는 이름을 적으면 됨
*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "./ProductDetail.scss";
import { BiShoppingBag } from "react-icons/bi";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const ProductDetail = () => {
  let { id } = useParams(); // useParams이라는 훅을 사용해서 객체 형태로 조회 데이터가 많을때 그 데이터에 해당하는 주소를 일일히 라우팅 하지 않는 방법, url에 특정 id의 콘텐츠를 받아 올 수 있다

  const [product, setProduct] = useState(null); // 모르는 상태로 시작
  const [heartFill, setHeartFill] = useState(false); // 비워진하트로시작

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/eunki0916/hm/products/${id}`;
    let response = await fetch(url); //fetch()를 호출하면 브라우저는 네트워크 요청을 보내고 프로미스객체가 반환
    let data = await response.json();
    //console.log("data는? ", data);
    setProduct(data);
  };
  const likeToggle = () => {
    setHeartFill(!heartFill);
  };

  useEffect(() => {
    getProductDetail(); //디테일한 데이타를 가져올 수 있는 함수
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={7}>
          <img src={product?.img} className="detail-img" />
        </Col>
        <Col sm={{ span: 4, offset: 1 }}>
          <div className="detail-titleWrap">
            <div className="detail-title">{product?.title}</div>
            <span className="like" onClick={likeToggle}>
              {heartFill ? (
                <BsFillHeartFill className="heartFill" />
              ) : (
                <BsHeart />
              )}
              {console.log("heartFill", heartFill)}
            </span>
          </div>

          <div className="detail-price">₩{product?.price}</div>
          {product?.new === true ? <div className="new">신제품</div> : ""}

          <div>
            <Dropdown className="detail-dropdown">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Button variant="dark" className="btn">
            <BiShoppingBag />
            추가
          </Button>
        </Col>
      </Row>
      {console.log("product", product)}
    </Container>
  );
};

export default ProductDetail;
