import React from "react";
import { Avatar, Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid";

const UserProfile = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 500, bgcolor: "#1e293b", color: "white", borderRadius: 2, boxShadow: 5 }}>
        {/* Header */}
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src="https://i.pravatar.cc/150?u=google" sx={{ width: 64, height: 64 }} />
          <Box>
            <Typography variant="h6" fontWeight="bold">Demo User</Typography>
            <Typography variant="body2" color="gray">@demouser</Typography>
            <Typography variant="body2" color="gray">Joined on August 27, 2025</Typography>
          </Box>
        </CardContent>

        {/* Body */}
        <Box sx={{ bgcolor: "#0f172a", p: 3 }}>
          <Typography variant="body2" gutterBottom>Display Name</Typography>
          <TextField fullWidth variant="filled" value="Demo User"
            slotProps={{ input: { readOnly: true } }}
            sx={{ mb: 2, bgcolor: "#1e293b", borderRadius: 1, input: { color: "white" } }} />

          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant="body2" gutterBottom>Username</Typography>
              <TextField fullWidth variant="filled" value="demouser"
                slotProps={{ input: { readOnly: true } }}
                sx={{ bgcolor: "#1e293b", borderRadius: 1, input: { color: "white" } }} />
            </Grid2>

            <Grid2 size={6}>
              <Typography variant="body2" gutterBottom>Email Address</Typography>
              <TextField fullWidth variant="filled" value="demo@user.com"
                slotProps={{ input: { readOnly: true } }}
                sx={{ bgcolor: "#1e293b", borderRadius: 1, input: { color: "white" } }} />
            </Grid2>
          </Grid2>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button variant="contained" color="primary">Edit Profile</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default UserProfile;
