
import {Schema,model} from 'mongoose'

const issueSchema = new Schema({
      title: String,
      description: String,
      location: String,
      imageUrl: String,
      postedBy: { type:Schema.Types.ObjectId, ref: "User" },
      resolved: { type: Boolean, default: false },
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now }
    });

export const Issue = model("Issue", issueSchema);
