import mongoose,{Schema} from "mongoose";

export interface todoInstance {
    _id: string;
    description:string;
    status:Boolean;
}

const todoSchema = new Schema({
    description:{
        type: String,
        required:[true, "description is required"]
    },
    status: {
        type:Boolean,
        default:false
    }
})

export const Todo = mongoose.model<todoInstance>('Todo',todoSchema)