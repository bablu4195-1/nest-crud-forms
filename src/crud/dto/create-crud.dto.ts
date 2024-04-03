import { isString } from "util";

export class CreateCrudDto {
    
    name: string;
    email: string;
    age: number;
    address: string;
    phone: number;

    constructor(name: string, email: string, age: number, address: string, phone: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
}


