import { Request, Response } from "express";
import Database from "../models";
import Users from "../models/users";
import UsersService from "../services/users.service";

export default class UsersController{
    private service: UsersService;

    constructor(){
        this.service = new UsersService();
    }

    public show = async(req:Request, res: Response): Promise<Users> => {
        const obj = await this.service.show((req.params.id as unknown) as number);
        return obj;
    };

    public store = async(req:Request, res: Response): Promise<Users> => {
        const obj = await this.service.store(req.body as  Users);
        return obj;
    };


    public update = async(req:Request, res: Response): Promise<Users> => {
        const obj = await this.service.updateData(req.body as  Users);
        return obj;
    };


    public delete = async(req:Request, res: Response): Promise<string> => {
        const obj = await this.service.removeData((req.params.id as unknown) as number);
        return obj;
    };
}