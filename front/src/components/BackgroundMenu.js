import PropTypes from "prop-types";
import styles from "./BackgroundMenu.module.css";

const BackgroundMenu = ({ className = "" }) => {
  return (
    <div className={[styles.backgroundMenu, className].join(" ")}>
      <div className={styles.backgroundMenuChild} />
      <div className={styles.credentials}>
        <img
          className={styles.unionIcon}
          loading="lazy"
          alt=""
          src="/union.svg"
        />
        <div className={styles.div}>아이디</div>
        <div className={styles.div1}>비밀번호</div>
      </div>
      <button className={styles.loginAction}>
        <div className={styles.loginActionChild} />
        <b className={styles.b}>로그인</b>
      </button>
    </div>
  );
};

BackgroundMenu.propTypes = {
  className: PropTypes.string,
};

export default BackgroundMenu;
