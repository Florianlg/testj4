export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
    images: string[];
    brand: string;
}

export interface ProductsData {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}