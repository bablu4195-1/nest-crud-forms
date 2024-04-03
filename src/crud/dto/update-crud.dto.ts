import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';
import { min } from 'rxjs';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {    
        public name: string;
        public email: string;
        public age: number;
        public address: string;
        public phone: number;
    
        constructor(name: string, email: string, age: number, address: string, phone: number) {
            super();
            this.name = name;
            this.email = email;
            this.age = age;
            this.address = address;
            this.phone = phone;
        }
}
