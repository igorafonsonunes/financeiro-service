import Express from 'express';
import Database from './models';
import Routes from './routes';

export default class App {
    public server: any;
    private routes: Routes;

    constructor() {
        this.server = Express();
        this.routes = new Routes();

        this.middleware();
    }

    public middleware = () => {
        this.server.use(Express.json());
    };

    public router = () => {
        this.server.use(this.routes.init());
    };

    public run = async(): Promise<void> =>{
        await Database.getConnection();
        this.router();
        await Database.closeConnection();
    }


}