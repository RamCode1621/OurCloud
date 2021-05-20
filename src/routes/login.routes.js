const {Router}=require('express');
const router= Router();
const {MathLogin,getData}=require('../controllers/login.controller');

router.post('/loginUser',getData);

module.exports=router;