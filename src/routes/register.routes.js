const {Router}=require('express');
const router= Router();
const {getData}=require('../controllers/reguisterUser.controllers');

router.post('/reguisterNewUser',getData);

module.exports=router;