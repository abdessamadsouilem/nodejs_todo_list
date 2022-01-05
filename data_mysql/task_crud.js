const Task = require("../data_mysql/tasks");

exports.createNewTask = async (req, res) => {
    try {

        const body = await getPostData(req);
        
        const { title, description } = JSON.parse(body);
        let task = new Task(title, description);
        task = await task.save();
        res.end(JSON.stringify({ message: 'create task was good' }))


    } catch (error) {
        console.log(error);
    }
};
exports.DeleteTask = async (req, res) => {
    try {
        const body = await getPostData(req);
        const { id } = JSON.parse(body);
        let task = new Task();
        task = await task.Delete(id);
        res.end(JSON.stringify({ message: 'delete task was good' }));


    } catch (error) {
        console.log(error);
    }
};
exports.UpdateTask = async (req, res) => {
    try {
        const body = await getPostData(req);
        const { id, title, description } = JSON.parse(body);
        let task = new Task(title, description);
        task = await task.UpdateTask(id);
        res.end(JSON.stringify({ message: 'update task was good' }));


    } catch (error) {
        console.log(error);
    }
};
exports.SelectTask = async (req, res) => {
    try {
        let task = new Task();
        task = await task.getAllTasks();
        console.log(task);
        res.end(task);

    } catch (error) {
        console.log(error);
    }
};

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(err)
        }
    })
}