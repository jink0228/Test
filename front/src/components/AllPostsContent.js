/**
 * 전체 글 게시판
 */
import React from "react";

function AllPostsContent() {
  return (
    <div>
      <header>
        <h2>전체 글</h2>
      </header>
      <section>
        <article>
          <h3>게시글 제목 1</h3>
          <p>게시글 내용이 여기에 표시됩니다.</p>
          <footer>
            <span>작성자: 사용자1</span>
            <span>작성일: 2024-07-30</span>
          </footer>
        </article>
        <article>
          <h3>게시글 제목 2</h3>
          <p>게시글 내용이 여기에 표시됩니다.</p>
          <footer>
            <span>작성자: 사용자2</span>
            <span>작성일: 2024-07-29</span>
          </footer>
        </article>
        <article>
          <h3>게시글 제목 3</h3>
          <p>게시글 내용이 여기에 표시됩니다.</p>
          <footer>
            <span>작성자: 사용자3</span>
            <span>작성일: 2024-07-28</span>
          </footer>
        </article>
        {/* 추가적인 게시글들이 동일한 구조로 여기에 추가됩니다 */}
      </section>
      <div>
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
  );
}

export default AllPostsContent;
