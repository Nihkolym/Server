const User = require("../user");


module.exports = class UserService{

    constructor(){

    }

    getAllUsers(){
        return User.findAll();
    }

    getUser(userId){
        return User.findById(userId);
    }

    async deleteUser(userId){

        let hasUser = await User.findById(userId);

        return hasUser ? User.destroy({
            where: {
                id: userId
            }
        }) : "There is no such user";
    }

    updateUser(userId, model){

        if(model){
            delete model['id'];

            let res = User.update(model, {
                where: {
                    id: userId
                }
            })

            return "OK";
        }

    }

    async postUser(model){
       
        let userId = parseInt(model.id);

        let hasUser = await User.findById(userId);

        return hasUser ? "ALREADY EXIST" : User.create(model);
 
    }
}