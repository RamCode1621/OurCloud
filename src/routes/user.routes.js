const {Router}=require('express');
const router= Router();
const {getData}=require('../controllers/reguisterUser.controller');
const {MathLogin,getCredentials}=require('../controllers/login.controller');


router.post('/loginUser',getCredentials);

router.post('/reguisterNewUser',getData);

module.exports=router;