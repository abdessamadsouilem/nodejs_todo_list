const http = require('http');
const bodyParser = require("body-parser");



const { createNewTask } = require('./data_mysql/task_crud')
const server = http.createServer((req, res) => {
    console.log(req.body);
    if (req.url === '/api/create_task' && req.method === 'POST') {
        console.log("it's working");
        console.log(req.body);
        createNewTask(req, res);
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))