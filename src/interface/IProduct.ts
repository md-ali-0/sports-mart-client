export interface IProduct {
    _id?: string;
    name: string;
    image: string;
    description: string;
    price: number;
    rating?: number;
    stock: number;
    category: string;
    brand: string;
}
