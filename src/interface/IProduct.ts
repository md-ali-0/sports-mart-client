/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IProduct {
    _id?: string;
    name: string;
    image: string | any;
    description: string;
    price: number;
    rating?: number;
    stock: number;
    category: string;
    brand: string;
}
