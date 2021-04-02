import { Request, Response } from "express";
import Users from "../models/users";
import UsersService from "../services/users.service";

export default class UsersController{
    private service: UsersService;

    constructor(){
        this.service = new UsersService();
    }

    public show = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.show((req.params.id as unknown) as number);
        return res.status(200).send(obj);
    };

    public store = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.store(req.body as  Users);
        return res.status(200).send(obj);
    };

    public update = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.updateData(req.body as  Users);
        return res.status(200).send(obj);
    };

    public delete = async(req:Request, res: Response): Promise<Response> => {
        const obj = await this.service.removeData((req.params.id as unknown) as number);
        return res.status(200).send(obj);
    };
}