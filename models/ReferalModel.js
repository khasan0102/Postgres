const Database = require("../modules/potgres");

class ReferalModel {
    async makeReferal(referal_name) {
        let { rows } = await Database.query(`INSERT INTO referal (referal_name) VALUES ('${referal_name}') RETURNING *`);
        return rows;
    }

    async getReferals () {
        let { rows } = await Database.query  (`SELECT * FROM referal`);
        return rows;
    }
}

module.exports = new ReferalModel();