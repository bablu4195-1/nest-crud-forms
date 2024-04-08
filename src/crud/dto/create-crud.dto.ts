import { ApiProperty } from "@nestjs/swagger";


export class CreateCrudDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    age: number;
    @ApiProperty()
    address: string;
    @ApiProperty()
    phone: number;

    constructor(name: string, email: string, age: number, address: string, phone: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
}


