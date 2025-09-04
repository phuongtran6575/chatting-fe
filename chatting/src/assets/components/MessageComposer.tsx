import React, { useState } from "react";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import SendIcon from "@mui/icons-material/Send";

const MessageComposer = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Send:", message);
    setMessage("");
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#0f1c33", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Paper component="form" onSubmit={(e) => { e.preventDefault(); handleSend(); }} sx={{ flex: 1, display: "flex", alignItems: "center", borderRadius: 5, px: 2, backgroundColor: "#2f3b52", color: "white" }}>
          <InputBase placeholder="Nhắn tin với Alex the Adventurer..." value={message} onChange={(e) => setMessage(e.target.value)} sx={{ flex: 1, color: "white" }} />
          <IconButton type="button" onClick={() => console.log("Open emoji picker")} sx={{ color: "rgba(255,255,255,0.7)" }}>
            <InsertEmoticonOutlinedIcon />
          </IconButton>
        </Paper>

        <IconButton onClick={handleSend} sx={{ backgroundColor: "#2f3b52", color: "white", "&:hover": { backgroundColor: "#3f4b62" } }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
export default MessageComposer;
