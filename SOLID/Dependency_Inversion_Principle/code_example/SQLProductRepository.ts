import { IProductRepository } from "./IProductRepository";

export class SQLProductRepository implements IProductRepository{
    getAllProductNames(): String[] {
        return ['pants', 'bags'];
    }
}