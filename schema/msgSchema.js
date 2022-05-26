const mongoose = require('../node_modules/mongoose');


const Schema = mongoose.Schema;
const msgSchema = new Schema({
    id:Number,
    description: String,
    buttons:String,
    text:String
})
const msgModel = mongoose.model("Message", msgSchema);

async function addMsg (arrayMessage){
    let promiseSave = []
    arrayMessage.forEach(element => {
        console.log(element)
        promiseSave.push(new Promise((res)=>{
             msgModel(element).save();
             res(console.log('MsgAdd'))
        }))
    })
    Promise.all(promiseSave);
}
module.exports = {addMsg}