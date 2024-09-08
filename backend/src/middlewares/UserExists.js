import User from "../models/User.js";

async function UserExists(req,res,next){
    try{
        const userexists = await User.findAll({
            where:{
                user: req.params.user,
            }
        });
        if(!userexists){
            next();
        }else{
            return res.json({
                error: ['Usuário já existe'],
            });
        }
    }catch(e){
        return res.status(400).json(e.errors.map(err => err.message));
    }
};

export default UserExists;