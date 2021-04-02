import {Router} from 'express';
import ReceiptRoutes from './routers/receipt.routes';
import UsersRoutes from './routers/users.routes';

export default class Routes{
    private router: Router;

    constructor(){
        this.router = Router();
    }

    public init = (): Router =>{
        this.router.use(new UsersRoutes().listRoutes());
        this.router.use(new ReceiptRoutes().listRoutes());
        return this.router;
    }
}