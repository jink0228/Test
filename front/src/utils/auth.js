import axios from "axios";

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export async function getUserInfo() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get("/api/members/register", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("failed to fetch user info", error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
