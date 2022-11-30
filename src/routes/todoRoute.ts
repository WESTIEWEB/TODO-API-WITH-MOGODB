import express from 'express';
import {createTodo, updateTodo, getAllTodo, getTodo, deleteTodo} from '../controllers/todoContoler'

const router = express.Router();

router.patch('/update-todo/:id', updateTodo)
router.post('/create-todo', createTodo);
router.get('/', getAllTodo);
router.get('/get-todo/:id', getTodo);
router.delete('/remove-todo/:id', deleteTodo);

export default router;