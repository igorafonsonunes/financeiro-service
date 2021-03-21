import Express from 'express';
import Routes from './routes';

export default class App {
    public server: any;
    private routes: Routes;

    constructor(){
        this.server = Express;
        this.routes = new Routes();

        this.middleware();
        this.router();
    }

    public middleware = () =>{
        this.server.use(Express.json());
    };

    public router = () =>{
        this.server.use(this.routes.init());
    };
}