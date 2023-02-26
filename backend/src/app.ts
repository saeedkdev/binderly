import express from 'express';
import routes from './routes';
import mysql from 'mysql';
require('dotenv').config();
// import sequelize
import { Sequelize } from 'sequelize';

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
        const sequelize = new Sequelize(this.db_name, this.db_user, this.db_pass, {
            host: this.db_host,
            dialect: 'mysql'
        });

        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err =>{ 
            console.error('Unable to connect to the database:', err);
        });
    }

}

export default new App().server;
