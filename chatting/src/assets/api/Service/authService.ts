import axios from "axios"
import type { User } from "../../core/Types"

const API_URL = "http://localhost:8000/auth"
const userAPI = axios.create({
    baseURL: API_URL,
})
export const getUser = async () => {
    try{
        const response = await userAPI.get("/read_me")
        return response.data
    }catch(e){
        console.error(e)
        throw e
    }
}

export const login = async (user: User) =>{
    try {
        const response = await userAPI.post("/token", new URLSearchParams({
            username: user.username,
            password: user.password
        }), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const register = async (user: User) =>{
    try {
        const response = await userAPI.post("/register",{
            username: user.username,
            password: user.password,
            email: user.email,
            display_name: user.display_name
        })
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}