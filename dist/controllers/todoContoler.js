"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getTodo = exports.getAllTodo = exports.updateTodo = exports.createTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const utils_1 = require("../utils");
const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const { error } = utils_1.creatTaskSchema.validate(req.body, utils_1.option);
        if (error)
            return res.status(400).json({ msg: error.details[0].message });
        const todo = await todoModel_1.Todo.create({
            status: false,
            description
        });
        if (!todo)
            return res.status(401).json({
                msg: "operation failed"
            });
        return res.status(200).json({
            msg: "successfully created Task",
            todo,
        });
    }
    catch (erroR) {
        res.status(500).json({
            err: "Internal server error occured",
            route: "get/todos/create-todo"
        });
    }
};
exports.createTodo = createTodo;
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, description } = req.body;
        const { error } = utils_1.updateTaskSchema.validate(req.body, utils_1.option);
        if (error)
            return res.status(400).json({ msg: error.details[0].message });
        const todo = await todoModel_1.Todo.findOneAndUpdate({
            _di: id
        }, {
            $set: {
                status: status,
                description: description
            }
        });
        if (todo) {
            return res.status(200).json({
                msg: "successfully updated Task",
                todo,
            });
        }
        return res.status(401).json({
            msg: "Task not found"
        });
    }
    catch (erroR) {
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        });
    }
};
exports.updateTodo = updateTodo;
const getAllTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.Todo.find({});
        if (todo) {
            return res.status(200).json({
                msg: "successfully updated Task",
                todo,
            });
        }
        return res.status(401).json({
            msg: "Tasks not found"
        });
    }
    catch (erroR) {
        res.status(500).json({
            err: "Internal server error occured",
            route: "get/todos"
        });
    }
};
exports.getAllTodo = getAllTodo;
const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel_1.Todo.findOne({
            _id: id
        });
        if (todo) {
            return res.status(200).json({
                msg: "todo found",
                todo,
            });
        }
        return res.status(401).json({
            msg: "Task not found"
        });
    }
    catch (erroR) {
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        });
    }
};
exports.getTodo = getTodo;
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel_1.Todo.findOneAndDelete({
            _id: id
        });
        if (todo) {
            return res.status(200).json({
                msg: `task with id: ${id} deleted successfully`,
                todo,
            });
        }
        return res.status(401).json({
            msg: "Task not found"
        });
    }
    catch (erroR) {
        res.status(500).json({
            err: "Internal server error occured",
            route: "patch/todos/create-todo"
        });
    }
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todoContoler.js.map