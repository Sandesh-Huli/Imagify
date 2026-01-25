import mongoose from 'mongoose';
main()
.then(()=>{
    console.log("connected to the database done")
})
.catch((err)=>{
    console.log(err)
})
async function main(){
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/imagify';
    await mongoose.connect(uri);
}
export default main;