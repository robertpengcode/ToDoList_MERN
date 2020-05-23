const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    important: {
        type: Boolean,
    },
    createDate: {
        type: Date,
        default: Date.now,
        require: true
    },
    dueDate: {
        type: Date,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    history: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);

