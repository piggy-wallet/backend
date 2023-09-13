import "dotenv/config";

const { PORT, DB_USER, DB_PASS, DB_HOST, DB, DIALECT } = process.env;

type Dialect = 'mysql' | 'mariadb' | 'postgres' | 'cockroachdb' | 'sqlite' | 'mssql' | 'oracle' | 'sap' | 'spanner' | 'cordova' | 'nativescript' | 'react-native' |' expo' | 'mongodb'; 
 
//const dialect: Dialect = DIALECT;

export const env = {
    port: PORT,
    database: {
        db_user: DB_USER,
        db_pass: DB_PASS,
        db: DB,
        host: DB_HOST
    }
}