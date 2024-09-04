import axios from "axios";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  console.log("Token in localStorage : ", token);
  return !!token; //토큰 존재하면 true, 아니면 false반환
}

export async function getUserInfo() {
  let token = localStorage.getItem("token").trim();
  console.log("Token : ", token);

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

    console.log("Raw API Response:", response.data);

    if (!response.data) {
      console.error("No data received from server");
      return null;
    }

    if (typeof response.data === "string") {
      try {
        return JSON.parse(response.data);
      } catch (error) {
        console.error("Failed to parse JSON : ", error);
        return null;
      }
    }

    return response.data;
  } catch (error) {
    console.error("failed to fetch user info", error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
