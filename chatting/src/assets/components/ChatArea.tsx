import { Box, Typography } from "@mui/material";



interface ChatAreaProps{
  clientId: number;
  messages: string[];
}

const  ChatArea = ({clientId, messages}: ChatAreaProps) => {

  return (
    <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", gap: 2, overflowY: "auto", backgroundColor: "#0f1c33"  }}>
      {messages.map((msg, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "flex-end", gap: 1, flexDirection:  "row" }}>
          <Typography>{clientId}</Typography>
          <Typography sx={{ px: 2, py: 1, borderRadius: 3, maxWidth: "60%", backgroundColor: "#2f3b52", color: "white", fontSize: 14 }}>
            {msg}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
export default ChatArea;
