const { Pool } = require("pg");

const poolConf = {
    user: "postgres",
    password: "makka0102",
    database: "demo",
    port: 5432,
    host: "localhost"
}

const pool = new Pool(poolConf);


( async () => {
    try {
       let client = await pool.client.connect();
       console.log(client);
    } catch (e) {
        console.log(e)
    } finally {

    }
})();

