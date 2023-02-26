import express from 'express';
import routes from './routes';
import mysql from 'mysql';
require('dotenv').config();

class App {
    public server;

    private db_name = process.env.DATABASE_NAME;
    private db_user = process.env.DATABASE_USER;
    private db_pass = process.env.DATABASE_PASSWORD;
    private db_host = process.env.DATABASE_HOST;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();

        this.database();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    database() {
        // Database connection
        const connection = mysql.createConnection({
            host: this.db_host,
            user: this.db_user, 
            password: this.db_pass,
            database: this.db_name
        });

        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected To Mysql!");
        });
    }
}

export default new App().server;
