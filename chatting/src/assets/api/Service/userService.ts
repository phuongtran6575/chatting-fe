import axios from "axios"

const API_URL = ""

const userAPI = axios.create({
    baseURL:API_URL,
    
})

export const getUser = () => {
    userAPI.get("").then(res =>{
        res.data
    }).catch(e => console.error(e))
}
export const createUser = () =>{
    userAPI.post("", {}).then().catch(e => console.error(e))
}

export const deleteUser = () =>{
    userAPI.delete("").then().catch(e => console.error(e))
}

export const updateUser = () =>{
    userAPI.put("", {}).then().catch(e =>console.error(e))
}