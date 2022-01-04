const Task = require("../data_mysql/tasks");

exports.createNewTask = async (req, res) => {
    try {
        let task = new Task(req.rawTrailers.title, req.rawTrailers.description);
        task = await task.save();

    } catch (error) {
        console.log(error);
    }
};