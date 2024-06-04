import mongoose from 'mongoose';
import express from 'express';
import {Todo} from './models/todo.js';

let conn = await mongoose.connect('mongodb://localhost:27017/todo');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({ desc: "description of todo", isDone: false, days: 10});
    todo.save();
    res.send('Hello World!');

})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({});
    console.log(todo);
    res.json({title: todo.title, desc: todo.desc});

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//code for todo.js in models

import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});

const todoSchema3 = new mongoose.Schema({
    title: {type: Number, required: true, default: "hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', todoSchema);