"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoContoler_1 = require("../controllers/todoContoler");
const router = express_1.default.Router();
router.patch('/update-todo/:id', todoContoler_1.updateTodo);
router.post('/create-todo', todoContoler_1.createTodo);
router.get('/', todoContoler_1.getAllTodo);
router.get('/get-todo/:id', todoContoler_1.getTodo);
router.delete('/remove-todo/:id', todoContoler_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todoRoute.js.map