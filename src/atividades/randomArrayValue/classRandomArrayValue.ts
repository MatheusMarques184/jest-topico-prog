import { ErrorGetValues } from "./error.enum";

export class randomArayValue {
    private products: Array<object>;
    private numberOfRandomObjects : Number;

    setProducts(products: Array<object>): void {
        this.products = products
    }

    getProducts(): Array<object> {
        return this.products
    }

    setNumberOfRandomObjects(number: Number): void {
        this.numberOfRandomObjects = number    
    }

    getNumberOfRandomObjects(): Number {
        return this.numberOfRandomObjects
    }

    private randomize(): Array<object>{
        let result: any = [];
        while (result.length < this.numberOfRandomObjects) {
            let randomIndex = Math.floor(Math.random() * this.products.length);
            let randomObject: any = this.products[randomIndex];
            if (!result.includes(randomObject)) {
                result.push(randomObject);
            }
        }
        return result;
    }

    getRandomize(): Array<object> | string {
        if( typeof this.numberOfRandomObjects  !== "number") return ErrorGetValues.NOT_NUMBER
        if( this.numberOfRandomObjects <= 0) return ErrorGetValues.UNDER_MIN
        if( this.numberOfRandomObjects > this.products.length) return ErrorGetValues.OVER_LIMIT
        return this.randomize()
    }
}