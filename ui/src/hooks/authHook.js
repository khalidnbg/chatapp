import { useEffect, useState } from "react";

export default function useAuthHook({ socket }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!socket) return; // If the socket is not defined, return early

    socket.on("otpSuccess", (data) => {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    });
  }, [socket]);

  // Return an object with the isLoggedIn property based on the presence of the token
  return {
    isLoggedIn: token ? true : false, // If a token exists, the user is considered logged in; otherwise, not
  };
}
