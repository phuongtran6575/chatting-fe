import { Drawer, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Typography, Box, Divider } from "@mui/material";
import Grid2 from "@mui/material/Grid"; // Grid v2

const friends = [
  { name: "Alex the Adventurer", avatar: "https://mui.com/static/images/avatar/1.jpg", selected: true },
  { name: "Chef Carlo", avatar: "https://mui.com/static/images/avatar/2.jpg" },
  { name: "Professor Eva", avatar: "https://mui.com/static/images/avatar/3.jpg" },
  { name: "Zen Master Kaito", avatar: "https://mui.com/static/images/avatar/4.jpg" },
];

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 280, flexShrink: 0, "& .MuiDrawer-paper": { width: 280, borderRight: "1px solid rgba(255, 255, 255, 0.12)",  boxSizing: "border-box", backgroundColor: "#0f1c33", color: "white" } }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>AI Friends</Typography>
      </Box>

      <List>
        {friends.map((friend) => (
          <ListItemButton key={friend.name} selected={friend.selected} sx={{ borderRadius: 2, mx: 1, "&.Mui-selected": { backgroundColor: "rgba(255,255,255,0.1)" } }}>
            <ListItemAvatar><Avatar src={friend.avatar} /></ListItemAvatar>
            <ListItemText primary={<Typography variant="body1" sx={{ fontWeight: 500 }}>{friend.name}</Typography>} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />

      <Box sx={{ p: 2 }}>
        <Grid2 container spacing={1} alignItems="center">
          <Grid2><Avatar src="https://mui.com/static/images/avatar/5.jpg" /></Grid2>
          <Grid2><Typography variant="body1">Demo User</Typography></Grid2>
        </Grid2>
      </Box>
    </Drawer>
  );
}

export default Sidebar;