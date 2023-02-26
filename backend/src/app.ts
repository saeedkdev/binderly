import express from 'express';
import routes from './routes';
import mysql from 'mysql';
require('dotenv').config();
// import sequelize
import { Sequelize } from 'sequelize';
// import models
import { initUser } from './models/User';

class App {
    public server;

    private db_name = process.env.DATABASE_NAME;
    private db_user = process.env.DATABASE_USER;
    private db_pass = process.env.DATABASE_PASSWORD;
    private db_host = process.env.DATABASE_HOST;

    private sequelize : Sequelize;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();

        this.database();

        this.initModels(this.sequelize);

        this.initTables();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use('/api/v1', routes);
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

        this.sequelize = sequelize;
    }

    initModels(sequelize : Sequelize) {
        const models = [
            initUser(sequelize)
        ];
        return models;
    }

    initTables() {
        this.sequelize.sync();
    }
}

export default new App().server;
