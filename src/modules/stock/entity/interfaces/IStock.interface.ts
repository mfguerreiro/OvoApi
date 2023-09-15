export interface IStock {
    quantity: number;
    code?: number;
    costValue: number;
    saleValue: number;
    purchaseDate: Date;
    productId: string;
    userId: string;
}