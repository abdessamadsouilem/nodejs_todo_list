const Database = require('../connection');
const mysql = require('mysql');
let db = new Database();
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    save() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        let createdAtDate = `${year}-${month} -${day}`;

        let sql =
            `INSERT INTO tasks(
                title,
                Description,
                created_at
            )
        VALUES(
            '${this.title}',
            '${this.description}',
            '${createdAtDate}'
        )`
            ;

        const newtask = db.connection.query(sql);
        return newtask;
    }

    getAllTasks() {
        let sql = "SELECT * FROM tasks";
        return db.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log("hello");
            return results; // good);
        });
    }

    getTaskById(id) {
        let sql = `SELECT * FROM tasks WHERE id = ${id}`;

        return db.connection.query(sql);
    }

    Delete(id) {
        let sql = `DELETE FROM tasks WHERE id =  ${id}`;
        return db.connection.query(sql);
    }

    UpdateTask(id) {
        let sql = `UPDATE tasks SET title = '${this.title}' , Description = '${this.description}' WHERE id = ${id}`;
        return db.connection.query(sql);

    }
}


module.exports = Task;




