const UserModel = require("./models/USerModel.js");

const user = new UserModel();

async function main () {
    await user.makeUser("khasan", 18);
    let response = await user.getUsers();
    console.log(response);
}

main();