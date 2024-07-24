import axios from 'axios'

export const signup = async (payload) => {
    try {
        const res = await axios.post("http://localhost:3000/api/v1/user/signup" , payload)
        return res;
    } catch (error) {
        
    }
}

export const login = async (payload) => {
    try {
        const res = await axios.post("http://localhost:3000/api/v1/user/login" , payload)
        return res;
    } catch (error) {
        
    }
}
