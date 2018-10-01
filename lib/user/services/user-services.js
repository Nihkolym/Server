const User = require("../user");


module.exports = class UserService{

    constructor(){

    }

    async getAllUsers(){
        return await User.findAll();
    }

    async getUser(userId){
        userId = parseInt(userId);
        
        return await User.findById(userId);
    }

    async deleteUser(userId){
        
        userId = parseInt(userId);
        
        return await User.destroy({
            where: {
                id: userId
            }
        });
    }

    async updateUser(userId, model){
        
        if(model){
            delete model['id'];
            
            let res = await User.update(model, {
                where: {
                    id: userId
                }
            });

            return await this.getUser(userId);
        }

    }

    async postUser(model){
        
        return await User.create(model);
 
    }
}