/**
 * 게시물을 클릭하면 게시물로 이동
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams(); // URL에서 게시물 ID를 가져옴
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostDetails();
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

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <footer>
        <span>작성자: {post.authorName}</span>
        <br />
        <span>작성일: {post.createdAt}</span>
      </footer>
    </div>
  );
}

export default PostDetail;
