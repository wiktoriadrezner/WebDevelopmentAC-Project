/* Draft */
class Controller {
    constructor(DB) {
        this.DB = new DB();
        this.Users = new Users(this);
    }
}
module.exports = new Controller();

class Users {
    constructor(Controller) {
        this.Controller = Controller;
    }
    static async getUser(username) {
        const user = await this.Controller.DB.getUserFromUsername(username);
        return user;
    }
}
