import { useState } from "react"; // Import the useState hook from React

export default function useChatIdHook() {
  // Extract query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);

  // Initialize state with the 'chatId' parameter from the URL
  const [chatId, setChatId] = useState(urlParams.get("chatId"));

  // Return the chatId from the hook
  return chatId;
}
