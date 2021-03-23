import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from "typeorm";
import * as dotenv from 'dotenv';
import Users from "./users";
import Receipt from "./receipt";

export default class Database {
    public static connection: Connection;

    public static async getConnection(): Promise<void> {
        dotenv.config();
        let connectionOptions: ConnectionOptions = {
            name: `default`,
            type: 'postgres',
            host: process.env.DB_HOSTNAME,
            port: (process.env.DB_PORT as unknown) as number,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Users, Receipt],
            synchronize: true,
            extra: {
                ssl: {rejectUnauthorized: false}
            },
            
        };
        if (process.env.DB_PASSWORD) {
            Object.assign(connectionOptions, {
                password: process.env.DB_PASSWORD,
            });
        }

        this.connection = await createConnection(connectionOptions);
    }

    public static async closeConnection(): Promise<void> {
        await this.connection.close();
    }

}