/**
 * 메인창에서 로그인하는 컴포넌트 UI
 */
import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./LoginMessage.module.css";
import { useNavigate } from "react-router-dom";

const LoginMessage = ({ className = "", isLoggedIn, userInfo }) => {
  const navigate = useNavigate();

  function handleLoginBtn() {
    navigate("/login");
  }

  let loginContent;

  if (isLoggedIn) {
    loginContent = (
      <div>
        <p>안녕하세요, {userInfo.nickname} 님!</p>
        <p>트랙1 : {userInfo.track1}</p>
        <p>트랙2 : {userInfo.track2}</p>
      </div>
    );
  } else {
    loginContent = (
      <div className={[styles.loginMessage, className].join(" ")}>
        <div className={styles.div} />
        <div className={styles.loginMessageParent}>
          <div className={styles.div1}>
            <p className={styles.p}>원활한 사용을 위해</p>
            <p className={styles.p}>로그인 후 이용 가능합니다.</p>
          </div>
        </div>
        <div className={styles.loginButtons}>
          <button className={styles.loginButton} onClick={handleLoginBtn}>
            <div className={styles.loginButtonBackground} />
            <div className={styles.div2}>로그인</div>
          </button>
        </div>
      </div>
    );
  }

  return <div>{loginContent}</div>;

  /*
  return (
    <div className={[styles.loginMessage, className].join(" ")}>
      <div className={styles.div} />
      <div className={styles.loginMessageParent}>
        <div className={styles.div1}>
          <p className={styles.p}>원활한 사용을 위해</p>
          <p className={styles.p}>로그인 후 이용 가능합니다.</p>
        </div>
      </div>
      <div className={styles.loginButtons}>
        <button className={styles.loginButton}>
          <div
            className={styles.loginButtonBackground}
            onClick={onLoginButtonBackgroundClick}
          />
          <div className={styles.div2}>로그인</div>
        </button>
      </div>
    </div>
  );
  */
};

LoginMessage.propTypes = {
  className: PropTypes.string,
};

export default LoginMessage;
