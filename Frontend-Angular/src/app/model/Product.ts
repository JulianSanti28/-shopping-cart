import { Category } from "./Category";

export class Product {
    idProducto?: number;
    nombre?: string;
    categoria?: Category;
    precio?: number;
    cantidadStock?: number;
    descripcion?: string;
    foto?: string;
    constructor() { }
}