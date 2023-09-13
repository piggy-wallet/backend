import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "../config/index";
import { User } from "../api/user/User";

const { database } = env;

const options: DataSourceOptions = {
    type: 'mysql',
    host: database.host,
    username: database.db_user,
    password: database.db_pass,
    database: database.db,
    entities: [User],
    synchronize: true,
    dropSchema: false
};

export const AppDataSource: DataSource = new DataSource(options);

export const db_init = async (dataSource: DataSource) => {
    try {
        await dataSource.initialize();
        console.log(`Database connection was successfully.`);
    } catch (err) {
        console.error(`Unable to connect to database. ERROR: ${err}`);
    }
};
