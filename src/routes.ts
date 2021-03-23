import {Router} from 'express';
import UsersRoutes from './routers/users.routes';

export default class Routes{
    private router: Router;

    constructor(){
        this.router = Router();
    }

    public init = (): Router =>{
        this.router.use(new UsersRoutes().listRoutes());
        return this.router;
    }
}