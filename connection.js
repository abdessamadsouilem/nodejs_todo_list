class Database {
    constructor() {
        console.log("hello");
        const mysql = require('mysql');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todo_list'
        });
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });

    }
}
module.exports = Database;