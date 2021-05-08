const { Pool: Potgres } = require("pg");
const config = require("../config");

const pg_config = {
    user: config.PGUSER,
    password: config.PGPASS,
    database: config.PGDB,
    port: config.PGPORT,
    host: config.PGHOST
}

class DATABSE {
    constructor(config) {
        this.config = config;
        this.#initDatabase();
    }

    async #initDatabase () {
        this.pool = new Potgres(this.config);
    }

    async query(SQL_QUERY) {
        let client
        try {
            client = await this.pool.connect();
            return client.query(SQL_QUERY)
        } catch (e) {
            throw new Error(e);
        } finally {
            client.release();
        }
    }
};

module.exports = new DATABSE(pg_config);