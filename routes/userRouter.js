// יבוא ספרית אקספרס ושימוש בראוטר
const express=require('express');
const router=express.Router();
// יבוא של הסכמה יוסר
const users=require('../controller/userController');
// יבוא של הפונקציות הוספה מחיקה וכו
router.get('/getAllUsers',users.getAllUsers);
router.post('/createNewUser',users.createNewUser);
router.delete('/deleteUser',users.deleteUser);
router.post('/getUserByPassword',users.getUserByPassword);
// יצוא של הראוטר
module.exports=router;