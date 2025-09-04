import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import type { User } from '../../core/Types'
import { getUser } from '../../api/Service/authService'

const MessageWindowPage = () => {
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
  const token = localStorage.getItem("access_token")
  const fetchUser = async () => {
    const user = await getUser(token)
    setUser(user)
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <Box>
        <Typography>{user.username}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.display_name}</Typography>
    </Box>
  )
}

export default MessageWindowPage
