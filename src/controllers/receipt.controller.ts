import { Request, Response } from "express";
import Receipt from "../models/receipt";
import ReceiptService from "../services/receipt.service";

export default class ReceiptController{
    private service: ReceiptService;

    constructor(){
        this.service = new ReceiptService();
    }

    public show = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.show((req.params.id as unknown) as number);
        return res.status(200).send(obj);
    };

    public listByIdUser = async (req: Request, res: Response): Promise<Response> => {
        const obj = await this.service.listByIdUser((req.params.id as unknown) as number);
        return res.status(200).send(obj);
    }

    public store = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.store(req.body as  Receipt);
        return res.status(200).send(obj);
    };

    public update = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.updateData(req.body as  Receipt);
        return res.status(200).send(obj);
    };

    public delete = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.removeData((req.params.id as unknown) as number);
        return res.status(200).send(obj);
    };
}