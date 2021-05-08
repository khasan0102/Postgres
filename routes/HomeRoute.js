const router = require("express").Router();
const Users = require("../models/UserModel");
const Referals = require("../models/ReferalModel");
const { userValidation } = require("../validations/validations");



router.get('/', async (request, response) => {
    let users = await Users.getUsers();
    let referals = await Referals.getReferals();
    users = users.sort((a, b) => a.user_id - b.user_id);
    response.render('index', {
        users, referals
    });
});

router.post('/', async (req, res) => {
    try {
        let { name, age, referal } = req.body;
        age = Number(age);
        referal = Number(referal);
        if(isNaN(age) || isNaN(referal))
            throw new Error('Incorred value');
        let data = await userValidation.validateAsync({name, age, referal});
        await Users.makeUser(data.name, data.age, data.referal);
        res.redirect('/');
    } catch (e) {
        if((e + "").includes("ValidationError")) e = (e + '').slice(16);
        if((e + "").includes("Error")) e = (e + '').slice(6);
        let users = await Users.getUsers();
        let referals = await Referals.getReferals();
        res.render('index', {
            users, referals, error: e + ''
        });
    }
});


router.get('/referals', async (request, response) => {
   let referals = await Referals.getReferals();
   response.json(referals);
});;

router.post("/user/edit", async (req, res) => {
    try {
        let { name, age, referal, id } = req.body;
        age = Number(age);
        referal = Number(referal);
        if(isNaN(referal) || isNaN(age))
            throw new Error("Incored value")
        let data = await userValidation.validateAsync({name, age, referal});
        await Users.editUser(id, "user_name", name);
        await Users.editUser(id, "user_age", age);
        await Users.editUser(id, " referal_id", referal);
        res.json({ok: true, message: "ok"});
    } catch (e) {
        console.log(e);
        if((e + "").includes("ValidationError")) e = (e + '').slice(16);
        if((e + "").includes("Error")) e = (e + '').slice(6);
        let users = await Users.getUsers();
        let referals = await Referals.getReferals();
        res.json({ok: false, message: e +""});
    }
});

router.post("/user/delete", async (req, res) => {
    try {
        console.log("post bo'ldi")
        let {id} = req.body;
        user_id = Number(id);
        if(isNaN(id));
            throw new Error("incored value");
        await Users.deleteUser(user_id);
        res.json({ok: true, message: "ok"});
    } catch (e){
        console.log(e)
        res.json({ok: false, message: e + ''});
    }
});

module.exports = {
    path: '/',
    router
}