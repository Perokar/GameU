const mongoose = require ('../node_modules/mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema ({
    userId: Number,
    userName: String,
});
const UserData = mongoose.model('User',userSchema);
async function userAdd(id,Name){
    const user = await {
        userId:id,
        userName:Name
    }
    const findUser = await UserData.findOne({userId:id});
    if (findUser===null){
        const newUser = new UserData(user)
        newUser.save();
        console.log("User added");
    }
    else {
        console.log ("User is exist");
    }
}


module.exports = {userAdd}