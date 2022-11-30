import {Request, Response, NextFunction} from 'express';
import {Todo, todoInstance } from '../models/todoModel'
import { creatTaskSchema , updateTaskSchema, option} from '../utils'

export const createTodo = async(req:Request, res:Response) => {
    try{
        const { description } = req.body;
        const { error } = creatTaskSchema.validate(req.body, option);

        if(error) return res.status(400).json({msg: error.details[0].message})
        const todo = await Todo.create({
            status: false,
            description
        }) as unknown as todoInstance

        if(!todo) return res.status(401).json({
            msg:"operation failed"
        })

        return res.status(200).json({
            msg:"successfully created Task",
            todo,
        })

    }catch(erroR){
        res.status(500).json({
            err: "Internal server error occured",
            route: "get/todos/create-todo"
        })

    }
}
export const updateTodo = async(req:Request, res:Response) => {
    try{
        const { id } = req.params;
        const { status, description} = req.body;
        const { error } = updateTaskSchema.validate(req.body, option);

        if(error) return res.status(400).json({msg: error.details[0].message})

        const todo = await Todo.findOneAndUpdate({
            _di: id
        },{
            $set: {
                status:status,
                description:description
            }
        }) as unknown as todoInstance

        if(todo) {
            return res.status(200).json({
                msg:"successfully updated Task",
                todo,
            })
        }
        return res.status(401).json({
            msg:"Task not found"
        })

    }catch(erroR){
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        })

    }
}

export const getAllTodo = async(req:Request, res:Response) => {
    try{
        
        const todo = await Todo.find({}) as unknown as todoInstance

        if(todo) {
            return res.status(200).json({
                msg:"successfully gotten all Task",
                todo,
            })
        }
        return res.status(401).json({
            msg:"Tasks not found"
        })

    }catch(erroR){
        res.status(500).json({
            err: "Internal server error occured",
            route: "get/todos"
        })

    }
}


export const getTodo = async(req:Request, res:Response) => {
    try{
        const { id } = req.params;
        
        const todo = await Todo.findOne({
            _id: id
        }) as unknown as todoInstance

        if(todo) {
            return res.status(200).json({
                msg:"todo found",
                todo,
            })
        }
        return res.status(401).json({
            msg:"Task not found"
        })

    }catch(erroR){
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        })

    }
}
export const deleteTodo = async(req:Request, res:Response) => {
    try{
        const { id } = req.params;
        
        const todo = await Todo.findOneAndDelete({
            _id: id
        }) as unknown as todoInstance

        if(todo) {
            return res.status(200).json({
                msg:`task with id: ${id} deleted successfully`,
                todo,
            })
        }
        return res.status(401).json({
            msg:"Task not found"
        })

    }catch(erroR){
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        })

    }
}
