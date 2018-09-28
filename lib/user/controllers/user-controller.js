const UserService = require("../services/user-services");

const userService = new UserService();

module.exports = class UserController{

    static async getAllUsers(req, res){
        
        res.status(200).send(await userService.getAllUsers());
        
    }
    
    static async getUser(req, res){
        
        let user = await userService.getUser(req.params.id);

        user ? res.status(200).send(user) : res.sendStatus(404);

    }

    static async deleteUser(req, res){
        
        await userService.deleteUser(req.params.id);
        
        res.send(null);
    }

    static async updateUser(req, res){
        
        let userId = parseInt(req.params.id);
        let model = req.body;

        let user = await userService.updateUser(userId, model);

        res.send(user);

    }

    static async postUser(req, res){

        try {
            res.status(200).send(await userService.postUser(req.body));
        } catch (error) {
            res.send(error.message);
        }

    }
}   