/*
메인 페이지
*/

import { useCallback } from "react";
import LoginMessage from "../components/LoginMessage";
import styles from "./Main2.module.css";
import { useNavigate } from "react-router-dom";
import AllPostsContent from "../components/AllPostsContent";
import HomeContent from "../components/HomeContent";
import QnAContent from "../components/QnAContent";
import { useState } from "react";

const Main = () => {
  const [selectedMenu, setSelectedMenu] = useState("홈");

  function onClickAllWrote() {
    console.log("전체글 클릭");
    setSelectedMenu("전체 글");
  }

  function onClickHome() {
    console.log("홈으로 이동");
    setSelectedMenu("홈");
  }

  function onClickQnA() {
    console.log("QnA게시판으로 이동");
    setSelectedMenu("QnA");
  }

  function renderContent() {
    switch (selectedMenu) {
      case "전체 글":
        return <AllPostsContent />;
      case "홈":
        return <HomeContent />;
      case "QnA":
        return <QnAContent />;
      default:
        return <HomeContent />;
    }
  }

  return (
    <div className={styles.main}>
      <main className={styles.frameParent}>
        <section className={styles.navbarItemsParent}>
          <div className={styles.navbarItems}>
            <img className={styles.icon} alt="" src="/-1.svg" />
            <div className={styles.navbarItemsInner}>
              <div className={styles.communityForDeveloperParent}>
                <i className={styles.communityForDeveloper}>
                  Community For Developer :
                </i>
                <div className={styles.coveloperWrapper}>
                  <h1 className={styles.coveloper}>coveloper</h1>
                </div>
              </div>
            </div>
            <div className={styles.chatMessages}>
              <LoginMessage />
              <div className={styles.monthWeeksGroup}>
                <div className={styles.monthWeeks2} onClick={onClickAllWrote}>
                  {/**전체글 버튼 */}
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.f7houseFillIcon}
                    loading="lazy"
                    alt=""
                    src="/f7housefill1.svg"
                  />
                  <div className={styles.menuItems}>
                    <div className={styles.div5}>전체 글</div>
                  </div>
                </div>
                <div className={styles.navbarItems1} onClick={onClickHome}>
                  {/**홈 버튼 */}
                  <div className={styles.navbarItemsChild} />
                  <img
                    className={styles.f7houseFillIcon1}
                    alt=""
                    src="/f7housefill.svg"
                  />
                  <div className={styles.container}>
                    <div className={styles.div6}>홈</div>
                  </div>
                </div>
                <div className={styles.calendar} onClick={onClickQnA}>
                  {/*QnA게시판*/}
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.icroundFolderIcon}
                    alt=""
                    stc="/icsharpsearch1.svg"
                  />
                  <div className={styles.frame}>
                    <div className={styles.coveloperChatbot}>QnA</div>
                  </div>
                </div>
                <div className={styles.calendar}>
                  {/**프로젝트 공유게시판 버튼 */}
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.icroundFolderIcon}
                    alt=""
                    src="/icroundfolder.svg"
                  />
                  <div className={styles.frame}>
                    <div className={styles.coveloperChatbot}>
                      프로젝트 공유 게시판
                    </div>
                  </div>
                </div>
                <div className={styles.loginButtonContainer}>
                  {/**챗봇 게시판 버튼 */}
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.humbleiconschat}
                    alt=""
                    src="/humbleiconschat.svg"
                  />
                  <div className={styles.coveloperChatbotWrapper}>
                    <div className={styles.coveloperChatbot}>
                      Coveloper Chatbot
                    </div>
                  </div>
                </div>
                <div className={styles.monthWeeks3}>
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.ricodeBoxFillIcon}
                    alt=""
                    src="/ricodeboxfill1.svg"
                  />
                  <input
                    className={styles.monthWeeksInner}
                    placeholder="협업 도구"
                    type="text"
                  />
                </div>
                <div className={styles.navbarItems2}>
                  {" "}
                  {/**비전공자 추천 로드맵 버튼 */}
                  <div className={styles.monthWeeksChild} />
                  <img
                    className={styles.carbonloadBalancerGlobalIcon}
                    alt=""
                    src="/carbonloadbalancerglobal.svg"
                  />
                  <div className={styles.frameDiv}>
                    <div className={styles.coveloperChatbot}>
                      비전공자 추천 로드맵
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            {renderContent()}
            {/*
            <div className={styles.navbarItemsGroup}>
              <div className={styles.navbarItems3}>
                <div className={styles.rectangleDiv} />
                <i className={styles.communityForDeveloper1}>
                  Community For Developer :
                </i>
                <div className={styles.coveloperContainer}>
                  <h1 className={styles.coveloper1}>coveloper</h1>
                </div>
              </div>
              <div className={styles.headerDividerWrapper}>
                <textarea className={styles.headerDivider} rows={7} cols={36} />
              </div>
              <div className={styles.navbarItemsContainer}>
                <textarea className={styles.navbarItems4} rows={15} cols={18} />
                <textarea className={styles.navbarItems4} rows={15} cols={18} />
              </div>
              <textarea className={styles.frameChild} rows={17} cols={36} />
            </div>
            */}
          </div>
        </section>
        <div className={styles.frameContainer}>
          <div className={styles.navbarItemsParent1}>
            <div className={styles.navbarItems6}>
              <div className={styles.navbarItemsChild1} />
              <img
                className={styles.icsharpSearchIcon}
                alt=""
                src="/icsharpsearch1.svg"
              />
            </div>
            <div className={styles.chatBody}>
              <div className={styles.div9} />
              <textarea className={styles.chatBodyChild} rows={14} cols={15} />
              <div className={styles.inputBoxWrapper}>
                <input className={styles.inputBox} type="text" />
              </div>
            </div>
            <div className={styles.reactionButton}>
              <div className={styles.calendarButton} />
              <div className={styles.profileButton} />
              <div className={styles.div10} />
              <div className={styles.reactionButtonChild} />
            </div>
          </div>
        </div>
      </main>
      <div className={styles.div11} />
      <div className={styles.mainInner}></div>
    </div>
  );
};

export default Main;
