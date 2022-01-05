const http = require('http');




const { createNewTask, DeleteTask, UpdateTask, SelectTask } = require('./data_mysql/task_crud');
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST,PUT,DELETE");
    res.setHeader('Access-Control-Allow-Headers', 'content-type');

    if (req.url === '/api/create_task' && req.method === 'POST') {
        console.log("create  working");
        createNewTask(req, res);

    } else if (req.url === '/api/delete_task' && req.method === 'POST') {
        console.log("delete  working");
        DeleteTask(req, res);
    } else if (req.url === '/api/update_task' && req.method === 'POST') {
        console.log("update  working");
        UpdateTask(req, res);
    }
    else if (req.url === '/api/tasks' && req.method === 'GET') {
        console.log("select  working");
        SelectTask(req, res);
    } else {
        console.log("nothing working");
    }
});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))