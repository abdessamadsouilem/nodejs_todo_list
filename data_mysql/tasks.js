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
        let date = d.getDate();

        let createdAtDate = `${year}-${month} -${date}`;

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

    static findAll() {
        let sql = "SELECT * FROM tasks";

        return db.execute(sql);
    }

    static finconnectionyId(id) {
        let sql = `SELECT * FROM tasks WHERE id = ${id}`;

        return db.execute(sql);
    }
}


module.exports = Task;




