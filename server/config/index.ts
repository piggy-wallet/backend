import "dotenv/config";

const { PORT, DB_USER, DB_PASS, DB_HOST, DB, SECRET_ENV, SECRET_IV, ECNRYPTION_METHOD, ACCESSTOKENEXPIRESIN, SECRET_JWT } = process.env;

type Dialect = 'mysql' | 'mariadb' | 'postgres' | 'cockroachdb' | 'sqlite' | 'mssql' | 'oracle' | 'sap' | 'spanner' | 'cordova' | 'nativescript' | 'react-native' |' expo' | 'mongodb'; 
 
//const dialect: Dialect = DIALECT;

export const env = {
    port: PORT,
    database: {
        db_user: DB_USER,
        db_pass: DB_PASS,
        db: DB,
        host: DB_HOST
    },
    encrypt_env: {
        secret_key: SECRET_ENV,
        secret_iv: SECRET_IV,
        ecnryption_method: ECNRYPTION_METHOD
    },
    jwt_env: {
        expiresIn: ACCESSTOKENEXPIRESIN,
        secret: SECRET_JWT
    }
}