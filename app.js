//pakage.json יבוא ספריות מ 
const express = require('express');
const routerUser=require('./routes/userRouter')
 const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
//שימוש בפונקציות
dotenv.config();
const app = express();
app.use(bodyParser.json());
//cors
 var corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));

// חיבור למונגוnod
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("connected DB");
    }).catch((err) => console.log("err "+err));

//תאזין לפורט
app.listen(process.env.PORT, function() {
        console.log('listen in port 3000');
    })
//שיך לשימוש בפונקציות לבדוק אם ניתן להקדים
app.use(routerUser)
