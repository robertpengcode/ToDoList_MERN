const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    // important: {
    //     type: Boolean,
    // },
    // createDate: {
    //     type: Date,
    //     default: Date.now,
    //     require: true
    // },
    // dueDate: {
    //     type: Date,
    // },
    // completed: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // },
    // history: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // }
});

module.exports = Task = mongoose.model('task', TaskSchema);

