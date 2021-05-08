const Database = require('../modules/potgres');

class UserModel {
    async makeUser (name, age, referal_id) {
        let { rows } = await Database.query(`INSERT INTO users(user_name, user_age, referal_id) VALUES ('${name}', '${age}', ${referal_id})`);
        return rows;
    }

    async getUsers() {
        let { rows } = await Database.query(`SELECT * FROM users INNER JOIN referal ON referal.referal_id = users.referal_id`);
        return rows;
    }

    async getUser(user_id) {
        let { rows } = await Database.query(`SELECT * FROM users WHERE user_id = ${user_id}`);
        return rows
    }

    async editUser(id, keyname, value) {
        let { rows } = await Database.query(`UPDATE users SET ${keyname} = '${value}' WHERE user_id = ${id} RETURNING *`);
        return rows;
    }

    async deleteUser(id) {
        let { rows } = await Database.query(`DELETE FROM users WHERE user_id = ${id} RETURNING * `);
        return rows;
    }
}

module.exports = new UserModel();