import  { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import ChatHeader from "../Header";
import ChatArea from "../ChatArea";
import MessageComposer from "../MessageComposer";


const MessageWindowLayout = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [ws, setWS] = useState<WebSocket|null>(null)
  const [clientId, setClientId] = useState<number>(0)
  useEffect(()=>{
    const clientId = Math.floor(Math.random() * 10000);
    setClientId(clientId)
    const socket = new WebSocket(`ws://localhost:8000/message/ws`);
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
    
  }, [])

  const handleOpenEmoji = () =>{
    console.log("open emoji panel")
  }

  const handleSendMessage = () => {
    if (ws && input.trim() !== "") {
      console.log(input)
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
        
        <ChatArea messages={messages} clientId={clientId} />
        

        {/* Composer cố định */}
        <MessageComposer value={input} onChange={e => setInput(e.target.value)} handleSend={handleSendMessage} handleOpenEmoji={handleOpenEmoji} />
      </Box>
    </Box>
  );
};

export default MessageWindowLayout