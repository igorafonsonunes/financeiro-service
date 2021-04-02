import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Users from "../models/users";

export default class UsersRepository extends Repository<Users>{
    private repository: Repository<Users>;

    constructor() {
        super();
        this.repository = getRepository(Users);
    }

    public show = async (id: number): Promise<Users> => this.repository.findOne(id);

    public store = async (data: Users): Promise<Users> => this.repository.save(data);

    public updateData = async(data: Users): Promise<UpdateResult> => 
        this.repository.update(data.id, data);

    public removeData = async (id: number): Promise<DeleteResult> => this.repository.delete(id);
}