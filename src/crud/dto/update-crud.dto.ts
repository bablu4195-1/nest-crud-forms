import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {        
        name: string;
        email: string;
        age: number;
        address: string;
        phone: number;
    
        constructor(name: string, email: string, age: number, address: string, phone: number) {
            super();
            this.name = name;
            this.email = email;
            this.age = age;
            this.address = address;
            this.phone = phone;
        }
}
