import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import ChatHeader from "../Header";
import ChatArea from "../ChatArea";
import MessageComposer from "../MessageComposer";


const MessageWindowLayout = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [ws, setWS] = useState<WebSocket|null>(null)
  useEffect(()=>{
    const clienId = Math.floor(Math.random() * 10000);
    const socket = new WebSocket(`ws://localhost:8000/ws/${clienId}`);
    socket.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]); // thêm tin nhắn vào state
    };

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected");}
      setWS(socket);

    // cleanup khi unmount
    return () => {
      socket.close();
    };
    
  })
  const sendMessage = () => {
    if (ws && input.trim() !== "") {
      ws.send(input); // gửi message lên server
      setInput("");
    }
  };
  return (
    <Box sx={{ display: "flex", bgcolor: "#0f1c33" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <Box sx={{ flex: 1, display: "flex" , height: "100vh",flexDirection: "column" }}>
        {/* Header cố định */}
        <ChatHeader />

        {/* Chat area có thể cuộn */}
        
        <ChatArea />
        

        {/* Composer cố định */}
        <MessageComposer />
      </Box>
    </Box>
  );
};

export default MessageWindowLayout