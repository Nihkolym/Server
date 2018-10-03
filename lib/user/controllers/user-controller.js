const UserService = require("../services/user-services");

const userService = new UserService();

module.exports = class UserController{

    static async getAllUsers(req, res){
        
        res.status(200).send(await userService.getAllUsers());
        
    }
    
    static async getUser(req, res){

        let user;

        try {
            user = await userService.getUser(req.params.id);

            if(user){
                successLog.info(`User with id: ${req.params.id}`);
                res.status(200).send(user)
            }
            else{
                errorLog.error(`User with id: ${req.params.id} not found`);
                res.sendStatus(404)
            }
    
        } catch (error) {
            errorLog.error(error.message);
            res.sendStatus(400)
        }

    }

    static async deleteUser(req, res){

        let result;

        try {
            if(result = await userService.deleteUser(req.params.id)){
                successLog.info(`User with id: ${req.params.id}  was deleted`);
                res.sendStatus(204);
            }
            else{
                errorLog.error(`There is no such user with id: ${req.params.id} in database`);
                res.sendStatus(404);
            }
        } catch (error) {
            errorLog.error(error.message);
            res.sendStatus(400)
        }   

    }

    static async updateUser(req, res){
        
        let userId = parseInt(req.params.id);
        let model = req.body;
        let user;
        
        try {
            user = await userService.updateUser(userId, model);

            if(user){
                successLog.info(`User with id: ${req.params.id}  was updated`);
                res.status(200).send(user);
            }
            else{
                errorLog.error(`There is no such user with id: ${req.params.id} in database`);
                res.sendStatus(404);
            }
        } catch (error) {
            errorLog.error(error.message);
            res.sendStatus(400)
        }

    }

    static async postUser(req, res){
        try {
            let user = await userService.postUser(req.body);

            successLog.info(`User with id: ${user.id}  was added`);
            res.status(200).send(user);
        } catch (error) {
            errorLog.error(error.message);
            res.send(error.message);
        }

    }
}   