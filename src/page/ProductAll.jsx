/*
	==useParams==
	라우터 사용시 QueryString 정보를 가져와 관리하고 싶을대 쓰는 react hooks
	 주소 뒤에 ?q=파라메터
	*/
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩 css
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); // 주소 뒤 파라메터

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    //원하는 쿼리 값을 읽어 온다/q라고 시작되는 값의 아이템을 가져온다/ 없을땐 빈 스트링
    console.log("쿼리 값은? ", keyword);
    let url = `https://my-json-server.typicode.com/eunki0916/hm/products?q=${keyword}`;
    let response = await fetch(url); //fetch()를 호출하면 브라우저는 네트워크 요청을 보내고 프로미스객체가 반환
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); //키워드를 입력했을때마다 함수 실행

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} sm={6}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
