import { Box, Button, Divider, TextField, Typography, Paper } from "@mui/material";
import { Email, Google as GoogleIcon } from "@mui/icons-material"; 
import MemoryIcon from "@mui/icons-material/Memory"; 
import { Link, useNavigate } from "react-router-dom";
import { use, useState } from "react";
import { login } from "../../api/Service/authService";
import type { User } from "../../core/Types";

const LoginPage = () => {
   const navigate = useNavigate()
  const[user, setUser] = useState<User>({
    id: "",
    username: "",
    password: "",
    email: "",
    display_name: "",
    avatar_url: null,
    status:  'offline',
    last_seen: "", // ISO string
    created_at: "", // ISO string
    updated_at: "", // ISO string
  })


  const handleLogin = async () =>{
    const data = await login(user)
    const access_token = data.access_token
    if(access_token){
      localStorage.setItem("access_token", access_token)
    }
    navigate("/chatbox")
  }

  return (
    <Box sx={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#0d1117", }}>
      <Paper elevation={3}
        sx={{p: 4, borderRadius: 3, width: 380, textAlign: "center", bgcolor: "#161b22", color: "#fff",}}>
        {/* Icon */}
        <Box display="flex" justifyContent="center" mb={2}>
          <MemoryIcon sx={{ fontSize: 50, color: "#3b82f6" }} />
        </Box>
 
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Sign in to Gemini Chat
        </Typography>

        <Typography variant="body2" color="gray" mb={3}>
          Don't have an account?{" "}
          <Typography
            component="span"
            sx={{ color: "#3b82f6", cursor: "pointer" }}
          >
            <Link to={"/register"}>Sign up</Link>
          </Typography>
        </Typography>

        {/* Input fields */}
        <TextField fullWidth variant="outlined" label="Email address" margin="normal" onChange={e => {setUser({...user, username: e.target.value})}}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#0d1117",
              color: "#fff",
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
              "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
            },
            "& .MuiInputLabel-root": { color: "gray" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#3b82f6" },
          }}/>
        <TextField fullWidth type="password" variant="outlined" label="Password" margin="normal" onChange={e => {setUser({...user, password: e.target.value})}}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#0d1117",
              color: "#fff",
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
              "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
            },
            "& .MuiInputLabel-root": { color: "gray" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#3b82f6" },
          }}/>

        {/* Sign in button */}
        <Button fullWidth variant="contained" onClick={handleLogin}
          sx={{mt: 2, mb: 3, bgcolor: "#3b82f6", textTransform: "none", fontWeight: "bold", "&:hover": { bgcolor: "#2563eb" },}}>
          Sign in
        </Button>

        {/* Divider */}
        <Divider sx={{ mb: 3, color: "gray" }}>OR</Divider>

        {/* Google button */}
        <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}
            sx={{ textTransform: "none", color: "#fff", borderColor: "gray", "&:hover": { borderColor: "#3b82f6", color: "#3b82f6" },}}>
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
