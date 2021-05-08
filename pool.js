const ReferalModel = require("./models/ReferalModel.js");



async function main () {
    let response = await ReferalModel.makeReferal("Kochadan");
    console.log(response);
}

main();