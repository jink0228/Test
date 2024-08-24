import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Main from "./pages/Main2";
import { getUserInfo, isLoggedIn, logout } from "./utils/auth";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    //처음 메인 페이지 로드 시
    if (isLoggedIn()) {
      //로그인 되어있는지 확인, 로그인 한 상태면
      getUserInfo() //사용자 정보 가져옴
        .then((data) => {
          setUserInfo(data); //userInfo업데이트
        })
        .catch((error) => {
          console.error("Failed to fetch user info", error);
          logout();
          setUserInfo(null);
        });
    }
  }, []);

  function handleLoginSuccess(token) {
    localStorage.setItem("token", token);
    getUserInfo().then((data) => {
      setUserInfo(data);
      navigate("/");
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Main isLoggedIn={!!userInfo} userInfo={userInfo} />}
      />
      <Route path="/join" element={<Join />} />
      <Route
        path="/login"
        element={<Login onLoginSuccess={handleLoginSuccess} />}
      />
    </Routes>
  );
}
export default App;
