const user = require("../middleware/user");

const signup = async(req , res) =>{
    try {
        const {name , email , password} = req.body;
        console.log(name , email , password)
        if(!name || !email || !password){
            res.status().json({message : "Empty fields found!!!"})
            return;
        }

       const newUser = new user({
        name,
        password,
        email
       })

       console.log("working")
       
       const response = await newUser.save()
       if(response){
       res.status(200).json({data : response})
         return ;  
       }
       res.status(401).json({message : "User registation failed!!"})

    } catch (error) {
        res.status(501).json({message : "Internal error!!"})
    }
}

const login = async(req , res) =>{
    try {
        const {email , password} = req.body;
        if( !email || !password){
            res.status().json({message : "Empty fields found!!!"})
            return;
        }
       
        const response = await user.findOne({email : email})

        if(!response){
            res.status(200).json({message : "Failed to login"})
            return;
        }

        if(response.password !== password){
            res.status(200).json({message : "Failed to login"})
            return;
        }

      
       res.status(200).json({data : response})
         return ;  
    } catch (error) {
        
    }
}

module.exports = {login , signup};