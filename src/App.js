import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

/*
  1. 전체상품페이지(대문페이지), 로그인, 상품 상세페이지
  1-1. 네비게이션 바
  2. 전체상품페이지(대문페이지) - 전체상품을 쭉 나열
    2-1. 대문 상품이미지 클릭하면 디테일 이미지 \나오게
  3. 상품 검색기능
  4. 로그인버튼- 클릭하면 로그인페이지 나옴
  5. 상품썸네일을 클릭- 로그인이 안되어있을때는 로그인페이지가 나옴
  6. 로그인이 되어 있을때는 상품 디테일페이지를 볼 수 있음
  7. 로그아웃 기능 - 로그아웃 상태에선 다시 디테일페이지X, 로그인페이지가 나옴
  8. 로그인, 로그아웃은 토글버튼
  
*/

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // 로그인 상태 구분(처음에 로그인 안된 상태)

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;

// Routes는 Route를 감싸주고, 스위치 역할
