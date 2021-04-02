import Receipt from "../models/receipt";
import ReceiptRepository from "../repository/receipt.repository";

export default class ReceiptService {
    private repository: ReceiptRepository;

    constructor() {
        this.repository = new ReceiptRepository();
    }

    public show = async (id: number): Promise<Receipt> => this.repository.show(id);

    public listByIdUser = async (id_user: number): Promise<Receipt[]> =>
        this.repository.listByIdUser(id_user);

    public store = async (data: Receipt): Promise<Receipt> => this.repository.store(data);

    public updateData = async (data: Receipt): Promise<any> => {
        const obj = await this.repository.updateData(data);
        console.log(obj);
        return obj;
    }

    public removeData = async (id: number): Promise<string> => {
        const obj = await this.show(id);
        if (obj) {
            await this.repository.removeData(obj.id);
            return 'receipt deleted.';
        }
        return 'receipt not found.';
    }

}