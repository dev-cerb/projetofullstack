import User from "../models/User.js";

async function UserExists(req,res,next){
    try{
        const userexists = await User.findOne({
            where:{
                user: req.body.user,
            }
        });
        if(!userexists){
            next();
        }else{
            return res.json({
                message: ['Usuário já existe'],
            });
        }
    }catch(e){
        return res.status(400).json(e.errors?.map(err => err.message));
    }
};

export default UserExists;