import axios from "axios";

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export async function getUserInfo() {
  let token = localStorage.getItem("token").trim();
  console.log("Original token from localStorage : ", token);

  if (!token) {
    return null;
  }

  try {
    const response = await axios.get(
      "http://localhost:8080/api/members/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("failed to fetch user info", error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
