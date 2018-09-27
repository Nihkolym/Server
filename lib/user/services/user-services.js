const User = require("../user");


module.exports = class UserService{

    constructor(){

    }

    async getAllUsers(){
        return await User.findAll();
    }

    async getUser(userId){
        return await User.findById(userId);
    }

    async deleteUser(userId){

        userId = parseInt(userId);

        let hasUser = await User.findById(userId);

        return hasUser ? User.destroy({
            where: {
                id: userId
            }
        }) : false;
    }

    async updateUser(userId, model){

        if(model){
            delete model['id'];
            
            let res = await User.update(model, {
                where: {
                    id: userId
                }
            });

            return res[0];
        }

    }

    async postUser(model){
        
        return await User.create(model);
 
    }
}