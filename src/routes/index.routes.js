const {Router}=require('express');
const router=Router();
const {indexOf}=require('../controllers/index.controllers');

router.get('/',indexOf);

module.exports=router;