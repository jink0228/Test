/**
 * 게시물을 클릭하면 게시물로 이동
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PostDetail.css";

function PostDetail() {
  const { id } = useParams(); // URL에서 게시물 ID를 가져옴
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchPostDetails();
    fetchComments();
  }, []);

  async function fetchPostDetails() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/api/board/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post details", error);
    }
  }

  // 댓글 목록 가져오기
  async function fetchComments() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/api/board/post/${id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  }

  // 댓글 등록하기
  async function handleCommentSubmit() {
    if (newComment.trim() === "") {
      alert("댓글을 입력하세요.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:8080/api/board/post/${id}/comment`,
        {
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNewComment(""); // 댓글 입력 필드 초기화
      fetchComments(); // 댓글 목록 새로고침
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  }

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-container">
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <footer>
          <span>작성자: {post.authorName}</span>
          <br />
          <span>작성일: {post.createdAt}</span>
        </footer>
      </div>

      <section className="comments-section">
        <h3>댓글</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
              <footer>
                <span>작성자: {comment.authorName}</span>
                <br />
                <span>작성일: {comment.createdAt}</span>
              </footer>
            </div>
          ))
        ) : (
          <p>댓글이 없습니다.</p>
        )}

        <div className="new-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          ></textarea>
          <button onClick={handleCommentSubmit}>댓글 달기</button>
        </div>
      </section>
    </div>
  );
}

export default PostDetail;
