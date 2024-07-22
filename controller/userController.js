console.log('controllers')
const User = require('../models/Users');

const createNewUser = async (req, res) => {
    try{
        const newUser= new User(req.body)
        await newUser.save();
        res.status(200).json({mess:"user save success",user: newUser})
       // res.send("created!")
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
};


const deleteUser = async (req, res) => 
{
   try{
    let user=await User.findOneAndDelete({password:req.body.password})
    console.log(user)
    // למה צריך לשמור את מי שנמחק
    user.save()
    res.status(200).json({mess:"user delete success",user: user})
   }
   catch(e){
    res.status(400).json({"fail in deleted user ":e.mess});
   }
};

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({ users: users});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
};

const getUsersByPass = async (req, res) => {
    try{
        let user=await User.findOne({password:req.body.password})
        console.log(user)
        res.status(200).json({mess:"user find success",user: user})
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
};

function getUserById(req, res) {
    userModel.findById(req.user._id)
      .then((user) => {
        if (!user) {
          return handleUserNotFound(res);
        }
        res.send(user);
      })
      .catch((error) => {
        console.error('Error finding user', error);
        res.send(error);
      });
  }

const getUserByPassword = async (req, res) => {
    try {
        const user = await User.findOne({ password: req.body.password }); // Assuming the password field is 'password'

        if (!user) {
            console.log("23456")
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to fetch user", error: error.message });
    }
};

module.exports={createNewUser,getAllUsers,deleteUser,getUserByPassword};