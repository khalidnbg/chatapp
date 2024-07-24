import { io } from "socket.io-client"; // Import the Socket.IO client library
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React

export default function useSocketHook({ chatId }) {
  // Initialize state for the socket connection
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a new Socket.IO connection with the chatId as a query parameter
    setSocket(io("/", { query: { chatId } }));
  }, []); // Dependency array includes chatId to re-establish the connection if chatId changes

  // Return the socket instance from the hook
  return socket;
}
