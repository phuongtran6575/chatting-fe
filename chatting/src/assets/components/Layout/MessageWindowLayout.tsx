import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import ChatHeader from "../Header";
import ChatArea from "../ChatArea";
import MessageComposer from "../MessageComposer";


const MessageWindowLayout = () => {
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