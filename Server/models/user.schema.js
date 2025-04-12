import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    googleId: String, 
    role: { type: String, enum: ["citizen", "admin", "rep"], default: "citizen" },
  });

  const User =model("user",userSchema)

  export default User

  
  