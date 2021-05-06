const Database = require('../potgres');

class UserModel {
    async makeUser (name, age) {
        let { rows } = await Database.query(`INSERT INTO users(user_name, age) VALUES ('${name}', '${age}')`);
        return rows;
    }

    async getUsers() {
        let { rows } = await Database.query(`SELECT * FROM users`);
        return rows;
    }

    async getUser(user_name) {
        let { rows } = await Database.query(`SELECT * FROM users WHERE user_name = ${user_name}`);
    }
}

module.exports = UserModel