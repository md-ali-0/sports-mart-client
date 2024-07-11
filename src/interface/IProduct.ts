export interface IProduct {
    id: string | number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    status: "pending" | "processing" | "success" | "failed" | string;
}