import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

interface Message {
  id: number;
  text: string;
  sender: "me" | "friend";
  avatar?: string;
}

const messages: Message[] = [
  { id: 1, text: "Xin chào! Tôi là Alex the Adventurer. Tôi có thể giúp gì cho bạn?", sender: "friend", avatar: "https://mui.com/static/images/avatar/1.jpg" },
  { id: 2, text: "Chào Alex! Hãy kể cho tôi về chuyến phiêu lưu của bạn.", sender: "me" },
  { id: 3, text: "Tất nhiên rồi! Tôi vừa khám phá một ngôi đền cổ đầy bí ẩn.", sender: "friend", avatar: "https://mui.com/static/images/avatar/1.jpg" },
];

const  ChatArea = () => {
  return (
    <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", gap: 2, overflowY: "auto", backgroundColor: "#0f1c33"  }}>
      {messages.map((msg) => (
        <Box key={msg.id} sx={{ display: "flex", alignItems: "flex-end", gap: 1, flexDirection: msg.sender === "me" ? "row-reverse" : "row" }}>
          {msg.sender === "friend" && <Avatar src={msg.avatar} sx={{ width: 32, height: 32 }} />}
          <Typography sx={{ px: 2, py: 1, borderRadius: 3, maxWidth: "60%", backgroundColor: msg.sender === "me" ? "#1976d2" : "#2f3b52", color: "white", fontSize: 14 }}>
            {msg.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
export default ChatArea;
