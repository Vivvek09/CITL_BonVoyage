import axios from "axios";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios.post("https://citl-bonvoyage-backend-1td7.onrender.com/api/refresh-token", { token: refreshToken });
    localStorage.setItem("accessToken", response.data.accessToken);
  } catch (error) {
    console.error("Error refreshing token:", error.response.data);
    // Handle token expiration, e.g., log out the user
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login page
  }
};

export const apiCall = async () => {
  let accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.get("https://citl-bonvoyage-backend-1td7.onrender.com/api/protected", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data);
  } catch (error) {
    if (error.response.status === 401) {
      await refreshAccessToken();
      accessToken = localStorage.getItem("accessToken");
      await apiCall(); // Retry with new token
    } else {
      console.error("API call error:", error.response.data);
    }
  }
};
