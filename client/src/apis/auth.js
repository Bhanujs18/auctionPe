import axios from 'axios'

export const signup = async (payload) => {
    try {
        const res = await axios.post("https://auctionpe-826x.onrender.com/api/v1/user/signup" , payload)
        return res;
    } catch (error) {
        
    }
}

export const login = async (payload) => {
    try {
        const res = await axios.post("https://auctionpe-826x.onrender.com/api/v1/user/login" , payload)
        return res;
    } catch (error) {
        
    }
}
