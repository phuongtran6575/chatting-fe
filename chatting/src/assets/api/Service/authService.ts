import axios from "axios"
import type { User } from "../../core/Types"

const API_URL = "http://localhost:8000"
const userAPI = axios.create({
    baseURL: API_URL,
})
export const getUser = async () => {
    userAPI.get("/read_me").then(res =>
        res.data
    ).catch(e => console.error(e))
}

export const login = async (user: User) =>{
    userAPI.post("/token", 
        new URLSearchParams({
        username: user.username,
        password: user.password
    }), 
    {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then(response => response.data).catch(e => console.error(e))
}

export const register = async (user: User) =>{
    userAPI.post("/register", {
        username: user.username,
        password: user.password,
        email: user.email,
        display_name: user.display_name
    }).then(response => response.data).catch(e => console.error(e))
}