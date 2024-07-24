import axios from 'axios'

export const signup = async () => {
    try {
        const res = axios.post("http://localhost:3000/api/v1/user/signup" , {name : "hello" , email : "ema@gmail.com" , password : "sdfiuew"})
        return;
    } catch (error) {
        
    }
}
