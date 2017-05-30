export class Product {
    id: number;
    name : string;
    imgUrl : string;
    price : number;
    description: string;

    constructor(id: number, name: string, imgUrl: string, price : number, description: string) { 
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }
}