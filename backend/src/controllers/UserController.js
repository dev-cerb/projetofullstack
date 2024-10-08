import User from "../models/User.js";
import dotenv from 'dotenv';

dotenv.config({path: "../.env"});

import * as jwtfull from "jsonwebtoken";

const jwt = jwtfull;
const SECRET = process.env.SECRET;

class UserController{
    async create(req, res){
        try{
            if(req.body.password == req.body.confirmpass){
                await User.create(req.body);
                return res.json({message:['Usuário criado.']})
            }else{
                return res.json({
                    message: ['As senhas não estão de acordo.']
                })
            }
        }catch(e){
            return res.status(400).json(e.errors.map(err => err.message));
        }
    }

    async login(req, res){
        try{
            const user = await User.findOne({
                where: {
                    user: req.body.user,
                    password: req.body.password,
                }
            });
            if(user){
                const token = jwt.sign({userId: req.params.id}, SECRET, {expiresIn: 600});
                return res.json({auth: true, token});
            }else{
                return res.json({
                    message: ['Usuário não existe ou senha incorreta.']
                })
            }
        }catch(e){
            return res.json(null);
        }
    }

    async update(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    message: ['Id não enviado.'],
                })
            }

            const user = await User.findByPk(req.params.id);

            if(!user){
                return res.status(400).json({
                    message: ['Usuário não existe.'],
                })
            }

            await User.update(req.body, {
                where:{
                    id: req.params.id,
                }
            });

            return res.json(req.body);
        }catch(e){
            return res.json(null);
        }
    }

    async delete(req,res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    message: ['ID do Usuário não enviado.'],
                });
            }

            const user = User.findByPk(req.params.id)

            if(!user){
                return res.status(400).jsn({
                    message: ['Usuário não existe']
                });
            }

            await User.destroy({
                where: {
                    id: req.params.id,
                }
            });

            return res.json({
                message: ['Usuário excluido.'],
            });
        }catch(e){
            console.log(e);
            return res.json(null);
        }
    }
}

export default new UserController();