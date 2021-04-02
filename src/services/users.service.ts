import Users from "../models/users";
import UsersRepository from "../repository/users.repository";

export default class UsersService {
    private repository: UsersRepository;

    constructor() {
        this.repository = new UsersRepository();
    }

    public show = async (id: number): Promise<Users> => this.repository.show(id);

    public store = async(data: Users): Promise<Users> => this.repository.store(data);

    public removeData = async (id: number): Promise<string> => {
        const obj = await this.show(id);
        if (obj) {
            await this.repository.removeData(obj.id);
            return 'user deleted';
        }
        return 'user not found.'
    }

    public updateData = async(data: Users): Promise<Users> =>{
        await this.repository.updateData(data);
        const obj = await this.show(data.id);
        return obj;
    }
}