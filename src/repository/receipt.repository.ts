import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Receipt from "../models/receipt";

export default class ReceiptRepository extends Repository<Receipt>{
    private repository: Repository<Receipt>;

    constructor(){
        super();
        this.repository = getRepository(Receipt);
    }  

    public show = async(id: number): Promise<Receipt> => this.repository.findOne(id);

    public listByIdUser = async(id_user: number): Promise<Receipt[]> => 
        this.repository.find({where: {id_user}});

    public store = async(data: Receipt): Promise<Receipt> => this.repository.save(data);

    public updateData = async(data: Receipt): Promise<UpdateResult> =>
        this.repository.update(data.id, data);
    
    public removeData = async(id: number): Promise<DeleteResult> =>
        this.repository.delete(id);
}