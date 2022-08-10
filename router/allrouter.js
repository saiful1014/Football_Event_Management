const express=require('express');
const router=express.Router();
console.log("Allrouter");
const controller=require("../controller");
router.get('/sign',controller.signin);
router.get('/',controller.intro);
router.post('/',controller.search);
router.get('/welcome',controller.welcome);
router.get('/seasonPage',controller.season);
router.get('/teampage/:name',controller.team);
router.get('/:Reg',controller.profile);
router.post('/sign',controller.signincheck);


module.exports=router;