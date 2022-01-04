const Task = require("../data_mysql/tasks");

exports.createNewTask = async (req, res) => {
    try {
        const body = await getPostData(req);
        const { title, description } = JSON.parse(body);

        let task = new Task(title, description);
        task = await task.save();
        

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