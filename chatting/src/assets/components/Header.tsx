import { AppBar, Toolbar, IconButton, Avatar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

const ChatHeader = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#0f1c33", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton edge="start" color="inherit" size="large">
            <MenuIcon />
          </IconButton>
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Alex the Adventurer
          </Typography>
        </Box>

        {/* Right section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit"><CallOutlinedIcon /></IconButton>
          <IconButton color="inherit"><VideocamOutlinedIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ChatHeader;