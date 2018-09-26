const UserService = require("../services/user-services");

const userService = new UserService();

module.exports = class UserController{

    static async getAllUsers(req, res){

        res.status(200).send(await userService.getAllUsers());
         
    }
    
    static async getUser(req, res){

        res.status(200).send(await userService.getUser(req.params.id));

    }

    static async deleteUser(req, res){

        res.status(200).send(await userService.deleteUser(req.params.id));

    }

    static async updateUser(req, res){

        let userId = parseInt(req.params.id);
        let model = req.body;

        res.status(200).send(await userService.updateUser(userId, model));

    }

    static async postUser(req, res){

        res.status(200).send(await userService.postUser(req.body));

    }
}   