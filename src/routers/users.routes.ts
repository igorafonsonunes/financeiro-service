import { Router } from "express";
import UsersController from "../controllers/users.controller";

export default class UsersRoutes{
    private controller: UsersController;

    constructor(){
        this.controller = new UsersController();
    }

    public listRoutes = (): Router => {
        const router = Router();
        router.use('/users', router);
        router.post('/', this.controller.store);
        router.put('/', this.controller.update);
        router.get('/:id', this.controller.show);
        router.delete('/:id', this.controller.delete);
        return router;
    };

}