export class Product{
    productId:string;
	productName:string;
    productDescription:string;
    productCategory:string;
    units:number;

    constructor(){
        this.productId="";
        this.productName="";
        this.productDescription="";
        this.productCategory="";
        this.units=0;
    }
}