const signup = async(req , res) =>{
    try {
        const {name , email , password} = req.body;
        console.log(name , email , password)
        res.json({message : "login is working"})
    } catch (error) {
        
    }
}

const login = async(req , res) =>{
    try {
        const {email , password} = req.body;
        res.json({message : "login is working"})
    } catch (error) {
        
    }
}

module.exports = {login , signup};