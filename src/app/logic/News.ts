export class News {
    id: number;
    title : string;
    imgUrl : string;
    description: string;
    productId : number

    constructor(id: number, name: string, imgUrl: string, price : number, description: string, productId : number) { 
        this.id = id;
        this.title = name;
        this.imgUrl = imgUrl;
        this.description = description;
        this.productId = productId
    }
}