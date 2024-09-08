import Sequelize, { Model } from "sequelize";

export default class User extends Model{
    static init(sequelize){
        super.init({
                nome:{
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                user:{
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                email:{
                    type: Sequelize.STRING,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: 'Users',
            });
        return this;
    }
}
