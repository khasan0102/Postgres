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
    let client = await pool.connect();
    try {
       let { rows } = await client.query(`SELECT 1+1 as result`);
       console.log(rows);
    } catch (e) {
        console.log(e)
    } finally {
       client.release();
    }
})();

