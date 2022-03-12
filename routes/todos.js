const router = require('express').Router();
const Todo = require('../models/todos');
const isAuthorized = require('../middleware/isAuthorized');

//Get all Todos
router.get('/', isAuthorized, async (req, res) => {
    console.log(req.headers.token)
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.json({ message: err });
    }
});


//Get a single Todo
router.get('/:id', isAuthorized, async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (err) {
        res.json({ message: err });
    }
});


//Add a new Todo
router.post('/', isAuthorized, async (req, res) => {
    const todo = new Todo({
        name: req.body.name
    });
    try {
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (err) {
        res.json({ message: err });
    }
}
);


//Delete a Todo
router.delete('/:id', isAuthorized, async (req, res) => {
    try {
        const removedTodo = await Todo.remove({ _id: req.params.id });
        res.json(removedTodo);
    } catch (err) {
        res.json({ message: err });
    }
});


//Update a Todo
router.put('/:id', isAuthorized, async (req, res) => {
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, { completed: req.params.completed }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;