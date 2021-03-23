import * as dotenv from 'dotenv';

if (!process.env.NODE_ENV) {
  dotenv.config();
}

export = {
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: (process.env.DB_PORT as unknown) as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/models/*.ts'],
  migrations: ['./database/migrations/*.ts'],
  seeds: ['./database/seeds/*.ts'],
  cli: {
    migrationsDir: './database/migrations/',
    entitiesDir: './src/models/',
  },
  synchronize: false,
};
