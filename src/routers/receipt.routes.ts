import { Router } from "express";
import ReceiptController from "../controllers/receipt.controller";

export default class ReceiptRoutes{
    private controller: ReceiptController;

    constructor(){
        this.controller = new ReceiptController();
    }

    public listRoutes = (): Router => {
        const router = Router();
        router.use('/receipt', router);
        router.post('/', this.controller.store);
        router.put('/', this.controller.update);
        router.get('/users/:id', this.controller.listByIdUser)
        router.get('/:id', this.controller.show);
        router.delete('/:id', this.controller.delete);
        return router;
    };

}