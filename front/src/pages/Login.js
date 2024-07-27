import BackgroundMenu from "../components/BackgroundMenu";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginInner}>
        <div className={styles.coveloperParent}>
          <a className={styles.coveloper}>coveloper</a>
          <a className={styles.communityForDeveloper}>
            Community For Developer :
          </a>
        </div>
      </div>
      <BackgroundMenu />
      <div className={styles.accountOptions}>
        <div className={styles.div}>
          회원가입
        </div>
      </div>
    </div>
  );
};

export default Login;
